import { LINKPROTO } from "./const";
import { VICSDataRequest, VICSDataResponse } from "./types";
import { LinkCmdType } from "./types/linkproto";
import {
  LinkRecordItem,
  LinkHasRecordItem,
  LinkRegNotifyReq,
  LinkListCamReq,
  LinkAddCamReq,
  LinkDelCamReq,
  LinkSearchRecordReq,
  LinkHasRecordList,
  LinkHasRecordReq,
  LinkGetStreamListReq,
  LinkPtzCmd,
  LinkCamSearchStartReq,
  LinkCamSearchStopReq,
  LinkDelDiskReq,
  LinkSysVidDiskListReq,
  LinkVidDiskListReq,
  LinkAddDiskReq,
  LinkUpdateDiskLimitReq,
  LinkGetVerReq,
} from "./types/linksystem";
import {
  CameraType,
  VidDisk,
  VidCamera,
  CameraConnectType,
} from "./types/vidconf";
import { VicsDefaultService, VicsConfig } from "./VicsDefaultService";
import { date_time_to_unix, unix_to_date_time } from "./util/time";

const MONTHS_DAY: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ALL_DAY: string =
  "\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002\u0002";

export enum VicCamChangeType {
  OFFLINE,
  ONLINE,
  ON_REC,
  OFF_REC,
}

export enum RecordType {
  R_OFF = 0,
  R_ALRAM = 1,
  R_SCHED = 2,
  R_MANUAL = 4,
  R_LAST,
}

export enum PTZAction {
  PTZ_UP = 1,
  PTZ_DOWN,
  PTZ_LEFT,
  PTZ_RIGHT,
  PTZ_ZOOM_IN,
  PTZ_ZOOM_OUT,
  PTZ_STOP,
  PTZ_LAST,
}
export interface CameraDto {
  id: string;
  name: string;
  ip: string;
  port: string;
  user_id: string;
  password: string;
  profile_token1: string;
  profile_token2: string;
  online: boolean;
  rec: boolean;
  ptz: boolean;
  channel: number;
  onvif_address: string;
  rtsp_address: string;
  type: CameraType;
}
export interface AddCameraRequestDto {
  strId : string;
  strIP: string;
  strPort: string;
  strName: string;
  strUser: string;
  strPasswd: string;
  strONVIFAddress?: string;
  strRTSPUrl?: string;
  nType: CameraType;
}

export interface DelCameraRequestDto {
  strId: string;
}
export interface SearchCameraDto {
  ip: string;
  port: string;
  model: string;
  onvif_address: string;
}

export interface StreamInfoDto {
  token: string;
  name: string;
}

export interface RecordDto {
  start_time: Date;
  end_time: Date;
  type: RecordType;
  has: boolean;
}

export interface DiskDto {
  id: string;
  path: string;
  total_size: number;
  stor_used: number;
  stor_limit: number;
  free_size: number;
  record_path: string;
}

export interface AddDiskRequestDto {
  disk : DiskDto
}

export interface DelDiskRequestDto {
  strId : string
}
export interface UpdateDiskRequestDto {
  strId : string,
  nLimit : number
}

const toDiskDto = (item: VidDisk): DiskDto => {
  const {
    strId,
    strPath,
    nTotalSize,
    nFreeSize,
    nStorLimit,
    nStorUsed,
    strRecordPath,
  } = item;
  return {
    id: strId,
    path: strPath,
    total_size: nTotalSize ? nTotalSize : 0,
    stor_used: nStorUsed ? nStorUsed : 0,
    stor_limit: nStorLimit ? nStorLimit : 0,
    free_size: nFreeSize ? nFreeSize : 0,
    record_path: strRecordPath,
  };
};

const toVidDisk = (dto: DiskDto): VidDisk => {
  const {
    id,
    path,
    total_size,
    stor_used,
    stor_limit,
    free_size,
    record_path,
  } = dto;
  return {
    strId: id,
    strPath: path,
    nTotalSize: total_size ?? 0,
    nStorUsed: stor_used ?? 0,
    nStorLimit: stor_limit ?? 0,
    nFreeSize: free_size ?? 0,
    strRecordPath: record_path,
  };
};

