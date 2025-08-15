import { MILINKUSERSTREAM } from "./const";
import { VICSDataRequest } from "./types";
import { VicsConfig } from "./VicsDefaultService";
import { LinkCmdType } from "./types/linkproto";
import {
  LinkMiStartLiveCmd,
  LinkMiStopLiveCmd,
  LinkMiPlayBackCmd,
  LinkMiPlayStopCmd,
  LinkMiPlaySeekCmd,
  LinkMiPlaySpeedCmd,
  LinkMiPlayNextFrameCmd,
  LinkMiPlayPreFrameCmd,
} from "./types/linksystem";
import { VicsDefaultService } from "./VicsDefaultService";
import { date_time_to_unix } from "./util/time";
import { parse_frame } from "./parsers/frame";

export enum StreamType {
  MAIN_STREAM = 1,
  SUB_STREAM = 2,
}

type FrameData = (data: CustomEvent<Uint8Array>) => void;
type Time = (time: CustomEvent<Date>) => void;

export interface VicsVideoStreamService {
  regTimeCallback: (uuid: string, func: Time) => void;
  regFrameCallback: (uuid: string, func: FrameData) => void;
  unRegTimeCallback: (uuid: string) => void;
  unRegFrameCallback: (uuid: string) => void;
}

interface PlayStatus {
  vod: boolean;
  fSpeed: number;
  nStream: StreamType;
  pause: boolean;
  last_time: Date | undefined;
  iFrame: Uint8Array | undefined;
  cam_id: string | undefined;
}

