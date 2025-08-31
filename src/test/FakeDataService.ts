import EventEmiiter from "../util/EventEmitter.js";
import {
  LinkAddDiskReq,
  LinkDelDiskReq,
  LinkUpdateDiskLimitReq,
} from "../types/linksystem.js";
import {
  AddCameraRequestDto,
  CameraDto,
  DelCameraRequestDto,
  DetailType,
  DiskDto,
  EventHandlers,
  EventKey,
  PTZAction,
  RecordDto,
  RecordType,
  SearchCameraDto,
  StreamInfoDto,
  VicCamChangeType,
} from "../VicsDataService.js";
import { CameraType } from "../types/vidconf.js";
import uuid from "react-uuid";

const mockCameras: CameraDto[] = [
  {
    id: "camera1",
    name: "camera1",
    ip: "10.0.0.3",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: false,
    rec: false,
    ptz: false,
    channel: 2,
    onvif_address: "onvif1",
    rtsp_address: "rtsp1",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera2",
    name: "camera2",
    ip: "10.0.0.4",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: false,
    ptz: false,
    channel: 2,
    onvif_address: "onvif2",
    rtsp_address: "rtsp2",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera3",
    name: "camera3",
    ip: "10.0.0.5",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: true,
    ptz: true,
    channel: 2,
    onvif_address: "onvif3",
    rtsp_address: "rtsp3",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera4",
    name: "camera4",
    ip: "10.0.0.6",
    port: "9091",
    user_id: "user1",
    password: "password1",
    profile_token1: "token1",
    profile_token2: "token2",
    online: true,
    rec: false,
    ptz: true,
    channel: 4,
    onvif_address: "onvif4",
    rtsp_address: "rtsp4",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera5",
    name: "camera5",
    ip: "10.0.0.7",
    port: "9092",
    user_id: "user2",
    password: "password2",
    profile_token1: "token5",
    profile_token2: "token6",
    online: false,
    rec: true,
    ptz: true,
    channel: 3,
    onvif_address: "onvif5",
    rtsp_address: "rtsp5",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera6",
    name: "camera6",
    ip: "10.0.0.8",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: false,
    ptz: false,
    channel: 2,
    onvif_address: "onvif6",
    rtsp_address: "rtsp6",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera7",
    name: "camera7",
    ip: "10.0.0.9",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: true,
    ptz: false,
    channel: 1,
    onvif_address: "onvif7",
    rtsp_address: "rtsp7",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera8",
    name: "camera8",
    ip: "10.0.1.0",
    port: "9091",
    user_id: "admin",
    password: "password1",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: true,
    ptz: true,
    channel: 5,
    onvif_address: "onvif8",
    rtsp_address: "rtsp8",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera9",
    name: "camera9",
    ip: "10.0.1.1",
    port: "9092",
    user_id: "user1",
    password: "password2",
    profile_token1: "token9",
    profile_token2: "token10",
    online: false,
    rec: false,
    ptz: false,
    channel: 2,
    onvif_address: "onvif9",
    rtsp_address: "rtsp9",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera10",
    name: "camera10",
    ip: "10.0.1.2",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: false,
    ptz: false,
    channel: 6,
    onvif_address: "onvif10",
    rtsp_address: "rtsp10",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera11",
    name: "camera11",
    ip: "10.0.1.3",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: false,
    rec: true,
    ptz: true,
    channel: 7,
    onvif_address: "onvif11",
    rtsp_address: "rtsp11",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera12",
    name: "camera12",
    ip: "10.0.1.4",
    port: "9091",
    user_id: "user2",
    password: "password1",
    profile_token1: "token12",
    profile_token2: "token13",
    online: true,
    rec: false,
    ptz: false,
    channel: 3,
    onvif_address: "onvif12",
    rtsp_address: "rtsp12",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera13",
    name: "camera13",
    ip: "10.0.1.5",
    port: "9092",
    user_id: "user3",
    password: "password3",
    profile_token1: "token14",
    profile_token2: "token15",
    online: false,
    rec: false,
    ptz: false,
    channel: 4,
    onvif_address: "onvif13",
    rtsp_address: "rtsp13",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera14",
    name: "camera14",
    ip: "10.0.1.6",
    port: "9093",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: true,
    ptz: false,
    channel: 5,
    onvif_address: "onvif14",
    rtsp_address: "rtsp14",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera15",
    name: "camera15",
    ip: "10.0.1.7",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: false,
    rec: true,
    ptz: true,
    channel: 8,
    onvif_address: "onvif15",
    rtsp_address: "rtsp15",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera16",
    name: "camera16",
    ip: "10.0.1.8",
    port: "9091",
    user_id: "admin",
    password: "password1",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: false,
    ptz: false,
    channel: 2,
    onvif_address: "onvif16",
    rtsp_address: "rtsp16",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera17",
    name: "camera17",
    ip: "10.0.1.9",
    port: "9092",
    user_id: "user2",
    password: "password2",
    profile_token1: "token17",
    profile_token2: "token18",
    online: true,
    rec: true,
    ptz: true,
    channel: 1,
    onvif_address: "onvif17",
    rtsp_address: "rtsp17",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera18",
    name: "camera18",
    ip: "10.0.2.0",
    port: "9090",
    user_id: "admin",
    password: "admin",
    profile_token1: "t",
    profile_token2: "t2",
    online: true,
    rec: true,
    ptz: false,
    channel: 7,
    onvif_address: "onvif18",
    rtsp_address: "rtsp18",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera19",
    name: "camera19",
    ip: "10.0.2.1",
    port: "9091",
    user_id: "admin",
    password: "password3",
    profile_token1: "t",
    profile_token2: "t2",
    online: false,
    rec: false,
    ptz: true,
    channel: 2,
    onvif_address: "onvif19",
    rtsp_address: "rtsp19",
    type: CameraType.VID_ONVIF_S,
  },
  {
    id: "camera20",
    name: "camera20",
    ip: "10.0.2.2",
    port: "9092",
    user_id: "user4",
    password: "password4",
    profile_token1: "token20",
    profile_token2: "token21",
    online: true,
    rec: false,
    ptz: true,
    channel: 6,
    onvif_address: "onvif20",
    rtsp_address: "rtsp20",
    type: CameraType.VID_ONVIF_S,
  },
];