const toRecordDto = (item: LinkRecordItem): RecordDto => {
  return {
    start_time: unix_to_date_time(item.nStart),
    end_time: unix_to_date_time(item.nEnd),
    type: item.nType,
    has: true,
  };
};

const toMRecoredDto = (item: LinkHasRecordItem): RecordDto => {
  return {
    start_time: unix_to_date_time(item.nStart),
    end_time: unix_to_date_time(item.nEnd),
    type: item.nType,
    has: item.bHas ? item.bHas : false,
  };
};

const toCameraDto = (Ccam: VidCamera): CameraDto => {
  const {
    strId,
    strName,
    strIP,
    strPort,
    strUser,
    strPasswd,
    strProfileToken1,
    strProfileToken2,
    bOnline,
    bRec,
    bPtzContol,
    nCh,
    strONVIFAddress,
    strRTSPUrl,
    nType,
  } = Ccam;
  return {
    id: strId,
    name: strName,
    ip: strIP,
    port: strPort,
    user_id: strUser,
    password: strPasswd,
    profile_token1: strProfileToken1,
    profile_token2: strProfileToken2,
    online: bOnline ? bOnline : false,
    rec: bRec ? bRec : false,
    ptz: bPtzContol ? bPtzContol : false,
    channel: nCh,
    onvif_address: strONVIFAddress,
    rtsp_address: strRTSPUrl,
    type: nType,
  };
};

export type EventHandlers = {
  onCameraList: (e: CustomEvent<{ cameras: CameraDto[] }>) => void;
  onAddCam: (e: CustomEvent<{ camera: CameraDto }>) => void;
  onDelCam: (e: CustomEvent<{ cam_id: string }>) => void;
  onOnline: (e: CustomEvent<void>) => void;
  onOffline: (e: CustomEvent<void>) => void;
  onCameraChange: (
    e: CustomEvent<{ cam_id: string; type: VicCamChangeType }>,
  ) => void;
  onMonthlyRecordData: (
    e: CustomEvent<{ cam_id: string; records: RecordDto[] }>,
  ) => void;
  onDailyRecordData: (
    e: CustomEvent<{ cam_id: string; records: RecordDto[] }>,
  ) => void;
  onStreamInfo: (
    e: CustomEvent<{ cam_id: string; stream_info: StreamInfoDto[] }>,
  ) => void;
  onSearchedCam: (e: CustomEvent<{ searched_cam: SearchCameraDto }>) => void;
  onSystemDisk: (e: CustomEvent<{ disks: DiskDto[] }>) => void;
  onUserDisk: (e: CustomEvent<{ disks: DiskDto[] }>) => void;
  onVersion: (e: CustomEvent<{ ver: string; info: string }>) => void;
};

export type EventKey = keyof EventHandlers;
export type DetailType<T extends EventKey> = Parameters<
  EventHandlers[T]
>[0]["detail"];

interface RecordOperationQueue {
  cam_id: string;
  year: number | null;
  month: number | null;
  day: number | null;
}

export default class VicsDataService extends VicsDefaultService {
  private records_q: RecordOperationQueue[] = [];
  private cVidCamera: VidCamera[] = [];
  private searchedCams: SearchCameraDto[] = [];

  constructor(config: VicsConfig) {
    super(config, { path: LINKPROTO });
    super.addEventListener("onProcessLogin", this.onProcessLogin.bind(this));
    super.addEventListener("onMessage", this.onMessage.bind(this));
  }

  public addEventListener<K extends EventKey>(
    event: K,
    func: EventHandlers[K],
  ) {
    super.addEventListener(event, func);
  }

  public removeEventListener<K extends EventKey>(
    event: K,
    func: EventHandlers[K],
  ) {
    super.removeEventListener(event, func);
  }

  public dispatchEvent<T extends EventKey>(event: T, detail?: DetailType<T>) {
    const customEvent = new CustomEvent(event, { detail });
    return super.dispatchEvent(customEvent);
  }

  private regCallback() {
    const regNotifyReq: LinkRegNotifyReq = {
      strFake: "fake",
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_REG_NOTIFY_REQ,
      regNotifyReq,
    };

    this.sendMessage(request);
  }

  private onProcessLogin(): void {
    this.GetCameraList();
    this.regCallback();
    this.GetVersion();
  }