const EmptyPlayStatus: PlayStatus = {
  vod: false,
  fSpeed: 1,
  nStream: StreamType.SUB_STREAM,
  pause: true,
  cam_id: undefined,
  last_time: undefined,
  iFrame: undefined,
};
export class VicsStreamService
  extends VicsDefaultService
  implements VicsVideoStreamService
{
  private playController: Map<string, PlayStatus>;
  private isLogined : boolean;

  constructor(config: VicsConfig) {
    super(config, { path: MILINKUSERSTREAM });
    this.addEventListener("onVideoData", this.onVideoData.bind(this));
    this.addEventListener("onProcessLogin", this.onProcessLogin.bind(this));
    this.addEventListener("onOffline", this.onOffline.bind(this));
    this.playController = new Map();
    this.isLogined = false;
  }

  private onProcessLogin(): void {
    this.isLogined = true;
    this.playController.forEach((value, key) => {
      this.dispatchEvent(new CustomEvent<{uuid : string, login : boolean}>("onLogin", {detail : {uuid : key, login : true}}))
    })
  }

  private onOffline(): void {
    this.isLogined = false;
    this.playController.forEach((value, key) => {
      this.dispatchEvent(new CustomEvent<{uuid : string, login : boolean}>("onLogin", {detail : {uuid : key, login : false}}))
    })
  }

  public regTimeCallback(uuid: string, func: Time) {
    this.addEventListener(`time/${uuid}`, func);
  }

  public regFrameCallback(uuid: string, func: FrameData) {
    this.addEventListener(`frame/${uuid}`, func);
  }

  public unRegTimeCallback(uuid: string) {
    this.removeEventListener(`time/${uuid}`);
  }

  public unRegFrameCallback(uuid: string) {
    this.removeEventListener(`frame/${uuid}`);
  }

  private onVideoData(e: CustomEvent<Uint8Array>) {
    const data = e.detail;
    
    if (data.length === 0) return;

    try {
      const frame = parse_frame(data);
      const controller = this.playController.get(frame.uuid);
      
      if (!controller) {
        console.warn("Controller is not Registed : ", frame.uuid)
        return;
      }

      if (
        controller.last_time &&
        frame.secs.getSeconds() != controller.last_time.getSeconds()
      ) {
        this.dispatchEvent(
          new CustomEvent(`time/${frame.uuid}`, { detail: frame.secs }),
        );
      }

      this.dispatchEvent(
        new CustomEvent(`frame/${frame.uuid}`, { detail: frame.dataBuf }),
      );
      controller.last_time = frame.secs;
    } catch (e) {
      console.error(e);
    }
  }

  InitController(uuid : string, cam_id: string) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, { ...EmptyPlayStatus, cam_id, nStream : StreamType.SUB_STREAM });
    }

    this.dispatchEvent(new CustomEvent<{uuid : string, login : boolean}>("onLogin", {detail : {uuid, login : this.isLogined}}))
  }

  DestoryController(uuid : string) {
    const controller = this.playController.get(uuid);
    if(controller) {
      if(controller.vod) {
        this.StopVOD(uuid);
      } else {
        this.StopLive(uuid);
      }
    }

    this.unRegFrameCallback(uuid);
    this.unRegTimeCallback(uuid);
    this.playController.delete(uuid);
  }

  StartLive(uuid: string, cam_id: string, nStream: StreamType) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, { ...EmptyPlayStatus, cam_id, nStream });
    }

    const controller = this.playController.get(uuid)!;

    if (!controller.pause) {
      this.StopLive(uuid);
      this.StopVOD(uuid);
    }

    const MistartLiveCmd: LinkMiStartLiveCmd = {
      strId: cam_id,
      struuid: uuid,
      nStream,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_MI_CMD_START_LIVE_CMD,
      MistartLiveCmd,
    };

    this.sendMessage(request);

    controller.cam_id = cam_id;
    controller.pause = false;
    controller.vod = false;
    controller.nStream = nStream;
  }

  StopLive(uuid: string) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, EmptyPlayStatus);
    }

    const controller = this.playController.get(uuid)!;

    const MistopLiveCmd: LinkMiStopLiveCmd = {
      struuid: uuid,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_MI_CMD_STOP_LIVE_CMD,
      MistopLiveCmd,
    };

    this.sendMessage(request);

    controller.pause = true;
  }

  StartVOD(uuid: string, cam_id: string, Playtime: Date) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, { ...EmptyPlayStatus, cam_id });
    }

    const controller = this.playController.get(uuid)!;

    if (!controller.pause) {
      this.StopLive(uuid);
      this.StopVOD(uuid);
    }

    const MiplayBackCmd: LinkMiPlayBackCmd = {
      strId: cam_id,
      struuid: uuid,
      nPlaytime: date_time_to_unix(Playtime),
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_MI_CMD_PLAY_BACK_CMD,
      MiplayBackCmd,
    };

    this.sendMessage(request);

    controller.cam_id = cam_id;
    controller.vod = true;
    controller.last_time = Playtime;
    controller.pause = false;
  }

  StopVOD(uuid: string) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, EmptyPlayStatus);
    }

    const controller = this.playController.get(uuid)!;

    const MiplayStopCmd: LinkMiPlayStopCmd = {
      struuid: uuid,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_MI_CMD_PLAY_STOP_CMD,
      MiplayStopCmd,
    };
    this.sendMessage(request);

    controller.pause = true;
  }

  Seek(uuid: string, Playtime: Date) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, EmptyPlayStatus);
    }

    const controller = this.playController.get(uuid)!;

    if (controller.vod) {
      const MiplaySeekCmd: LinkMiPlaySeekCmd = {
        struuid: uuid,
        nPlaytime: date_time_to_unix(Playtime),
      };

      const request: VICSDataRequest = {
        type: LinkCmdType.LINK_MI_CMD_PLAY_SEEK_CMD,
        MiplaySeekCmd,
      };

      this.sendMessage(request);

      controller.last_time = Playtime;
    }
  }

  Pause(uuid: string) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, EmptyPlayStatus);
    }

    const controller = this.playController.get(uuid)!;

    if (controller.vod) {
      const MiplayStopCmd: LinkMiPlayStopCmd = {
        struuid: uuid,
      };

      const request: VICSDataRequest = {
        type: LinkCmdType.LINK_MI_CMD_PLAY_STOP_CMD,
        MiplayStopCmd,
      };

      this.sendMessage(request);
    } else {
      this.StopLive(uuid);
    }

    controller.pause = true;
  }

  Resume(uuid: string) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, EmptyPlayStatus);
    }

    const controller = this.playController.get(uuid)!;

    if (controller.last_time && controller.cam_id && controller.vod) {
      this.StartVOD(uuid, controller.cam_id, controller.last_time);
    } else {
      if (controller.cam_id) {
        this.StartLive(uuid, controller.cam_id, controller.nStream);
      }
    }
  }

  Speed(uuid: string, fSpeed: number) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, EmptyPlayStatus);
    }

    const controller = this.playController.get(uuid)!;

    if (controller.vod) {
      const MiplaySpeedCmd: LinkMiPlaySpeedCmd = {
        struuid: uuid,
        fSpeed,
      };

      const request: VICSDataRequest = {
        type: LinkCmdType.LINK_MI_CMD_PLAY_SPEED_CMD,
        MiplaySpeedCmd,
      };

      this.sendMessage(request);
      controller.fSpeed = fSpeed;
    }
  }

  NextFrame(uuid: string) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, EmptyPlayStatus);
    }

    const controller = this.playController.get(uuid)!;

    if (controller.vod) {
      const MiplayNextFrameCmd: LinkMiPlayNextFrameCmd = {
        struuid: uuid,
      };

      const request: VICSDataRequest = {
        type: LinkCmdType.LINK_MI_CMD_PLAY_NEXT_FRAME_CMD,
        MiplayNextFrameCmd,
      };

      this.sendMessage(request);
    }
  }

  PrevFrame(uuid: string) {
    if (!this.playController.get(uuid)) {
      this.playController.set(uuid, EmptyPlayStatus);
    }

    const controller = this.playController.get(uuid)!;

    if (controller.vod) {
      const MiplayPreFrameCmd: LinkMiPlayPreFrameCmd = {
        struuid: uuid,
      };

      const request: VICSDataRequest = {
        type: LinkCmdType.LINK_MI_CMD_PLAY_PRE_FRAME_CMD,
        MiplayPreFrameCmd,
      };

      this.sendMessage(request);
    }
  }
}

export default VicsStreamService;
