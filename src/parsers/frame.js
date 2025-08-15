import { unix_to_date_time } from "../util/time";

const VIDEO_FRAME_HEADER = 57;
const I_FRAME_SIZE = 44;
const P_FRAME_SIZE = 4;

function bytes_to_uuid(data, start) {
  let str = "";
  for (let i = start; i < start + 36; i++) {
    str += String.fromCharCode(data[i]);
  }
  return str;
}

export function parse_frame(data) {
  const dataView = new DataView(data.buffer);
  const frame = {
    streamType: dataView.getUint32(0, false),
    frameType: dataView.getUint32(4, false),
    secs: unix_to_date_time(dataView.getUint32(12, false)),
    msecs: unix_to_date_time(dataView.getUint32(16, false)),
    uuid: bytes_to_uuid(data, 24),
    dataBuf: data.subarray(VIDEO_FRAME_HEADER),
    dataLen: data.byteLength - VIDEO_FRAME_HEADER,
    bufLen: data.byteLength,
  };
  return frame;
}