const mockupSearchedCam: SearchCameraDto = {
  ip: "10.0.0.1",
  port: "8090",
  model: "model1",
  onvif_address: "ONVIF",
};
const mockupSearchedCam2: SearchCameraDto = {
  ip: "10.0.0.2",
  port: "8090",
  model: "model1",
  onvif_address: "ONVIF",
};

const mockupDayRecord: RecordDto[] = [
  {
    start_time: new Date(new Date().setHours(0, 0, 0, 0) - 5000),
    end_time: new Date(new Date().setHours(3)),
    has: true,
    type: RecordType.R_SCHED,
  },
  {
    start_time: new Date(new Date().setHours(5)),
    end_time: new Date(new Date().setHours(8)),
    has: true,
    type: RecordType.R_SCHED,
  },
  {
    start_time: new Date(new Date().setHours(8)),
    end_time: new Date(new Date().setHours(12)),
    has: true,
    type: RecordType.R_SCHED,
  },
  {
    start_time: new Date(new Date().setHours(16)),
    end_time: new Date(new Date().setHours(23)),
    has: true,
    type: RecordType.R_SCHED,
  },
  {
    start_time: new Date(new Date().setHours(23)),
    end_time: new Date(new Date().setHours(24) + 5000),
    has: true,
    type: RecordType.R_SCHED,
  },
];

const mockupmothlyRecord: RecordDto[] = [
  {
    start_time: new Date(new Date().setDate(1)),
    end_time: new Date(new Date().setDate(1)),
    has: true,
    type: RecordType.R_SCHED,
  },
  {
    start_time: new Date(new Date().setDate(3)),
    end_time: new Date(new Date().setDate(3)),
    has: true,
    type: RecordType.R_SCHED,
  },
  {
    start_time: new Date(new Date().setHours(6)),
    end_time: new Date(new Date().setDate(6)),
    has: true,
    type: RecordType.R_SCHED,
  },
  {
    start_time: new Date(new Date().setHours(7)),
    end_time: new Date(new Date().setDate(7)),
    has: true,
    type: RecordType.R_SCHED,
  },
  {
    start_time: new Date(new Date().setHours(9)),
    end_time: new Date(new Date().setDate(9)),
    has: true,
    type: RecordType.R_SCHED,
  },
];

const mockupStreamInfo: StreamInfoDto[] = [
  { token: "mainStream", name: "1920x1080 60fps" },
  { token: "subStream", name: "680x480 30fps" },
];

const mockupDiskInfo: DiskDto[] = [
  {
    id: "C",
    path: "C:\\",
    total_size: 500 * 1024,
    stor_used: 300 * 1024,
    stor_limit: 400 * 1024,
    free_size: (500 - 300) * 1024,
    record_path: "videodb",
  },
  {
    id: "D",
    path: "D:\\",
    total_size: 1000 * 1024,
    stor_used: 400 * 1024, // 400GB 사용
    stor_limit: 800 * 1024, // 800GB 제한
    free_size: (1000 - 400) * 1024, // 자유 공간 계산
    record_path: "videodb",
  },
];

interface IVicsDataService {
  addEventListener<K extends EventKey>(event: K, func: EventHandlers[K]): void;
  GetCameraList(): void;
  AddCam(request: AddCameraRequestDto): void;
  DeleteCam(request: DelCameraRequestDto): void;
  UpdateCam(id: string, request: AddCameraRequestDto): void;
  GetDayRecord(cam_id: string, year: number, month: number, day: number): void;
  GetMonthlyRecord(cam_id: string, year: number, month: number): void;
  GetStreamInfo(cam_id: string): void;
  PtzAction(cam_id: string, action: PTZAction, speed: number): void;
  CameraSearchStart(): void;
  CameraSearchStop(): void;
  FormatDBDisk(): void;
  GetSystemDisks(): void;
  GetDisks(): void;
  AddDisk(data: LinkAddDiskReq): void;
  DeleteDisk(data: LinkDelDiskReq): void;
  UpdateDisk(data: LinkUpdateDiskLimitReq): void;
  GetVersion(): void;
  Disconnect(): void;
  isConnected(): boolean;
}

