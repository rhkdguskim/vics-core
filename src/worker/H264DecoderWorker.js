import H264Decoder from "../H264Decoder";

let decoder;

onmessage = function (e) {
  if (e.data.command === "init") {
    decoder = new H264Decoder(e.data.options);
    decoder.addEventListener("onDecoded", (e) => {
      const buffer = e.detail.buffer;
      const kfPosition = e.detail.kfPosition;
      this.postMessage({ event: "onDecoded", buffer, kfPosition });
    });
    decoder.addEventListener("onMissingVideoFrames", (e) => {
      const data = e.detail;
      this.postMessage({ event: "onMissingVideoFrames", data });
    });
    decoder.addEventListener("onMissingAudioFrames", (e) => {
      const data = e.detail;
      this.postMessage({ event: "onMissingAudioFrames", data });
    });
    decoder.addEventListener("onReady", (e) => {
      this.postMessage({ event: "onReady", data: e.detail });
    });
  } else if (e.data.command === "feed") {
    decoder.feed(e.data.data);
  } else if (e.data.command === "close") {
    if (decoder) {
      decoder.destroy();
    }
  }
};
