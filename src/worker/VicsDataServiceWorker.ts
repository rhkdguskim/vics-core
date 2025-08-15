import VicsDataService from "../VicsDataService";
import { VicsConfig } from "../VicsDefaultService";

let service: VicsDataService | null = null;

export enum CommandType {
  INIT,
  CAMERALIST,
}

interface InitCommand {
  command: CommandType.INIT;
  config: VicsConfig;
}

interface CameraListCommand {
  command: CommandType.CAMERALIST;
}

type Command = InitCommand | CameraListCommand;

type WorkerMessageEvent = MessageEvent<Command>;

self.addEventListener("message", (event: WorkerMessageEvent) => {
  const { data } = event;
  switch (data.command) {
    case CommandType.INIT:
      service = new VicsDataService(data.config);

      // service.onCameraList = (data) => {
      //     self.postMessage({type : CommandType.CAMERALIST, data})
      // }

      break;
    case CommandType.CAMERALIST:
      service?.GetCameraList();
      break;
    default:
  }
});