  protected onMessage(e: CustomEvent<VICSDataResponse>): void {
    const data = e.detail;
    switch (data.type) {
      case LinkCmdType.LINK_CMD_CAM_LIST_RESP: {
        let cameras: CameraDto[] = [];

        if (data.camListResp?.cList) {
          this.cVidCamera = data.camListResp?.cList?.cVidCamera || [];
          cameras = data.camListResp?.cList?.cVidCamera.map((cam) =>
            toCameraDto(cam),
          );
        }

        this.dispatchEvent("onCameraList", { cameras });

        cameras.forEach((c) => {
          this.GetStreamInfo(c.id);
        });
        break;
      }

      case LinkCmdType.LINK_CMD_CAM_OFFLINE_NOTIFY: {
        if (data.camIdNotify?.strId) {
          this.cVidCamera = this.cVidCamera.map((cam) =>
            cam.strId === data.camIdNotify?.strId
              ? { ...cam, bOnline: false }
              : cam,
          );
          this.dispatchEvent("onCameraChange", {
            cam_id: data.camIdNotify?.strId,
            type: VicCamChangeType.OFFLINE,
          });
        }
        break;
      }

      case LinkCmdType.LINK_CMD_CAM_ONLINE_NOTIFY: {
        if (data.camIdNotify?.strId) {
          this.cVidCamera = this.cVidCamera.map((cam) =>
            cam.strId === data.camIdNotify?.strId
              ? { ...cam, bOnline: true }
              : cam,
          );
          this.dispatchEvent("onCameraChange", {
            cam_id: data.camIdNotify?.strId,
            type: VicCamChangeType.ONLINE,
          });
        }
        break;
      }

      case LinkCmdType.LINK_CMD_CAM_REC_ON_NOTIFY: {
        if (data.camIdNotify?.strId) {
          this.cVidCamera = this.cVidCamera.map((cam) =>
            cam.strId === data.camIdNotify?.strId
              ? { ...cam, bRec: true }
              : cam,
          );
          this.dispatchEvent("onCameraChange", {
            cam_id: data.camIdNotify?.strId,
            type: VicCamChangeType.ON_REC,
          });
        }
        break;
      }

      case LinkCmdType.LINK_CMD_CAM_REC_OFF_NOTIFY: {
        if (data.camIdNotify?.strId) {
          this.cVidCamera = this.cVidCamera.map((cam) =>
            cam.strId === data.camIdNotify?.strId
              ? { ...cam, bRec: false }
              : cam,
          );
          this.dispatchEvent("onCameraChange", {
            cam_id: data.camIdNotify?.strId,
            type: VicCamChangeType.OFF_REC,
          });
        }
        break;
      }

      case LinkCmdType.LINK_CMD_CAM_ADD_NOTIFY: {
        if (data.camAddNotify?.cCam) {
          this.cVidCamera.push(data.camAddNotify?.cCam);
          this.dispatchEvent("onAddCam", {
            camera: toCameraDto(data.camAddNotify.cCam),
          });
        }
        break;
      }

      case LinkCmdType.LINK_CMD_CAM_DEL_NOTIFY: {
        if (data.camIdNotify?.strId) {
          this.cVidCamera = this.cVidCamera.filter(
            (cam) => cam.strId !== data.camIdNotify?.strId,
          );
          this.dispatchEvent("onDelCam", { cam_id: data.camIdNotify.strId });
        }
        break;
      }

      case LinkCmdType.LINK_CMD_CAM_SEARCHED_NOTIFY: {
        const { strIp, strPort, strModel, strONVIFAddress } =
          data.camSearchedNotify!;

        const searched_cam: SearchCameraDto = {
          ip: strIp,
          port: strPort,
          model: strModel,
          onvif_address: strONVIFAddress,
        };

        if (
          this.searchedCams.find(
            (s) => s.ip === searched_cam.ip && s.port === searched_cam.port,
          )
        )
          return;

        this.searchedCams.push(searched_cam);
        this.dispatchEvent("onSearchedCam", { searched_cam });
        break;
      }

      case LinkCmdType.LINK_CMD_GET_STREAM_LIST_RESP: {
        const cur = this.records_q.shift()!;
        if (!cur) return;

        const { cam_id } = cur;

        if (data.getStreamListResp?.cList?.cVidStream) {
          const stream_info: StreamInfoDto[] =
            data.getStreamListResp?.cList.cVidStream.map((info) => {
              return { token: info.strToken, name: info.strName };
            });
          this.dispatchEvent("onStreamInfo", { cam_id, stream_info });
        }
        break;
      }

      case LinkCmdType.LINK_CMD_SEARCH_RECORD_RESP: {
        const cur = this.records_q.shift()!;
        if (!cur) return;

        const { cam_id } = cur;

        let records: RecordDto[] = [];

        if (data.searchRecResp?.cList?.cList) {
          records = data.searchRecResp?.cList?.cList.map((item) => {
            return toRecordDto(item);
          });
        }

        this.dispatchEvent("onDailyRecordData", { cam_id, records });
        break;
      }

      case LinkCmdType.LINK_CMD_HAS_RECORD_RESP: {
        const cur = this.records_q.shift()!;
        if (!cur) return;

        const { cam_id } = cur;

        let records: RecordDto[] = [];

        if (data.hasRecResp?.cList?.cHasRec) {
          records = data.hasRecResp?.cList?.cHasRec.map((item) => {
            return toMRecoredDto(item);
          });
        }

        this.dispatchEvent("onMonthlyRecordData", { cam_id, records });
        break;
      }

      case LinkCmdType.LINK_CMD_SYS_DISK_LIST_RESP: {
        if (data.sysDiskListResp?.cDisk?.cVidDisk) {
          this.dispatchEvent("onSystemDisk", {
            disks: data.sysDiskListResp.cDisk.cVidDisk.map((v) => toDiskDto(v)),
          });
        }
        break;
      }
      case LinkCmdType.LINK_CMD_DISK_LIST_RESP: {
        if (data.diskListResp?.cDisk?.cVidDisk) {
          this.dispatchEvent("onUserDisk", {
            disks: data.diskListResp.cDisk.cVidDisk.map((v) => toDiskDto(v)),
          });
        }
        break;
      }
      case LinkCmdType.LINK_CMD_ADD_DISK_RESP:
      case LinkCmdType.LINK_CMD_DEL_DISK_RESP:
      case LinkCmdType.LINK_CMD_UPDATE_DISK_LIMIT_RESP: {
        this.GetDisks();
        break;
      }
      case LinkCmdType.LINK_CMD_GET_VER_RESP: {
        if (data.verResp) {
          this.dispatchEvent("onVersion", {
            ver: data.verResp.strVer,
            info: data.verResp.strInfo,
          });
        }
        break;
      }
      default: {
        console.debug("Default Message Process");
        break;
      }
    }
  }

