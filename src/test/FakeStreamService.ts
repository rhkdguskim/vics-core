import EventEmiiter from "../util/EventEmitter.js";
import { VicsVideoStreamService } from "../VicsStreamService.js";

type FrameData = (data: CustomEvent<Uint8Array>) => void;
type Time = (time: CustomEvent<Date>) => void;

function parse(data: ArrayBuffer) {
  var input = new Uint8Array(data),
    dv = new DataView(input.buffer),
    duration,
    audioLength,
    audio,
    video;

  duration = dv.getUint16(0, true);
  audioLength = dv.getUint16(2, true);
  audio = input.subarray(4, audioLength + 4);
  video = input.subarray(audioLength + 4);

  return {
    audio: audio,
    video: video,
    duration: duration,
  };
}

export class FakeStreamService
  extends EventEmiiter
  implements VicsVideoStreamService
{
  private ws: WebSocket;
  private clients: Map<string, any>;
  constructor({ ip, port }: { ip: string; port: string }) {
    super();
    this.ws = new WebSocket(`ws://${ip}:${port}`);
    this.ws.binaryType = "arraybuffer";
    this.clients = new Map();

    this.ws.onopen = (event) => {
      console.log("fake Websocket Opened");
    };

    this.ws.onclose = (event) => {
      console.log("fake Websocket Closed");
    };

    this.ws.onmessage = (event) => {
      this.clients.forEach((v, k) => {
        const { video } = parse(event.data);
        this.dispatchEvent(new CustomEvent(`frame/${k}`, { detail: video }));
      });

      this.clients.forEach((v, k) => {
        this.dispatchEvent(
          new CustomEvent(`time/${k}`, { detail: new Date() }),
        );
      });
    };
  }

  public regTimeCallback(uuid: string, func: Time) {
    this.clients.set(uuid, "");
    this.addEventListener(`time/${uuid}`, func);
  }

  public regFrameCallback(uuid: string, func: FrameData) {
    this.addEventListener(`frame/${uuid}`, func);
  }

  public unRegTimeCallback(uuid: string) {
    this.clients.delete(uuid);
    this.removeEventListener(`time/${uuid}`);
  }

  public unRegFrameCallback(uuid: string) {
    this.removeEventListener(`frame/${uuid}`);
  }
}
