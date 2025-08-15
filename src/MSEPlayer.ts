import EventEmitter from "./util/EventEmitter.js";
import BufferController from "./controller/buffer.js";
import * as debug from "./util/debug.js";

/** 플레이어 동작 모드 */
export type PlayerMode = "video" | "audio" | "both";

/** 외부에서 넘겨줄 옵션 */
export interface MSEPlayerOptions {
  /** video 엘리먼트 id 또는 실제 노드 */
  node: string | HTMLVideoElement;
  mode?: PlayerMode;
  flushingTime?: number;   // 주기적으로 append/cleanup할 간격(ms)
  maxDelay?: number;       // 최대 지연 허용(ms)
  clearBuffer?: boolean;   // 주기적으로 버퍼 정리
  debug?: boolean;
  readFpsFromTrack?: boolean;
}

/** 워커에서 오는 메시지 payload 타입(필요한 부분만 정의) */
type WorkerEvent =
  | { event: "onDecoded"; buffer: any; kfPosition: number[] }
  | { event: "onReady"; data: { track: Array<{ type: "video" | "audio"; mp4track: { codec: string } }> } }
  | { event: "onMissingVideoFrames" }
  | { event: "onMissingAudioFrames" };

export default class MSEPlayer extends EventEmitter {
  /** 브라우저가 해당 코덱을 지원하는지 */
  static isSupported(codec: string): boolean {
    return !!(window.MediaSource && window.MediaSource.isTypeSupported(codec));
  }

  /** 내부 상태/필드들 */
  private options: Required<MSEPlayerOptions>;
  private decoderWorker: Worker;
  private node!: HTMLVideoElement;
  private mediaSource!: MediaSource;
  private url = "";
  private mseReady = false;
  private mseEnded = false;
  private isReset = false;
  private interval: ReturnType<typeof setInterval> | null = null;
  private bufferControllers: Record<string, BufferController> | null = null;
  private kfPosition: number[] = [];
  private lastCleaningTime = Date.now();
  private track: Array<{ type: "video" | "audio"; mp4track: { codec: string } }> = [];
  private videoStarted = false;

  constructor(opts: MSEPlayerOptions) {
    super();

    const defaults: Required<MSEPlayerOptions> = {
      node: "",
      mode: "video",
      flushingTime: 100,
      maxDelay: 300,
      clearBuffer: true,
      debug: false,
      readFpsFromTrack: true,
    };

    this.options = Object.assign({}, defaults, opts);

    if (this.options.debug) debug.setLogger();

    // 디코더 워커 초기화 (원본과 동일 경로 규칙 유지)
    this.decoderWorker = new Worker(
      new URL("./worker/H264DecoderWorker.js", import.meta.url),
    );
    this.decoderWorker.postMessage({
      command: "init",
      options: {
        mode: this.options.mode,
        debug: this.options.debug,
        readFpsFromTrack: this.options.readFpsFromTrack,
      },
    });

    // 워커 이벤트 수신
    this.decoderWorker.onmessage = (e: MessageEvent<WorkerEvent | any>) => {
      const m = e.data;
      switch (m?.event) {
        case "onDecoded": {
          const { buffer, kfPosition } = m as Extract<WorkerEvent, { event: "onDecoded" }>;
          this.onBuffer(buffer);
          this.kfPosition = kfPosition;
          break;
        }
        case "onReady": {
          const { data } = m as Extract<WorkerEvent, { event: "onReady" }>;
          this.track = data.track;
          this.createBuffer();
          this.dispatchEvent(new CustomEvent("onReady"));
          break;
        }
        case "onMissingVideoFrames":
          this.dispatchEvent(new CustomEvent("onMissingVideoFrames"));
          break;
        case "onMissingAudioFrames":
          this.dispatchEvent(new CustomEvent("onMissingAudioFrames"));
          break;
        default:
          break;
      }
    };

    this.initBrowser();
    this.startInterval();
  }