  GetCameraList() {
    const camListReq: LinkListCamReq = {
      bAll: true,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_CAM_LIST_REQ,
      camListReq,
    };

    this.sendMessage(request);
  }

  AddCam(request: AddCameraRequestDto) {
    const cCam: Partial<VidCamera> = {
      ...request,
      strSched: ALL_DAY,
      nConnectType: CameraConnectType.VID_CONNECT_TCP,
    };

    const addCamReq: LinkAddCamReq = {
      cCam: cCam as VidCamera,
    };

    const msg: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_ADD_CAM_REQ,
      addCamReq,
    };

    this.sendMessage(msg);
  }

  DeleteCam(request: DelCameraRequestDto) {
    const delCamReq: LinkDelCamReq = {
      ...request,
    };

    const msg: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_DEL_CAM_REQ,
      delCamReq,
    };

    this.sendMessage(msg);
  }

  UpdateCam(id: string, request: AddCameraRequestDto) {
    const prev = this.cVidCamera.find((cam) => cam.strId === id);

    // 지워주고
    this.DeleteCam({ strId: id });

    // 새로 등록한다.
    const cCam: Partial<VidCamera> = {
      ...prev,
      ...request,
    };

    const addCamReq: LinkAddCamReq = {
      cCam: cCam as VidCamera,
    };

    const msg: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_ADD_CAM_REQ,
      addCamReq,
    };

    this.sendMessage(msg);
  }

  GetDayRecord(cam_id: string, year: number, month: number, day: number) {
    const startOfDay = new Date(new Date(year, month, day));
    const endOfDay = new Date(
      new Date(year, month, day).setDate(
        new Date(year, month, day).getDate() + 1,
      ),
    );

    this.records_q.push({ cam_id, year, month, day });

    const searchRecReq: LinkSearchRecordReq = {
      strId: cam_id,
      nStart: date_time_to_unix(startOfDay),
      nEnd: date_time_to_unix(endOfDay),
      nType: -1,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_SEARCH_RECORD_REQ,
      searchRecReq,
    };
    this.sendMessage(request);
  }

  GetMonthlyRecord(cam_id: string, year: number, month: number) {
    this.records_q.push({ cam_id, year, month, day: null });

    const cHasRec: LinkHasRecordItem[] = Array.from(
      { length: MONTHS_DAY[month] },
      (_, day) => {
        const nStart = date_time_to_unix(
          new Date(year, month, day + 1, 0, 0, 0, 0),
        );
        const nEnd = date_time_to_unix(
          new Date(year, month, day + 1, 23, 59, 59, 999),
        );
        return { nId: day + 1, nStart, nEnd, nType: -1, bHas: false };
      },
    );

    const cList: LinkHasRecordList = { cHasRec };

    const hasRecReq: LinkHasRecordReq = {
      strId: cam_id,
      cList,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_HAS_RECORD_REQ,
      hasRecReq,
    };
    this.sendMessage(request);
  }

  GetStreamInfo(cam_id: string) {
    this.records_q.push({ cam_id, year: null, month: null, day: null });

    const getStreamListReq: LinkGetStreamListReq = {
      strId: cam_id,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_GET_STREAM_LIST_REQ,
      getStreamListReq,
    };

    this.sendMessage(request);
  }

  PtzAction(cam_id: string, action: PTZAction, speed: number) {
    const ptzCmd: LinkPtzCmd = {
      strId: cam_id,
      nAction: action,
      nParam: speed,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_PTZ_CMD,
      ptzCmd,
    };

    this.sendMessage(request);
  }

  CameraSearchStart() {
    const camSearchStartReq: LinkCamSearchStartReq = {
      strFake: "fake",
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_CAM_SEARCH_START_REQ,
      camSearchStartReq,
    };

    this.sendMessage(request);
  }

  CameraSearchStop() {
    const camSearchStopReq: LinkCamSearchStopReq = {
      strFake: "fake",
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_CAM_SEARCH_STOP_REQ,
      camSearchStopReq,
    };

    this.sendMessage(request);
  }

  FormatDBDisk() {
    const delDiskReq: LinkDelDiskReq = {
      strId: "ALL",
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_DEL_DISK_REQ,
      delDiskReq,
    };

    this.sendMessage(request);
  }

  GetSystemDisks() {
    const sysDiskListReq: LinkSysVidDiskListReq = {
      bAll: true,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_SYS_DISK_LIST_REQ,
      sysDiskListReq,
    };

    this.sendMessage(request);
  }

  GetDisks() {
    const diskListReq: LinkVidDiskListReq = {
      bAll: true,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_DISK_LIST_REQ,
      diskListReq,
    };

    this.sendMessage(request);
  }

  AddDisk(data: AddDiskRequestDto) {
    
    const addDiskReq: LinkAddDiskReq = {
      cDisk : toVidDisk(data.disk),
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_ADD_DISK_REQ,
      addDiskReq,
    };

    this.sendMessage(request);
  }

  DeleteDisk(data: DelDiskRequestDto) {
    const delDiskReq: LinkDelDiskReq = {
      strId : data.strId
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_DEL_DISK_REQ,
      delDiskReq,
    };

    this.sendMessage(request);
  }

  UpdateDisk(data : UpdateDiskRequestDto) {
    const diskLimitReq: LinkUpdateDiskLimitReq = {
      strId :data.strId,
      nLimit : data.nLimit
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_UPDATE_DISK_LIMIT_REQ,
      diskLimitReq,
    };

    this.sendMessage(request);
  }

  public GetVersion() {
    const verReq: LinkGetVerReq = {
      strFake: "fake",
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_GET_VER_REQ,
      verReq,
    };

    this.sendMessage(request);
  }
}
