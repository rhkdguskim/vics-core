import EventEmitter from "./util/EventEmitter";
import RemuxController from "./controller/remux";
import * as debug from "./util/debug";
import { NALU } from "./util/nalu.js";
import { appendByteArray } from "./util/utils.js";
import { H264Parser } from "./parsers/h264.js";
import { AACParser } from "./parsers/aac.js";

export default class H264Decoder extends EventEmitter {
  constructor(options) {
    super();

    let defaults = {
      mode: "both",
      fps: 30,
      readFpsFromTrack: false,
      debug: false,
    };

    this.options = Object.assign({}, defaults, options);

    if (this.options.debug) {
      debug.setLogger();
    }

    if (!this.options.fps) {
      this.options.fps = 30;
    }

    this.frameDuration = (1000 / this.options.fps) | 0;

    this.env =
      typeof process === "object" && typeof window === "undefined"
        ? "node"
        : "browser";

    this.remuxController = new RemuxController(this.env);

    this.remuxController.addTrack(this.options.mode);
    this.initData();

    this.remuxController.addEventListener("buffer", this.onBuffer.bind(this));
    this.remuxController.addEventListener("ready", () => {
      const track = [];
      for (let type in this.remuxController.tracks) {
        track.push({
          type,
          mp4track: this.remuxController.tracks[type].mp4track,
        });
      }
      this.dispatchEvent(new CustomEvent("onReady", { detail: { track } }));
    });
  }

  initData() {
    this.lastCleaningTime = Date.now();
    this.kfPosition = [];
    this.kfCounter = 0;
    this.pendingUnits = {};
    this.remainingData = new Uint8Array();
  }

  feed(data) {
    let remux = false,
      slices,
      left,
      duration,
      chunks = {
        video: [],
        audio: [],
      };

    if (!data || !this.remuxController) return;

    duration = data.duration ? parseInt(data.duration) : 0;

    if (data.video) {
      data.video = appendByteArray(this.remainingData, data.video);
      [slices, left] = H264Parser.extractNALu(data.video);
      this.remainingData = left || new Uint8Array();

      if (slices.length > 0) {
        chunks.video = this.getVideoFrames(
          slices,
          duration,
          data.compositionTimeOffset,
        );
        remux = true;
      } else {
        debug.error("Failed to extract any NAL units from video data:", left);
        this.dispatchEvent(
          new CustomEvent("onMissingVideoFrames", { detail: data }),
        );
        return;
      }
    }
    if (data.audio) {
      slices = AACParser.extractAAC(data.audio);
      if (slices.length > 0) {
        chunks.audio = this.getAudioFrames(slices, duration);
        remux = true;
      } else {
        debug.error("Failed to extract audio data from:", data.audio);
        this.dispatchEvent(
          new CustomEvent("onMissingAudioFrames", { detail: data }),
        );
        return;
      }
    }
    if (!remux) {
      debug.error(
        "Input object must have video and/or audio property. Make sure it is a valid typed array",
      );
      return;
    }

    this.remuxController.remux(chunks);
  }

  onBuffer(data) {
    if (
      this.options.readFpsFromTrack &&
      typeof data.fps !== "undefined" &&
      this.options.fps != data.fps
    ) {
      this.options.fps = data.fps;
      this.frameDuration = Math.ceil(1000 / data.fps);
      debug.log(`JMuxer changed FPS to ${data.fps} from track data`);
    }

    this.dispatchEvent(
      new CustomEvent("onDecoded", {
        detail: { buffer: data.detail.data, kfPosition: this.kfPosition },
      }),
    );
  }

  getVideoFrames(nalus, duration, compositionTimeOffset) {
    let units = [],
      frames = [],
      fd = 0,
      tt = 0,
      keyFrame = false,
      vcl = false;
    if (this.pendingUnits.units) {
      units = this.pendingUnits.units;
      vcl = this.pendingUnits.vcl;
      keyFrame = this.pendingUnits.keyFrame;
      this.pendingUnits = {};
    }
    for (let nalu of nalus) {
      let unit = new NALU(nalu);
      if (unit.type() === NALU.IDR || unit.type() === NALU.NDR) {
        H264Parser.parseHeader(unit);
      }
      if (units.length && vcl && (unit.isfmb || !unit.isvcl)) {
        frames.push({
          units,
          keyFrame,
        });
        units = [];
        keyFrame = false;
        vcl = false;
      }
      units.push(unit);
      keyFrame = keyFrame || unit.isKeyframe();
      vcl = vcl || unit.isvcl;
    }
    if (units.length) {
      // lets keep indecisive nalus as pending in case of fixed fps
      if (!duration) {
        this.pendingUnits = {
          units,
          keyFrame,
          vcl,
        };
      } else if (vcl) {
        frames.push({
          units,
          keyFrame,
        });
      } else {
        let last = frames.length - 1;
        if (last >= 0) {
          frames[last].units = frames[last].units.concat(units);
        }
      }
    }
    fd = duration ? (duration / frames.length) | 0 : this.frameDuration;
    tt = duration ? duration - fd * frames.length : 0;

    frames.map((frame) => {
      frame.duration = fd;
      frame.compositionTimeOffset = compositionTimeOffset;
      if (tt > 0) {
        frame.duration++;
        tt--;
      }
      this.kfCounter++;
      if (frame.keyFrame && this.options.clearBuffer) {
        this.kfPosition.push((this.kfCounter * fd) / 1000);
      }
    });
    debug.log(`jmuxer: No. of frames of the last chunk: ${frames.length}`);
    return frames;
  }

  getAudioFrames(aacFrames, duration) {
    let frames = [],
      fd = 0,
      tt = 0;

    for (let units of aacFrames) {
      frames.push({ units });
    }
    fd = duration ? (duration / frames.length) | 0 : this.frameDuration;
    tt = duration ? duration - fd * frames.length : 0;
    frames.map((frame) => {
      frame.duration = fd;
      if (tt > 0) {
        frame.duration++;
        tt--;
      }
    });
    return frames;
  }

  destroy() {
    if (this.remuxController) {
      this.remuxController.flush();
      this.remuxController.offAll();
      this.remuxController.destroy();
      this.remuxController = null;
    }
    this.offAll();
  }
}