  /** 디코더로 원시 video/audio 바이트 공급 */
  feed(video?: Uint8Array, audio?: Uint8Array) {
    if (this.decoderWorker) {
      this.decoderWorker.postMessage({ command: "feed", data: { video, audio } });
    }
  }

  /** 비디오 엘리먼트/MediaSource 초기화 */
  private initBrowser() {
    if (typeof this.options.node === "string" && this.options.node === "") {
      debug.error("no video element were found to render, provide a valid video element");
    }

    this.node = (typeof this.options.node === "string"
      ? document.getElementById(this.options.node)
      : this.options.node) as HTMLVideoElement;

    this.mseReady = false;
    this.setupMSE();
  }

  /** MSE 준비 */
  private setupMSE() {
    // ManagedMediaSource(iOS17+) 대응: 타입 미정이라 any로 접근
    (window as any).MediaSource =
      (window as any).MediaSource ||
      (window as any).WebKitMediaSource ||
      (window as any).ManagedMediaSource;

    if (!(window as any).MediaSource) {
      throw new Error("Browser does not support Media Source Extension or Managed Media Source (iOS 17+).");
    }

    const ManagedMediaSource = (window as any).ManagedMediaSource;
    this.mediaSource = ManagedMediaSource ? new ManagedMediaSource() : new MediaSource();
    this.url = URL.createObjectURL(this.mediaSource as unknown as MediaSource);

    if (ManagedMediaSource) {
      try {
        this.node.removeAttribute("src");
        (this.node as any).disableRemotePlayback = true;
        const source = document.createElement("source");
        source.type = "video/mp4";
        source.src = this.url;
        this.node.appendChild(source);
        this.node.load();
      } catch {
        this.node.src = this.url;
      }
    } else {
      this.node.src = this.url;
    }

    this.mseEnded = false;

    // 이벤트 바인딩
    this.mediaSource.addEventListener("sourceopen", this.onMSEOpen);
    this.mediaSource.addEventListener("sourceclose", this.onMSEClose);
    // WebKit 프리픽스(구형)
    (this.mediaSource as any).addEventListener?.("webkitsourceopen", this.onMSEOpen);
    (this.mediaSource as any).addEventListener?.("webkitsourceclose", this.onMSEClose);
  }

  private endMSE() {
    if (!this.mseEnded) {
      try {
        this.mseEnded = true;
        this.mediaSource.removeEventListener("sourceopen", this.onMSEOpen);
        this.mediaSource.removeEventListener("sourceclose", this.onMSEClose);
        (this.mediaSource as any).removeEventListener?.("webkitsourceopen", this.onMSEOpen);
        (this.mediaSource as any).removeEventListener?.("webkitsourceclose", this.onMSEClose);
        (this.mediaSource as any).endOfStream?.();
      } catch {
        debug.error("mediasource is not available to end");
      }
    }
  }

  destroy() {
    this.stopInterval();

    if (this.bufferControllers) {
      for (const t in this.bufferControllers) this.bufferControllers[t].destroy();
      this.bufferControllers = null;
      this.endMSE();
    }

    this.node = undefined as unknown as HTMLVideoElement;
    this.mseReady = false;
    this.videoStarted = false;
    this.mediaSource = undefined as unknown as MediaSource;

    this.decoderWorker.postMessage({ command: "close" });
    this.decoderWorker.terminate();
    // @ts-expect-error: 명시적 null 허용
    this.decoderWorker = null;

    this.offAll();
  }

  reset() {
    this.stopInterval();
    this.isReset = true;
    this.node.pause();

    if (this.bufferControllers) {
      for (const t in this.bufferControllers) this.bufferControllers[t].destroy();
      this.bufferControllers = null;
      this.endMSE();
    }

    this.startInterval();
    this.initBrowser();
    debug.log("JMuxer was reset");
  }

