import { VicsConfig } from "../VicsDefaultService";
import VicsStreamService, { StreamType } from "../VicsStreamService";

let service: VicsStreamService | null = null;

export enum CommandType {
  INIT,
  START_LIVE,
  STOP_LIVE,
  CLOSE,
}

interface InitCommand {
  command: CommandType.INIT;
  config: VicsConfig;
}

interface StartLiveCommand {
  command: CommandType.START_LIVE;
  cam_id: string;
  nStream: StreamType;
}

interface StopLiveCommand {
  command: CommandType.STOP_LIVE;
}

type Command = InitCommand | StartLiveCommand | StopLiveCommand;

type WorkerMessageEvent = MessageEvent<Command>;

// self.addEventListener('message', (event : WorkerMessageEvent) => {
//     const { data } = event;
//     switch (data.command) {
//       case CommandType.INIT:
//         service = new VicsStreamService(data.config);
//         service.onFrameData = (data) => {
//           self.postMessage({type : 'framedata', data})
//         }
//         service.onTime = (date)=> {
//           self.postMessage({type : 'time', date})
//         }

//         break;
//       case CommandType.START_LIVE:
//         service?.StartLive(data.cam_id, data.nStream);
//         break;
//       case CommandType.STOP_LIVE:
//         service?.StopLive();
//         break;
//       default:

//     }
// });