export class FakeVicsDataService
  extends EventEmiiter
  implements IVicsDataService
{
  private cameras: CameraDto[];
  constructor() {
    super();
    this.cameras = mockCameras;

    setTimeout(() => {
      this.dispatchEvent("onOnline");
    }, 100);

    setTimeout(() => {
      this.GetCameraList();

      this.cameras.forEach((cam) => {
        this.GetStreamInfo(cam.id);
        this.GetDayRecord(cam.id, 12, 12, 12);
      });
    }, 1000);

    setTimeout(() => {
      this.cameras
        .filter((c) => !c.online)
        .forEach((c) => {
          this.dispatchEvent("onCameraChange", {
            cam_id: c.id,
            type: VicCamChangeType.ONLINE,
          });
        });
    }, 5000);

    setTimeout(() => {
      this.cameras
        .filter((c) => !c.rec)
        .forEach((c) => {
          this.dispatchEvent("onCameraChange", {
            cam_id: c.id,
            type: VicCamChangeType.ON_REC,
          });
        });
    }, 10000);
  }

  public addEventListener<K extends EventKey>(
    event: K,
    func: EventHandlers[K],
  ) {
    super.addEventListener(event, func);
  }

  public dispatchEvent<T extends EventKey>(event: T, detail?: DetailType<T>) {
    const customEvent = new CustomEvent(event, { detail });
    return super.dispatchEvent(customEvent);
  }

  public Disconnect() {
    this.dispatchEvent("onOffline");
  }

  public isConnected() {
    return true;
  }

  GetCameraList(): void {
    this.dispatchEvent("onCameraList", { cameras: mockCameras });
  }
  AddCam(request: AddCameraRequestDto): void {
    const newCam = {
      rec: false,
      online: false,
      id: uuid(),
      name: request.strName,
      ip: request.strIP,
      port: request.strPort,
      user_id: request.strUser,
      password: request.strPasswd,
      profile_token1: "dummy token",
      profile_token2: "dummy token2",
      ptz: false,
      type: -1,
      onvif_address: "onvif",
      rtsp_address: "",
      channel: -1,
    };
    this.cameras.push(newCam);
    this.dispatchEvent("onAddCam", { camera: newCam });
  }
  DeleteCam(request: DelCameraRequestDto): void {
    this.cameras = this.cameras.filter((c) => c.id !== request.strId);
    this.dispatchEvent("onDelCam", { cam_id: request.strId });
  }
  UpdateCam(id: string, request: AddCameraRequestDto): void {
    const update = {
      rec: false,
      online: false,
      id,
      name: request.strName,
      ip: request.strIP,
      port: request.strPort,
      user_id: request.strUser,
      password: request.strPasswd,
      profile_token1: "dummy token",
      profile_token2: "dummy token2",
      ptz: false,
      type: -1,
      onvif_address: "onvif",
      rtsp_address: "",
      channel: -1,
    };

    this.DeleteCam({ strId: id });
    setTimeout(() => {
      this.dispatchEvent("onAddCam", { camera: update });
    }, 500);
  }
  GetDayRecord(cam_id: string, year: number, month: number, day: number): void {
    this.dispatchEvent("onDailyRecordData", {
      cam_id,
      records: mockupDayRecord,
    });
  }
  GetMonthlyRecord(cam_id: string, year: number, month: number): void {
    this.dispatchEvent("onMonthlyRecordData", {
      cam_id,
      records: mockupDayRecord,
    });
  }
  GetStreamInfo(cam_id: string): void {
    this.dispatchEvent("onStreamInfo", {
      cam_id,
      stream_info: mockupStreamInfo,
    });
  }
  PtzAction(cam_id: string, action: PTZAction, speed: number): void {}
  CameraSearchStart(): void {
    setTimeout(() => {
      this.dispatchEvent("onSearchedCam", { searched_cam: mockupSearchedCam });
      this.dispatchEvent("onSearchedCam", { searched_cam: mockupSearchedCam2 });
    }, 500);
  }
  CameraSearchStop(): void {}
  FormatDBDisk(): void {}
  GetSystemDisks(): void {
    this.dispatchEvent("onSystemDisk", { disks: mockupDiskInfo });
  }
  GetDisks(): void {
    this.dispatchEvent("onUserDisk", { disks: mockupDiskInfo });
  }
  AddDisk(data: LinkAddDiskReq): void {}
  DeleteDisk(data: LinkDelDiskReq): void {}
  UpdateDisk(data: LinkUpdateDiskLimitReq): void {}
  GetVersion(): void {
    this.dispatchEvent("onVersion", { ver: "fake ver", info: "fake info" });
  }
}