  /** SourceBuffer 생성 */
  private createBuffer() {
    if (!this.mseReady || this.bufferControllers) return;

    this.bufferControllers = {};
    for (const { type, mp4track } of this.track) {
      const mime = `${type}/mp4; codecs="${mp4track.codec}"`;
      if (!MSEPlayer.isSupported(mime)) {
        debug.error("Browser does not support codec");
        return;
      }
      const sb = this.mediaSource.addSourceBuffer(mime);
      const ctrl = new BufferController(sb, type);
      ctrl.addEventListener("error", this.onBufferError);
      this.bufferControllers[type] = ctrl;
    }
  }

  /** 주기 작업 타이머 */
  private startInterval() {
    this.interval = setInterval(() => {
      if (this.options.flushingTime) {
        this.applyAndClearBuffer();
      } else if (this.bufferControllers) {
        this.cancelDelay();
      }
    }, this.options.flushingTime ?? 1000);
  }
  private stopInterval() {
    if (this.interval) clearInterval(this.interval);
    this.interval = null;
  }

  private cancelDelay() {
    if (this.node.buffered && this.node.buffered.length > 0 && !this.node.seeking) {
      const end = this.node.buffered.end(0);
      if (end - this.node.currentTime > (this.options.maxDelay ?? 300) / 1000) {
        this.node.currentTime = end - 0.001;
      }
    }
  }

  private releaseBuffer() {
    if (!this.bufferControllers) return;
    for (const t in this.bufferControllers) this.bufferControllers[t].doAppend();
  }

  private applyAndClearBuffer() {
    if (!this.bufferControllers) return;
    this.releaseBuffer();
    this.clearBuffer();
  }

  private getSafeClearOffsetOfBuffer(offset: number) {
    let maxLimit = (this.options.mode === "audio" && offset) || 0;
    let adjacentOffset: number | undefined;

    for (let i = 0; i < this.kfPosition.length; i++) {
      if (this.kfPosition[i] >= offset) break;
      adjacentOffset = this.kfPosition[i];
    }

    if (adjacentOffset) {
      this.kfPosition = this.kfPosition.filter((kf) => {
        if (kf < adjacentOffset!) maxLimit = kf;
        return kf >= adjacentOffset!;
      });
    }
    return maxLimit;
  }

  private clearBuffer() {
    if (!this.bufferControllers) return;
    if (this.options.clearBuffer && Date.now() - this.lastCleaningTime > 10000) {
      const current = this.node.currentTime;
      const safeOffset = this.getSafeClearOffsetOfBuffer(current);
      for (const t in this.bufferControllers) {
        this.bufferControllers[t].initCleanup(safeOffset);
      }
      this.lastCleaningTime = Date.now();
    }
  }

  /** 디코더에서 올라온 버퍼를 SB에 밀어넣음 */
  private onBuffer = (data: { type: string; payload: Uint8Array }) => {
    if (this.bufferControllers?.[data.type]) {
      this.bufferControllers[data.type].feed(data.payload);
    }
    if ((this.options.flushingTime ?? 100) === 0) {
      this.applyAndClearBuffer();
    }
  };

  /** MSE events */
  private onMSEOpen = () => {
    this.mseReady = true;
    URL.revokeObjectURL(this.url);
    if (typeof (this.options as any).onReady === "function") {
      (this.options as any).onReady.call(null, this.isReset);
    }
  };

  private onMSEClose = () => {
    this.mseReady = false;
    this.videoStarted = false;
  };

  private onBufferError = (e: CustomEvent<{ name: string; type: string }>) => {
    const data = e.detail;
    if (data.name === "QuotaExceeded") {
      debug.log(`JMuxer cleaning ${data.type} buffer due to QuotaExceeded error`);
      this.bufferControllers?.[data.type]?.initCleanup(this.node.currentTime);
      return;
    } else if (data.name === "InvalidStateError") {
      debug.log("JMuxer is reseting due to InvalidStateError");
      this.reset();
    } else {
      this.endMSE();
    }
    this.dispatchEvent(new CustomEvent("onError"));
  };
}