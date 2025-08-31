/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long from "long";

export const protobufPackage = "";

/** Camera config */
export enum CameraType {
  VID_0 = 0,
  VID_USB = 1,
  VID_FILE = 2,
  VID_RTSP = 3,
  VID_ONVIF_S = 4,
  VID_GB28181 = 5,
  /** VID_MJPEG - Http JPEG */
  VID_MJPEG = 6,
  UNRECOGNIZED = -1,
}

export function cameraTypeFromJSON(object: any): CameraType {
  switch (object) {
    case 0:
    case "VID_0":
      return CameraType.VID_0;
    case 1:
    case "VID_USB":
      return CameraType.VID_USB;
    case 2:
    case "VID_FILE":
      return CameraType.VID_FILE;
    case 3:
    case "VID_RTSP":
      return CameraType.VID_RTSP;
    case 4:
    case "VID_ONVIF_S":
      return CameraType.VID_ONVIF_S;
    case 5:
    case "VID_GB28181":
      return CameraType.VID_GB28181;
    case 6:
    case "VID_MJPEG":
      return CameraType.VID_MJPEG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CameraType.UNRECOGNIZED;
  }
}

export function cameraTypeToJSON(object: CameraType): string {
  switch (object) {
    case CameraType.VID_0:
      return "VID_0";
    case CameraType.VID_USB:
      return "VID_USB";
    case CameraType.VID_FILE:
      return "VID_FILE";
    case CameraType.VID_RTSP:
      return "VID_RTSP";
    case CameraType.VID_ONVIF_S:
      return "VID_ONVIF_S";
    case CameraType.VID_GB28181:
      return "VID_GB28181";
    case CameraType.VID_MJPEG:
      return "VID_MJPEG";
    case CameraType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Record Type */
export enum VidRecType {
  VID_R_OFF = 0,
  VID_R_ALARM = 1,
  VID_R_SCHED = 2,
  UNRECOGNIZED = -1,
}

export function vidRecTypeFromJSON(object: any): VidRecType {
  switch (object) {
    case 0:
    case "VID_R_OFF":
      return VidRecType.VID_R_OFF;
    case 1:
    case "VID_R_ALARM":
      return VidRecType.VID_R_ALARM;
    case 2:
    case "VID_R_SCHED":
      return VidRecType.VID_R_SCHED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VidRecType.UNRECOGNIZED;
  }
}

export function vidRecTypeToJSON(object: VidRecType): string {
  switch (object) {
    case VidRecType.VID_R_OFF:
      return "VID_R_OFF";
    case VidRecType.VID_R_ALARM:
      return "VID_R_ALARM";
    case VidRecType.VID_R_SCHED:
      return "VID_R_SCHED";
    case VidRecType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Camera config */
export enum CameraConnectType {
  VID_CONNECT_0 = 0,
  VID_CONNECT_TCP = 1,
  VID_CONNECT_UDP = 2,
  UNRECOGNIZED = -1,
}

export function cameraConnectTypeFromJSON(object: any): CameraConnectType {
  switch (object) {
    case 0:
    case "VID_CONNECT_0":
      return CameraConnectType.VID_CONNECT_0;
    case 1:
    case "VID_CONNECT_TCP":
      return CameraConnectType.VID_CONNECT_TCP;
    case 2:
    case "VID_CONNECT_UDP":
      return CameraConnectType.VID_CONNECT_UDP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CameraConnectType.UNRECOGNIZED;
  }
}

export function cameraConnectTypeToJSON(object: CameraConnectType): string {
  switch (object) {
    case CameraConnectType.VID_CONNECT_0:
      return "VID_CONNECT_0";
    case CameraConnectType.VID_CONNECT_TCP:
      return "VID_CONNECT_TCP";
    case CameraConnectType.VID_CONNECT_UDP:
      return "VID_CONNECT_UDP";
    case CameraConnectType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum OnvifEventLevel {
  VID_ONVIF_EVENT_OFF = 0,
  VID_ONVIF_EVENT_FULL = 1,
  VID_ONVIF_EVENT_MOTION = 2,
  UNRECOGNIZED = -1,
}

export function onvifEventLevelFromJSON(object: any): OnvifEventLevel {
  switch (object) {
    case 0:
    case "VID_ONVIF_EVENT_OFF":
      return OnvifEventLevel.VID_ONVIF_EVENT_OFF;
    case 1:
    case "VID_ONVIF_EVENT_FULL":
      return OnvifEventLevel.VID_ONVIF_EVENT_FULL;
    case 2:
    case "VID_ONVIF_EVENT_MOTION":
      return OnvifEventLevel.VID_ONVIF_EVENT_MOTION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OnvifEventLevel.UNRECOGNIZED;
  }
}

export function onvifEventLevelToJSON(object: OnvifEventLevel): string {
  switch (object) {
    case OnvifEventLevel.VID_ONVIF_EVENT_OFF:
      return "VID_ONVIF_EVENT_OFF";
    case OnvifEventLevel.VID_ONVIF_EVENT_FULL:
      return "VID_ONVIF_EVENT_FULL";
    case OnvifEventLevel.VID_ONVIF_EVENT_MOTION:
      return "VID_ONVIF_EVENT_MOTION";
    case OnvifEventLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Language */
export enum VidLanguage {
  VID_LANG_AUTO = 0,
  VID_EN = 1,
  VID_ZH_CN = 2,
  UNRECOGNIZED = -1,
}

export function vidLanguageFromJSON(object: any): VidLanguage {
  switch (object) {
    case 0:
    case "VID_LANG_AUTO":
      return VidLanguage.VID_LANG_AUTO;
    case 1:
    case "VID_EN":
      return VidLanguage.VID_EN;
    case 2:
    case "VID_ZH_CN":
      return VidLanguage.VID_ZH_CN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VidLanguage.UNRECOGNIZED;
  }
}

export function vidLanguageToJSON(object: VidLanguage): string {
  switch (object) {
    case VidLanguage.VID_LANG_AUTO:
      return "VID_LANG_AUTO";
    case VidLanguage.VID_EN:
      return "VID_EN";
    case VidLanguage.VID_ZH_CN:
      return "VID_ZH_CN";
    case VidLanguage.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum VidLayout {
  VID_LAYOUT_MODE_0 = 0,
  VID_LAYOUT_MODE_1 = 1,
  VID_LAYOUT_MODE_2X2 = 2,
  VID_LAYOUT_MODE_3X3 = 3,
  VID_LAYOUT_MODE_4X4 = 4,
  VID_LAYOUT_MODE_6 = 5,
  VID_LAYOUT_MODE_8 = 6,
  VID_LAYOUT_MODE_12p1 = 7,
  VID_LAYOUT_MODE_5x5 = 8,
  VID_LAYOUT_MODE_6x6 = 9,
  VID_LAYOUT_MODE_8x8 = 10,
  VID_LAYOUT_MODE_ONE = 11,
  VID_LAYOUT_MODE_1x3 = 12,
  VID_LAYOUT_MODE_1p6 = 13,
  UNRECOGNIZED = -1,
}

export function vidLayoutFromJSON(object: any): VidLayout {
  switch (object) {
    case 0:
    case "VID_LAYOUT_MODE_0":
      return VidLayout.VID_LAYOUT_MODE_0;
    case 1:
    case "VID_LAYOUT_MODE_1":
      return VidLayout.VID_LAYOUT_MODE_1;
    case 2:
    case "VID_LAYOUT_MODE_2X2":
      return VidLayout.VID_LAYOUT_MODE_2X2;
    case 3:
    case "VID_LAYOUT_MODE_3X3":
      return VidLayout.VID_LAYOUT_MODE_3X3;
    case 4:
    case "VID_LAYOUT_MODE_4X4":
      return VidLayout.VID_LAYOUT_MODE_4X4;
    case 5:
    case "VID_LAYOUT_MODE_6":
      return VidLayout.VID_LAYOUT_MODE_6;
    case 6:
    case "VID_LAYOUT_MODE_8":
      return VidLayout.VID_LAYOUT_MODE_8;
    case 7:
    case "VID_LAYOUT_MODE_12p1":
      return VidLayout.VID_LAYOUT_MODE_12p1;
    case 8:
    case "VID_LAYOUT_MODE_5x5":
      return VidLayout.VID_LAYOUT_MODE_5x5;
    case 9:
    case "VID_LAYOUT_MODE_6x6":
      return VidLayout.VID_LAYOUT_MODE_6x6;
    case 10:
    case "VID_LAYOUT_MODE_8x8":
      return VidLayout.VID_LAYOUT_MODE_8x8;
    case 11:
    case "VID_LAYOUT_MODE_ONE":
      return VidLayout.VID_LAYOUT_MODE_ONE;
    case 12:
    case "VID_LAYOUT_MODE_1x3":
      return VidLayout.VID_LAYOUT_MODE_1x3;
    case 13:
    case "VID_LAYOUT_MODE_1p6":
      return VidLayout.VID_LAYOUT_MODE_1p6;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VidLayout.UNRECOGNIZED;
  }
}

export function vidLayoutToJSON(object: VidLayout): string {
  switch (object) {
    case VidLayout.VID_LAYOUT_MODE_0:
      return "VID_LAYOUT_MODE_0";
    case VidLayout.VID_LAYOUT_MODE_1:
      return "VID_LAYOUT_MODE_1";
    case VidLayout.VID_LAYOUT_MODE_2X2:
      return "VID_LAYOUT_MODE_2X2";
    case VidLayout.VID_LAYOUT_MODE_3X3:
      return "VID_LAYOUT_MODE_3X3";
    case VidLayout.VID_LAYOUT_MODE_4X4:
      return "VID_LAYOUT_MODE_4X4";
    case VidLayout.VID_LAYOUT_MODE_6:
      return "VID_LAYOUT_MODE_6";
    case VidLayout.VID_LAYOUT_MODE_8:
      return "VID_LAYOUT_MODE_8";
    case VidLayout.VID_LAYOUT_MODE_12p1:
      return "VID_LAYOUT_MODE_12p1";
    case VidLayout.VID_LAYOUT_MODE_5x5:
      return "VID_LAYOUT_MODE_5x5";
    case VidLayout.VID_LAYOUT_MODE_6x6:
      return "VID_LAYOUT_MODE_6x6";
    case VidLayout.VID_LAYOUT_MODE_8x8:
      return "VID_LAYOUT_MODE_8x8";
    case VidLayout.VID_LAYOUT_MODE_ONE:
      return "VID_LAYOUT_MODE_ONE";
    case VidLayout.VID_LAYOUT_MODE_1x3:
      return "VID_LAYOUT_MODE_1x3";
    case VidLayout.VID_LAYOUT_MODE_1p6:
      return "VID_LAYOUT_MODE_1p6";
    case VidLayout.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** DataBase configuration */
export enum VidEventDBType {
  VID_DB_SQLITE = 0,
  VID_DB_POSTGRESQL = 1,
  UNRECOGNIZED = -1,
}

export function vidEventDBTypeFromJSON(object: any): VidEventDBType {
  switch (object) {
    case 0:
    case "VID_DB_SQLITE":
      return VidEventDBType.VID_DB_SQLITE;
    case 1:
    case "VID_DB_POSTGRESQL":
      return VidEventDBType.VID_DB_POSTGRESQL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VidEventDBType.UNRECOGNIZED;
  }
}

export function vidEventDBTypeToJSON(object: VidEventDBType): string {
  switch (object) {
    case VidEventDBType.VID_DB_SQLITE:
      return "VID_DB_SQLITE";
    case VidEventDBType.VID_DB_POSTGRESQL:
      return "VID_DB_POSTGRESQL";
    case VidEventDBType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SocketConnectType {
  VID_CONNECT_ADMIN = 0,
  VID_CONNECT_USER = 1,
  UNRECOGNIZED = -1,
}

export function socketConnectTypeFromJSON(object: any): SocketConnectType {
  switch (object) {
    case 0:
    case "VID_CONNECT_ADMIN":
      return SocketConnectType.VID_CONNECT_ADMIN;
    case 1:
    case "VID_CONNECT_USER":
      return SocketConnectType.VID_CONNECT_USER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SocketConnectType.UNRECOGNIZED;
  }
}

export function socketConnectTypeToJSON(object: SocketConnectType): string {
  switch (object) {
    case SocketConnectType.VID_CONNECT_ADMIN:
      return "VID_CONNECT_ADMIN";
    case SocketConnectType.VID_CONNECT_USER:
      return "VID_CONNECT_USER";
    case SocketConnectType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** =========================video server client common */
export interface VidUser {
  /** ID is a uuid */
  strId: string;
  strName: string;
  strPasswd: string;
  /** Role id for role */
  strRoleId: string;
}

export interface VidUserList {
  cVidUser: VidUser[];
}

/** Service Stor configure */
export interface VidStorServerConf {
  nOapiPort: number;
  strAdminPasswd: string;
  nRTSPPort: number;
  nRTMPPort: number;
  nHLSPort: number;
}

export interface VidCamera {
  bDisable: boolean;
  /** use uuid for id of the camera */
  strId: string;
  strName: string;
  nType: CameraType;
  /** ONVIF */
  strIP: string;
  strPort: string;
  strUser: string;
  strPasswd: string;
  strONVIFAddress: string;
  bProfileToken: boolean;
  strProfileToken1: string;
  strProfileToken2: string;
  /** File */
  strFile: string;
  /** RTSP */
  strRTSPUrl: string;
  /** Motion and if use HW accel for motion */
  bHWaccel: boolean;
  bServerMotion: boolean;
  nConnectType: CameraConnectType;
  /** Enable HDFS Record on x64 CPU */
  bHDFSRecord: boolean;
  /** Recording */
  cRecSched: string[];
  nPreRecSec: number;
  nPostRecSec: number;
  /** Motion JPEG Stream */
  bMotionJPEG: boolean;
  /** Stream select */
  nRecordStream: number;
  /** Server based Motion Stream. */
  nServerMotionStream: number;
  /** ONVIF event level */
  nOnvifEvtLevel: OnvifEventLevel;
  /** Record Schedule 7 x 24 */
  strSched: string;
  /** Motion Detection Reg 320 * 240 */
  strMotReg: string;
  bOnline: boolean;
  bRec: boolean;
  /** Channel number, all the rtsp rtmp hls url is based on the channel number */
  nCh: number;
  bPtzContol: boolean;
}

export interface VidCameraList {
  cVidCamera: VidCamera[];
}

export interface VidDisk {
  strId: string;
  strPath: string;
  nTotalSize: number;
  nFreeSize: number;
  nStorLimit: number;
  nStorUsed: number;
  strRecordPath: string;
}

export interface VidDiskList {
  cVidDisk: VidDisk[];
}

/** HDFS config */
export interface VidHDFSConf {
  strNameNode: string;
  strPort: string;
  strUser: string;
  strPasswd: string;
  nFileInterval: number;
}

export interface VidCameraId {
  /** ID of the VidStor */
  strStorId: string;
  strCameraId: string;
}

export interface VidClientConf {
  nLang: VidLanguage;
  strAdminPasswd: string;
  bAutoLogin: boolean;
  bAutoFullScreen: boolean;
}

/** Video Storage */
export interface VidStor {
  /** use uuid for id of VidStor */
  strId: string;
  strName: string;
  strIP: string;
  strPort: string;
  strUser: string;
  strPasswd: string;
}

export interface VidStorList {
  cVidStor: VidStor[];
}

/** View Window */
export interface VidViewWindow {
  cId: VidCameraId | undefined;
  nWindowsId: number;
  bHWAccel: boolean;
}

/** View */
export interface VidView {
  /** ID is a uuid */
  strId: string;
  strName: string;
  cView: VidViewWindow[];
  cLayout: VidLayout;
}

export interface VidViewList {
  cVidView: VidView[];
}

/** Tour */
export interface VidTour {
  /** ID is a uuid */
  strId: string;
  strName: string;
  strView: string[];
}

export interface VidTourList {
  cVidTour: VidTour[];
}

/** Group */
export interface VidGroup {
  /** ID is a uuid */
  strId: string;
  strName: string;
  cGroup: VidCameraId[];
}

export interface VidGroupList {
  cVidGroup: VidGroup[];
}

/**
 * Emap
 * Emap Camera
 */
export interface VidEmapCamera {
  cId: VidCameraId | undefined;
  x: number;
  y: number;
  w: number;
  h: number;
}

/** View */
export interface VidEmap {
  /** ID is a uuid */
  strId: string;
  strName: string;
  cCamera: VidEmapCamera[];
}

export interface VidEmapList {
  cVidEmap: VidEmap[];
}

/** Stream List */
export interface VidStream {
  /** Token of the Stream */
  strToken: string;
  strName: string;
}

export interface VidStreamList {
  cVidStream: VidStream[];
}

/**
 * Below Is VA part
 * Blob
 */
export interface VidBlob {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export interface VidBlobList {
  cBlob: VidBlob[];
}

export interface VidEventDBConf {
  nType: VidEventDBType;
  strDBPath: string;
}

export interface VidEvent {
  strId: string;
  strDevice: string;
  strDeviceName: string;
  strType: string;
  nTime: number;
  strTime: string;
  strDesc: string;
  bHandled: boolean;
  bSearched: boolean;
  strComments: string;
  /** Used for Client display */
  strStorId: string;
  /** Used for Client display */
  strStorName: string;
  /** For Count in UI */
  nIdx: number;
}

export interface VidStreamUrl {
  strProtocol: string;
  strUrl: string;
}

export interface VidStreamUrlList {
  cUrl: VidStreamUrl[];
}

export interface VidSocket {
  strid: string;
  strIp: string;
  nConnectType: SocketConnectType;
  nDataLen: number;
  nFps: number;
}

export interface VidSocketList {
  cVidSocket: VidSocket[];
}

function createBaseVidUser(): VidUser {
  return { strId: "", strName: "", strPasswd: "", strRoleId: "" };
}

export const VidUser = {
  encode(
    message: VidUser,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.strName !== "") {
      writer.uint32(18).string(message.strName);
    }
    if (message.strPasswd !== "") {
      writer.uint32(26).string(message.strPasswd);
    }
    if (message.strRoleId !== "") {
      writer.uint32(34).string(message.strRoleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidUser {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.strPasswd = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.strRoleId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidUser {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strName: isSet(object.strName) ? globalThis.String(object.strName) : "",
      strPasswd: isSet(object.strPasswd)
        ? globalThis.String(object.strPasswd)
        : "",
      strRoleId: isSet(object.strRoleId)
        ? globalThis.String(object.strRoleId)
        : "",
    };
  },

  toJSON(message: VidUser): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strName !== "") {
      obj.strName = message.strName;
    }
    if (message.strPasswd !== "") {
      obj.strPasswd = message.strPasswd;
    }
    if (message.strRoleId !== "") {
      obj.strRoleId = message.strRoleId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidUser>, I>>(base?: I): VidUser {
    return VidUser.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidUser>, I>>(object: I): VidUser {
    const message = createBaseVidUser();
    message.strId = object.strId ?? "";
    message.strName = object.strName ?? "";
    message.strPasswd = object.strPasswd ?? "";
    message.strRoleId = object.strRoleId ?? "";
    return message;
  },
};

function createBaseVidUserList(): VidUserList {
  return { cVidUser: [] };
}

export const VidUserList = {
  encode(
    message: VidUserList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidUser) {
      VidUser.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidUserList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidUserList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidUser.push(VidUser.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidUserList {
    return {
      cVidUser: globalThis.Array.isArray(object?.cVidUser)
        ? object.cVidUser.map((e: any) => VidUser.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidUserList): unknown {
    const obj: any = {};
    if (message.cVidUser?.length) {
      obj.cVidUser = message.cVidUser.map((e) => VidUser.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidUserList>, I>>(base?: I): VidUserList {
    return VidUserList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidUserList>, I>>(
    object: I,
  ): VidUserList {
    const message = createBaseVidUserList();
    message.cVidUser =
      object.cVidUser?.map((e) => VidUser.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidStorServerConf(): VidStorServerConf {
  return {
    nOapiPort: 0,
    strAdminPasswd: "",
    nRTSPPort: 0,
    nRTMPPort: 0,
    nHLSPort: 0,
  };
}

export const VidStorServerConf = {
  encode(
    message: VidStorServerConf,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nOapiPort !== 0) {
      writer.uint32(8).int32(message.nOapiPort);
    }
    if (message.strAdminPasswd !== "") {
      writer.uint32(18).string(message.strAdminPasswd);
    }
    if (message.nRTSPPort !== 0) {
      writer.uint32(24).int32(message.nRTSPPort);
    }
    if (message.nRTMPPort !== 0) {
      writer.uint32(32).int32(message.nRTMPPort);
    }
    if (message.nHLSPort !== 0) {
      writer.uint32(40).int32(message.nHLSPort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidStorServerConf {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidStorServerConf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nOapiPort = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strAdminPasswd = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nRTSPPort = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nRTMPPort = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.nHLSPort = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidStorServerConf {
    return {
      nOapiPort: isSet(object.nOapiPort)
        ? globalThis.Number(object.nOapiPort)
        : 0,
      strAdminPasswd: isSet(object.strAdminPasswd)
        ? globalThis.String(object.strAdminPasswd)
        : "",
      nRTSPPort: isSet(object.nRTSPPort)
        ? globalThis.Number(object.nRTSPPort)
        : 0,
      nRTMPPort: isSet(object.nRTMPPort)
        ? globalThis.Number(object.nRTMPPort)
        : 0,
      nHLSPort: isSet(object.nHLSPort) ? globalThis.Number(object.nHLSPort) : 0,
    };
  },

  toJSON(message: VidStorServerConf): unknown {
    const obj: any = {};
    if (message.nOapiPort !== 0) {
      obj.nOapiPort = Math.round(message.nOapiPort);
    }
    if (message.strAdminPasswd !== "") {
      obj.strAdminPasswd = message.strAdminPasswd;
    }
    if (message.nRTSPPort !== 0) {
      obj.nRTSPPort = Math.round(message.nRTSPPort);
    }
    if (message.nRTMPPort !== 0) {
      obj.nRTMPPort = Math.round(message.nRTMPPort);
    }
    if (message.nHLSPort !== 0) {
      obj.nHLSPort = Math.round(message.nHLSPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidStorServerConf>, I>>(
    base?: I,
  ): VidStorServerConf {
    return VidStorServerConf.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidStorServerConf>, I>>(
    object: I,
  ): VidStorServerConf {
    const message = createBaseVidStorServerConf();
    message.nOapiPort = object.nOapiPort ?? 0;
    message.strAdminPasswd = object.strAdminPasswd ?? "";
    message.nRTSPPort = object.nRTSPPort ?? 0;
    message.nRTMPPort = object.nRTMPPort ?? 0;
    message.nHLSPort = object.nHLSPort ?? 0;
    return message;
  },
};

function createBaseVidCamera(): VidCamera {
  return {
    bDisable: false,
    strId: "",
    strName: "",
    nType: 0,
    strIP: "",
    strPort: "",
    strUser: "",
    strPasswd: "",
    strONVIFAddress: "",
    bProfileToken: false,
    strProfileToken1: "",
    strProfileToken2: "",
    strFile: "",
    strRTSPUrl: "",
    bHWaccel: false,
    bServerMotion: false,
    nConnectType: 0,
    bHDFSRecord: false,
    cRecSched: [],
    nPreRecSec: 0,
    nPostRecSec: 0,
    bMotionJPEG: false,
    nRecordStream: 0,
    nServerMotionStream: 0,
    nOnvifEvtLevel: 0,
    strSched: "",
    strMotReg: "",
    bOnline: false,
    bRec: false,
    nCh: 0,
    bPtzContol: false,
  };
}

export const VidCamera = {
  encode(
    message: VidCamera,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bDisable === true) {
      writer.uint32(8).bool(message.bDisable);
    }
    if (message.strId !== "") {
      writer.uint32(18).string(message.strId);
    }
    if (message.strName !== "") {
      writer.uint32(26).string(message.strName);
    }
    if (message.nType !== 0) {
      writer.uint32(32).int32(message.nType);
    }
    if (message.strIP !== "") {
      writer.uint32(42).string(message.strIP);
    }
    if (message.strPort !== "") {
      writer.uint32(50).string(message.strPort);
    }
    if (message.strUser !== "") {
      writer.uint32(58).string(message.strUser);
    }
    if (message.strPasswd !== "") {
      writer.uint32(66).string(message.strPasswd);
    }
    if (message.strONVIFAddress !== "") {
      writer.uint32(74).string(message.strONVIFAddress);
    }
    if (message.bProfileToken === true) {
      writer.uint32(80).bool(message.bProfileToken);
    }
    if (message.strProfileToken1 !== "") {
      writer.uint32(90).string(message.strProfileToken1);
    }
    if (message.strProfileToken2 !== "") {
      writer.uint32(98).string(message.strProfileToken2);
    }
    if (message.strFile !== "") {
      writer.uint32(106).string(message.strFile);
    }
    if (message.strRTSPUrl !== "") {
      writer.uint32(114).string(message.strRTSPUrl);
    }
    if (message.bHWaccel === true) {
      writer.uint32(120).bool(message.bHWaccel);
    }
    if (message.bServerMotion === true) {
      writer.uint32(128).bool(message.bServerMotion);
    }
    if (message.nConnectType !== 0) {
      writer.uint32(136).int32(message.nConnectType);
    }
    if (message.bHDFSRecord === true) {
      writer.uint32(144).bool(message.bHDFSRecord);
    }
    for (const v of message.cRecSched) {
      writer.uint32(162).string(v!);
    }
    if (message.nPreRecSec !== 0) {
      writer.uint32(168).int32(message.nPreRecSec);
    }
    if (message.nPostRecSec !== 0) {
      writer.uint32(176).int32(message.nPostRecSec);
    }
    if (message.bMotionJPEG === true) {
      writer.uint32(184).bool(message.bMotionJPEG);
    }
    if (message.nRecordStream !== 0) {
      writer.uint32(192).int32(message.nRecordStream);
    }
    if (message.nServerMotionStream !== 0) {
      writer.uint32(200).int32(message.nServerMotionStream);
    }
    if (message.nOnvifEvtLevel !== 0) {
      writer.uint32(208).int32(message.nOnvifEvtLevel);
    }
    if (message.strSched !== "") {
      writer.uint32(218).string(message.strSched);
    }
    if (message.strMotReg !== "") {
      writer.uint32(226).string(message.strMotReg);
    }
    if (message.bOnline === true) {
      writer.uint32(232).bool(message.bOnline);
    }
    if (message.bRec === true) {
      writer.uint32(240).bool(message.bRec);
    }
    if (message.nCh !== 0) {
      writer.uint32(248).int32(message.nCh);
    }
    if (message.bPtzContol === true) {
      writer.uint32(256).bool(message.bPtzContol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidCamera {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidCamera();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bDisable = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.strName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.strIP = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.strPort = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.strUser = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.strPasswd = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.strONVIFAddress = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.bProfileToken = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.strProfileToken1 = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.strProfileToken2 = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.strFile = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.strRTSPUrl = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.bHWaccel = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.bServerMotion = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.nConnectType = reader.int32() as any;
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.bHDFSRecord = reader.bool();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.cRecSched.push(reader.string());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.nPreRecSec = reader.int32();
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.nPostRecSec = reader.int32();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.bMotionJPEG = reader.bool();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.nRecordStream = reader.int32();
          continue;
        case 25:
          if (tag !== 200) {
            break;
          }

          message.nServerMotionStream = reader.int32();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.nOnvifEvtLevel = reader.int32() as any;
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.strSched = reader.string();
          continue;
        case 28:
          if (tag !== 226) {
            break;
          }

          message.strMotReg = reader.string();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.bOnline = reader.bool();
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.bRec = reader.bool();
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.nCh = reader.int32();
          continue;
        case 32:
          if (tag !== 256) {
            break;
          }

          message.bPtzContol = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidCamera {
    return {
      bDisable: isSet(object.bDisable)
        ? globalThis.Boolean(object.bDisable)
        : false,
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strName: isSet(object.strName) ? globalThis.String(object.strName) : "",
      nType: isSet(object.nType) ? cameraTypeFromJSON(object.nType) : 0,
      strIP: isSet(object.strIP) ? globalThis.String(object.strIP) : "",
      strPort: isSet(object.strPort) ? globalThis.String(object.strPort) : "",
      strUser: isSet(object.strUser) ? globalThis.String(object.strUser) : "",
      strPasswd: isSet(object.strPasswd)
        ? globalThis.String(object.strPasswd)
        : "",
      strONVIFAddress: isSet(object.strONVIFAddress)
        ? globalThis.String(object.strONVIFAddress)
        : "",
      bProfileToken: isSet(object.bProfileToken)
        ? globalThis.Boolean(object.bProfileToken)
        : false,
      strProfileToken1: isSet(object.strProfileToken1)
        ? globalThis.String(object.strProfileToken1)
        : "",
      strProfileToken2: isSet(object.strProfileToken2)
        ? globalThis.String(object.strProfileToken2)
        : "",
      strFile: isSet(object.strFile) ? globalThis.String(object.strFile) : "",
      strRTSPUrl: isSet(object.strRTSPUrl)
        ? globalThis.String(object.strRTSPUrl)
        : "",
      bHWaccel: isSet(object.bHWaccel)
        ? globalThis.Boolean(object.bHWaccel)
        : false,
      bServerMotion: isSet(object.bServerMotion)
        ? globalThis.Boolean(object.bServerMotion)
        : false,
      nConnectType: isSet(object.nConnectType)
        ? cameraConnectTypeFromJSON(object.nConnectType)
        : 0,
      bHDFSRecord: isSet(object.bHDFSRecord)
        ? globalThis.Boolean(object.bHDFSRecord)
        : false,
      cRecSched: globalThis.Array.isArray(object?.cRecSched)
        ? object.cRecSched.map((e: any) => globalThis.String(e))
        : [],
      nPreRecSec: isSet(object.nPreRecSec)
        ? globalThis.Number(object.nPreRecSec)
        : 0,
      nPostRecSec: isSet(object.nPostRecSec)
        ? globalThis.Number(object.nPostRecSec)
        : 0,
      bMotionJPEG: isSet(object.bMotionJPEG)
        ? globalThis.Boolean(object.bMotionJPEG)
        : false,
      nRecordStream: isSet(object.nRecordStream)
        ? globalThis.Number(object.nRecordStream)
        : 0,
      nServerMotionStream: isSet(object.nServerMotionStream)
        ? globalThis.Number(object.nServerMotionStream)
        : 0,
      nOnvifEvtLevel: isSet(object.nOnvifEvtLevel)
        ? onvifEventLevelFromJSON(object.nOnvifEvtLevel)
        : 0,
      strSched: isSet(object.strSched)
        ? globalThis.String(object.strSched)
        : "",
      strMotReg: isSet(object.strMotReg)
        ? globalThis.String(object.strMotReg)
        : "",
      bOnline: isSet(object.bOnline)
        ? globalThis.Boolean(object.bOnline)
        : false,
      bRec: isSet(object.bRec) ? globalThis.Boolean(object.bRec) : false,
      nCh: isSet(object.nCh) ? globalThis.Number(object.nCh) : 0,
      bPtzContol: isSet(object.bPtzContol)
        ? globalThis.Boolean(object.bPtzContol)
        : false,
    };
  },

  toJSON(message: VidCamera): unknown {
    const obj: any = {};
    if (message.bDisable === true) {
      obj.bDisable = message.bDisable;
    }
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strName !== "") {
      obj.strName = message.strName;
    }
    if (message.nType !== 0) {
      obj.nType = cameraTypeToJSON(message.nType);
    }
    if (message.strIP !== "") {
      obj.strIP = message.strIP;
    }
    if (message.strPort !== "") {
      obj.strPort = message.strPort;
    }
    if (message.strUser !== "") {
      obj.strUser = message.strUser;
    }
    if (message.strPasswd !== "") {
      obj.strPasswd = message.strPasswd;
    }
    if (message.strONVIFAddress !== "") {
      obj.strONVIFAddress = message.strONVIFAddress;
    }
    if (message.bProfileToken === true) {
      obj.bProfileToken = message.bProfileToken;
    }
    if (message.strProfileToken1 !== "") {
      obj.strProfileToken1 = message.strProfileToken1;
    }
    if (message.strProfileToken2 !== "") {
      obj.strProfileToken2 = message.strProfileToken2;
    }
    if (message.strFile !== "") {
      obj.strFile = message.strFile;
    }
    if (message.strRTSPUrl !== "") {
      obj.strRTSPUrl = message.strRTSPUrl;
    }
    if (message.bHWaccel === true) {
      obj.bHWaccel = message.bHWaccel;
    }
    if (message.bServerMotion === true) {
      obj.bServerMotion = message.bServerMotion;
    }
    if (message.nConnectType !== 0) {
      obj.nConnectType = cameraConnectTypeToJSON(message.nConnectType);
    }
    if (message.bHDFSRecord === true) {
      obj.bHDFSRecord = message.bHDFSRecord;
    }
    if (message.cRecSched?.length) {
      obj.cRecSched = message.cRecSched;
    }
    if (message.nPreRecSec !== 0) {
      obj.nPreRecSec = Math.round(message.nPreRecSec);
    }
    if (message.nPostRecSec !== 0) {
      obj.nPostRecSec = Math.round(message.nPostRecSec);
    }
    if (message.bMotionJPEG === true) {
      obj.bMotionJPEG = message.bMotionJPEG;
    }
    if (message.nRecordStream !== 0) {
      obj.nRecordStream = Math.round(message.nRecordStream);
    }
    if (message.nServerMotionStream !== 0) {
      obj.nServerMotionStream = Math.round(message.nServerMotionStream);
    }
    if (message.nOnvifEvtLevel !== 0) {
      obj.nOnvifEvtLevel = onvifEventLevelToJSON(message.nOnvifEvtLevel);
    }
    if (message.strSched !== "") {
      obj.strSched = message.strSched;
    }
    if (message.strMotReg !== "") {
      obj.strMotReg = message.strMotReg;
    }
    if (message.bOnline === true) {
      obj.bOnline = message.bOnline;
    }
    if (message.bRec === true) {
      obj.bRec = message.bRec;
    }
    if (message.nCh !== 0) {
      obj.nCh = Math.round(message.nCh);
    }
    if (message.bPtzContol === true) {
      obj.bPtzContol = message.bPtzContol;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidCamera>, I>>(base?: I): VidCamera {
    return VidCamera.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidCamera>, I>>(
    object: I,
  ): VidCamera {
    const message = createBaseVidCamera();
    message.bDisable = object.bDisable ?? false;
    message.strId = object.strId ?? "";
    message.strName = object.strName ?? "";
    message.nType = object.nType ?? 0;
    message.strIP = object.strIP ?? "";
    message.strPort = object.strPort ?? "";
    message.strUser = object.strUser ?? "";
    message.strPasswd = object.strPasswd ?? "";
    message.strONVIFAddress = object.strONVIFAddress ?? "";
    message.bProfileToken = object.bProfileToken ?? false;
    message.strProfileToken1 = object.strProfileToken1 ?? "";
    message.strProfileToken2 = object.strProfileToken2 ?? "";
    message.strFile = object.strFile ?? "";
    message.strRTSPUrl = object.strRTSPUrl ?? "";
    message.bHWaccel = object.bHWaccel ?? false;
    message.bServerMotion = object.bServerMotion ?? false;
    message.nConnectType = object.nConnectType ?? 0;
    message.bHDFSRecord = object.bHDFSRecord ?? false;
    message.cRecSched = object.cRecSched?.map((e) => e) || [];
    message.nPreRecSec = object.nPreRecSec ?? 0;
    message.nPostRecSec = object.nPostRecSec ?? 0;
    message.bMotionJPEG = object.bMotionJPEG ?? false;
    message.nRecordStream = object.nRecordStream ?? 0;
    message.nServerMotionStream = object.nServerMotionStream ?? 0;
    message.nOnvifEvtLevel = object.nOnvifEvtLevel ?? 0;
    message.strSched = object.strSched ?? "";
    message.strMotReg = object.strMotReg ?? "";
    message.bOnline = object.bOnline ?? false;
    message.bRec = object.bRec ?? false;
    message.nCh = object.nCh ?? 0;
    message.bPtzContol = object.bPtzContol ?? false;
    return message;
  },
};

function createBaseVidCameraList(): VidCameraList {
  return { cVidCamera: [] };
}

export const VidCameraList = {
  encode(
    message: VidCameraList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidCamera) {
      VidCamera.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidCameraList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidCameraList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidCamera.push(VidCamera.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidCameraList {
    return {
      cVidCamera: globalThis.Array.isArray(object?.cVidCamera)
        ? object.cVidCamera.map((e: any) => VidCamera.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidCameraList): unknown {
    const obj: any = {};
    if (message.cVidCamera?.length) {
      obj.cVidCamera = message.cVidCamera.map((e) => VidCamera.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidCameraList>, I>>(
    base?: I,
  ): VidCameraList {
    return VidCameraList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidCameraList>, I>>(
    object: I,
  ): VidCameraList {
    const message = createBaseVidCameraList();
    message.cVidCamera =
      object.cVidCamera?.map((e) => VidCamera.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidDisk(): VidDisk {
  return {
    strId: "",
    strPath: "",
    nTotalSize: 0,
    nFreeSize: 0,
    nStorLimit: 0,
    nStorUsed: 0,
    strRecordPath: "",
  };
}

export const VidDisk = {
  encode(
    message: VidDisk,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.strPath !== "") {
      writer.uint32(18).string(message.strPath);
    }
    if (message.nTotalSize !== 0) {
      writer.uint32(24).int64(message.nTotalSize);
    }
    if (message.nFreeSize !== 0) {
      writer.uint32(32).int64(message.nFreeSize);
    }
    if (message.nStorLimit !== 0) {
      writer.uint32(40).int64(message.nStorLimit);
    }
    if (message.nStorUsed !== 0) {
      writer.uint32(48).int64(message.nStorUsed);
    }
    if (message.strRecordPath !== "") {
      writer.uint32(58).string(message.strRecordPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidDisk {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidDisk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strPath = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nTotalSize = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nFreeSize = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.nStorLimit = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.nStorUsed = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.strRecordPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidDisk {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strPath: isSet(object.strPath) ? globalThis.String(object.strPath) : "",
      nTotalSize: isSet(object.nTotalSize)
        ? globalThis.Number(object.nTotalSize)
        : 0,
      nFreeSize: isSet(object.nFreeSize)
        ? globalThis.Number(object.nFreeSize)
        : 0,
      nStorLimit: isSet(object.nStorLimit)
        ? globalThis.Number(object.nStorLimit)
        : 0,
      nStorUsed: isSet(object.nStorUsed)
        ? globalThis.Number(object.nStorUsed)
        : 0,
      strRecordPath: isSet(object.strRecordPath)
        ? globalThis.String(object.strRecordPath)
        : "",
    };
  },

  toJSON(message: VidDisk): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strPath !== "") {
      obj.strPath = message.strPath;
    }
    if (message.nTotalSize !== 0) {
      obj.nTotalSize = Math.round(message.nTotalSize);
    }
    if (message.nFreeSize !== 0) {
      obj.nFreeSize = Math.round(message.nFreeSize);
    }
    if (message.nStorLimit !== 0) {
      obj.nStorLimit = Math.round(message.nStorLimit);
    }
    if (message.nStorUsed !== 0) {
      obj.nStorUsed = Math.round(message.nStorUsed);
    }
    if (message.strRecordPath !== "") {
      obj.strRecordPath = message.strRecordPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidDisk>, I>>(base?: I): VidDisk {
    return VidDisk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidDisk>, I>>(object: I): VidDisk {
    const message = createBaseVidDisk();
    message.strId = object.strId ?? "";
    message.strPath = object.strPath ?? "";
    message.nTotalSize = object.nTotalSize ?? 0;
    message.nFreeSize = object.nFreeSize ?? 0;
    message.nStorLimit = object.nStorLimit ?? 0;
    message.nStorUsed = object.nStorUsed ?? 0;
    message.strRecordPath = object.strRecordPath ?? "";
    return message;
  },
};

function createBaseVidDiskList(): VidDiskList {
  return { cVidDisk: [] };
}

export const VidDiskList = {
  encode(
    message: VidDiskList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidDisk) {
      VidDisk.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidDiskList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidDiskList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidDisk.push(VidDisk.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidDiskList {
    return {
      cVidDisk: globalThis.Array.isArray(object?.cVidDisk)
        ? object.cVidDisk.map((e: any) => VidDisk.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidDiskList): unknown {
    const obj: any = {};
    if (message.cVidDisk?.length) {
      obj.cVidDisk = message.cVidDisk.map((e) => VidDisk.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidDiskList>, I>>(base?: I): VidDiskList {
    return VidDiskList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidDiskList>, I>>(
    object: I,
  ): VidDiskList {
    const message = createBaseVidDiskList();
    message.cVidDisk =
      object.cVidDisk?.map((e) => VidDisk.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidHDFSConf(): VidHDFSConf {
  return {
    strNameNode: "",
    strPort: "",
    strUser: "",
    strPasswd: "",
    nFileInterval: 0,
  };
}

export const VidHDFSConf = {
  encode(
    message: VidHDFSConf,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strNameNode !== "") {
      writer.uint32(10).string(message.strNameNode);
    }
    if (message.strPort !== "") {
      writer.uint32(18).string(message.strPort);
    }
    if (message.strUser !== "") {
      writer.uint32(26).string(message.strUser);
    }
    if (message.strPasswd !== "") {
      writer.uint32(34).string(message.strPasswd);
    }
    if (message.nFileInterval !== 0) {
      writer.uint32(40).int32(message.nFileInterval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidHDFSConf {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidHDFSConf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strNameNode = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strPort = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.strUser = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.strPasswd = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.nFileInterval = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidHDFSConf {
    return {
      strNameNode: isSet(object.strNameNode)
        ? globalThis.String(object.strNameNode)
        : "",
      strPort: isSet(object.strPort) ? globalThis.String(object.strPort) : "",
      strUser: isSet(object.strUser) ? globalThis.String(object.strUser) : "",
      strPasswd: isSet(object.strPasswd)
        ? globalThis.String(object.strPasswd)
        : "",
      nFileInterval: isSet(object.nFileInterval)
        ? globalThis.Number(object.nFileInterval)
        : 0,
    };
  },

  toJSON(message: VidHDFSConf): unknown {
    const obj: any = {};
    if (message.strNameNode !== "") {
      obj.strNameNode = message.strNameNode;
    }
    if (message.strPort !== "") {
      obj.strPort = message.strPort;
    }
    if (message.strUser !== "") {
      obj.strUser = message.strUser;
    }
    if (message.strPasswd !== "") {
      obj.strPasswd = message.strPasswd;
    }
    if (message.nFileInterval !== 0) {
      obj.nFileInterval = Math.round(message.nFileInterval);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidHDFSConf>, I>>(base?: I): VidHDFSConf {
    return VidHDFSConf.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidHDFSConf>, I>>(
    object: I,
  ): VidHDFSConf {
    const message = createBaseVidHDFSConf();
    message.strNameNode = object.strNameNode ?? "";
    message.strPort = object.strPort ?? "";
    message.strUser = object.strUser ?? "";
    message.strPasswd = object.strPasswd ?? "";
    message.nFileInterval = object.nFileInterval ?? 0;
    return message;
  },
};

function createBaseVidCameraId(): VidCameraId {
  return { strStorId: "", strCameraId: "" };
}

export const VidCameraId = {
  encode(
    message: VidCameraId,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strStorId !== "") {
      writer.uint32(10).string(message.strStorId);
    }
    if (message.strCameraId !== "") {
      writer.uint32(18).string(message.strCameraId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidCameraId {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidCameraId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strStorId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strCameraId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidCameraId {
    return {
      strStorId: isSet(object.strStorId)
        ? globalThis.String(object.strStorId)
        : "",
      strCameraId: isSet(object.strCameraId)
        ? globalThis.String(object.strCameraId)
        : "",
    };
  },

  toJSON(message: VidCameraId): unknown {
    const obj: any = {};
    if (message.strStorId !== "") {
      obj.strStorId = message.strStorId;
    }
    if (message.strCameraId !== "") {
      obj.strCameraId = message.strCameraId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidCameraId>, I>>(base?: I): VidCameraId {
    return VidCameraId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidCameraId>, I>>(
    object: I,
  ): VidCameraId {
    const message = createBaseVidCameraId();
    message.strStorId = object.strStorId ?? "";
    message.strCameraId = object.strCameraId ?? "";
    return message;
  },
};

function createBaseVidClientConf(): VidClientConf {
  return {
    nLang: 0,
    strAdminPasswd: "",
    bAutoLogin: false,
    bAutoFullScreen: false,
  };
}

export const VidClientConf = {
  encode(
    message: VidClientConf,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nLang !== 0) {
      writer.uint32(8).int32(message.nLang);
    }
    if (message.strAdminPasswd !== "") {
      writer.uint32(18).string(message.strAdminPasswd);
    }
    if (message.bAutoLogin === true) {
      writer.uint32(24).bool(message.bAutoLogin);
    }
    if (message.bAutoFullScreen === true) {
      writer.uint32(32).bool(message.bAutoFullScreen);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidClientConf {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidClientConf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nLang = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strAdminPasswd = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bAutoLogin = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bAutoFullScreen = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidClientConf {
    return {
      nLang: isSet(object.nLang) ? vidLanguageFromJSON(object.nLang) : 0,
      strAdminPasswd: isSet(object.strAdminPasswd)
        ? globalThis.String(object.strAdminPasswd)
        : "",
      bAutoLogin: isSet(object.bAutoLogin)
        ? globalThis.Boolean(object.bAutoLogin)
        : false,
      bAutoFullScreen: isSet(object.bAutoFullScreen)
        ? globalThis.Boolean(object.bAutoFullScreen)
        : false,
    };
  },

  toJSON(message: VidClientConf): unknown {
    const obj: any = {};
    if (message.nLang !== 0) {
      obj.nLang = vidLanguageToJSON(message.nLang);
    }
    if (message.strAdminPasswd !== "") {
      obj.strAdminPasswd = message.strAdminPasswd;
    }
    if (message.bAutoLogin === true) {
      obj.bAutoLogin = message.bAutoLogin;
    }
    if (message.bAutoFullScreen === true) {
      obj.bAutoFullScreen = message.bAutoFullScreen;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidClientConf>, I>>(
    base?: I,
  ): VidClientConf {
    return VidClientConf.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidClientConf>, I>>(
    object: I,
  ): VidClientConf {
    const message = createBaseVidClientConf();
    message.nLang = object.nLang ?? 0;
    message.strAdminPasswd = object.strAdminPasswd ?? "";
    message.bAutoLogin = object.bAutoLogin ?? false;
    message.bAutoFullScreen = object.bAutoFullScreen ?? false;
    return message;
  },
};

function createBaseVidStor(): VidStor {
  return {
    strId: "",
    strName: "",
    strIP: "",
    strPort: "",
    strUser: "",
    strPasswd: "",
  };
}

export const VidStor = {
  encode(
    message: VidStor,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.strName !== "") {
      writer.uint32(18).string(message.strName);
    }
    if (message.strIP !== "") {
      writer.uint32(26).string(message.strIP);
    }
    if (message.strPort !== "") {
      writer.uint32(34).string(message.strPort);
    }
    if (message.strUser !== "") {
      writer.uint32(42).string(message.strUser);
    }
    if (message.strPasswd !== "") {
      writer.uint32(50).string(message.strPasswd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidStor {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidStor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.strIP = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.strPort = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.strUser = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.strPasswd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidStor {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strName: isSet(object.strName) ? globalThis.String(object.strName) : "",
      strIP: isSet(object.strIP) ? globalThis.String(object.strIP) : "",
      strPort: isSet(object.strPort) ? globalThis.String(object.strPort) : "",
      strUser: isSet(object.strUser) ? globalThis.String(object.strUser) : "",
      strPasswd: isSet(object.strPasswd)
        ? globalThis.String(object.strPasswd)
        : "",
    };
  },

  toJSON(message: VidStor): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strName !== "") {
      obj.strName = message.strName;
    }
    if (message.strIP !== "") {
      obj.strIP = message.strIP;
    }
    if (message.strPort !== "") {
      obj.strPort = message.strPort;
    }
    if (message.strUser !== "") {
      obj.strUser = message.strUser;
    }
    if (message.strPasswd !== "") {
      obj.strPasswd = message.strPasswd;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidStor>, I>>(base?: I): VidStor {
    return VidStor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidStor>, I>>(object: I): VidStor {
    const message = createBaseVidStor();
    message.strId = object.strId ?? "";
    message.strName = object.strName ?? "";
    message.strIP = object.strIP ?? "";
    message.strPort = object.strPort ?? "";
    message.strUser = object.strUser ?? "";
    message.strPasswd = object.strPasswd ?? "";
    return message;
  },
};

function createBaseVidStorList(): VidStorList {
  return { cVidStor: [] };
}

export const VidStorList = {
  encode(
    message: VidStorList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidStor) {
      VidStor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidStorList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidStorList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidStor.push(VidStor.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidStorList {
    return {
      cVidStor: globalThis.Array.isArray(object?.cVidStor)
        ? object.cVidStor.map((e: any) => VidStor.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidStorList): unknown {
    const obj: any = {};
    if (message.cVidStor?.length) {
      obj.cVidStor = message.cVidStor.map((e) => VidStor.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidStorList>, I>>(base?: I): VidStorList {
    return VidStorList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidStorList>, I>>(
    object: I,
  ): VidStorList {
    const message = createBaseVidStorList();
    message.cVidStor =
      object.cVidStor?.map((e) => VidStor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidViewWindow(): VidViewWindow {
  return { cId: undefined, nWindowsId: 0, bHWAccel: false };
}

export const VidViewWindow = {
  encode(
    message: VidViewWindow,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cId !== undefined) {
      VidCameraId.encode(message.cId, writer.uint32(10).fork()).ldelim();
    }
    if (message.nWindowsId !== 0) {
      writer.uint32(16).int32(message.nWindowsId);
    }
    if (message.bHWAccel === true) {
      writer.uint32(24).bool(message.bHWAccel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidViewWindow {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidViewWindow();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cId = VidCameraId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nWindowsId = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bHWAccel = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidViewWindow {
    return {
      cId: isSet(object.cId) ? VidCameraId.fromJSON(object.cId) : undefined,
      nWindowsId: isSet(object.nWindowsId)
        ? globalThis.Number(object.nWindowsId)
        : 0,
      bHWAccel: isSet(object.bHWAccel)
        ? globalThis.Boolean(object.bHWAccel)
        : false,
    };
  },

  toJSON(message: VidViewWindow): unknown {
    const obj: any = {};
    if (message.cId !== undefined) {
      obj.cId = VidCameraId.toJSON(message.cId);
    }
    if (message.nWindowsId !== 0) {
      obj.nWindowsId = Math.round(message.nWindowsId);
    }
    if (message.bHWAccel === true) {
      obj.bHWAccel = message.bHWAccel;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidViewWindow>, I>>(
    base?: I,
  ): VidViewWindow {
    return VidViewWindow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidViewWindow>, I>>(
    object: I,
  ): VidViewWindow {
    const message = createBaseVidViewWindow();
    message.cId =
      object.cId !== undefined && object.cId !== null
        ? VidCameraId.fromPartial(object.cId)
        : undefined;
    message.nWindowsId = object.nWindowsId ?? 0;
    message.bHWAccel = object.bHWAccel ?? false;
    return message;
  },
};

function createBaseVidView(): VidView {
  return { strId: "", strName: "", cView: [], cLayout: 0 };
}

export const VidView = {
  encode(
    message: VidView,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.strName !== "") {
      writer.uint32(18).string(message.strName);
    }
    for (const v of message.cView) {
      VidViewWindow.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.cLayout !== 0) {
      writer.uint32(32).int32(message.cLayout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidView {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cView.push(VidViewWindow.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.cLayout = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidView {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strName: isSet(object.strName) ? globalThis.String(object.strName) : "",
      cView: globalThis.Array.isArray(object?.cView)
        ? object.cView.map((e: any) => VidViewWindow.fromJSON(e))
        : [],
      cLayout: isSet(object.cLayout) ? vidLayoutFromJSON(object.cLayout) : 0,
    };
  },

  toJSON(message: VidView): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strName !== "") {
      obj.strName = message.strName;
    }
    if (message.cView?.length) {
      obj.cView = message.cView.map((e) => VidViewWindow.toJSON(e));
    }
    if (message.cLayout !== 0) {
      obj.cLayout = vidLayoutToJSON(message.cLayout);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidView>, I>>(base?: I): VidView {
    return VidView.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidView>, I>>(object: I): VidView {
    const message = createBaseVidView();
    message.strId = object.strId ?? "";
    message.strName = object.strName ?? "";
    message.cView =
      object.cView?.map((e) => VidViewWindow.fromPartial(e)) || [];
    message.cLayout = object.cLayout ?? 0;
    return message;
  },
};

function createBaseVidViewList(): VidViewList {
  return { cVidView: [] };
}

export const VidViewList = {
  encode(
    message: VidViewList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidView) {
      VidView.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidViewList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidViewList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidView.push(VidView.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidViewList {
    return {
      cVidView: globalThis.Array.isArray(object?.cVidView)
        ? object.cVidView.map((e: any) => VidView.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidViewList): unknown {
    const obj: any = {};
    if (message.cVidView?.length) {
      obj.cVidView = message.cVidView.map((e) => VidView.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidViewList>, I>>(base?: I): VidViewList {
    return VidViewList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidViewList>, I>>(
    object: I,
  ): VidViewList {
    const message = createBaseVidViewList();
    message.cVidView =
      object.cVidView?.map((e) => VidView.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidTour(): VidTour {
  return { strId: "", strName: "", strView: [] };
}

export const VidTour = {
  encode(
    message: VidTour,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.strName !== "") {
      writer.uint32(18).string(message.strName);
    }
    for (const v of message.strView) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidTour {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidTour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.strView.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidTour {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strName: isSet(object.strName) ? globalThis.String(object.strName) : "",
      strView: globalThis.Array.isArray(object?.strView)
        ? object.strView.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: VidTour): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strName !== "") {
      obj.strName = message.strName;
    }
    if (message.strView?.length) {
      obj.strView = message.strView;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidTour>, I>>(base?: I): VidTour {
    return VidTour.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidTour>, I>>(object: I): VidTour {
    const message = createBaseVidTour();
    message.strId = object.strId ?? "";
    message.strName = object.strName ?? "";
    message.strView = object.strView?.map((e) => e) || [];
    return message;
  },
};

function createBaseVidTourList(): VidTourList {
  return { cVidTour: [] };
}

export const VidTourList = {
  encode(
    message: VidTourList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidTour) {
      VidTour.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidTourList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidTourList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidTour.push(VidTour.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidTourList {
    return {
      cVidTour: globalThis.Array.isArray(object?.cVidTour)
        ? object.cVidTour.map((e: any) => VidTour.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidTourList): unknown {
    const obj: any = {};
    if (message.cVidTour?.length) {
      obj.cVidTour = message.cVidTour.map((e) => VidTour.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidTourList>, I>>(base?: I): VidTourList {
    return VidTourList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidTourList>, I>>(
    object: I,
  ): VidTourList {
    const message = createBaseVidTourList();
    message.cVidTour =
      object.cVidTour?.map((e) => VidTour.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidGroup(): VidGroup {
  return { strId: "", strName: "", cGroup: [] };
}

export const VidGroup = {
  encode(
    message: VidGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.strName !== "") {
      writer.uint32(18).string(message.strName);
    }
    for (const v of message.cGroup) {
      VidCameraId.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidGroup {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cGroup.push(VidCameraId.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidGroup {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strName: isSet(object.strName) ? globalThis.String(object.strName) : "",
      cGroup: globalThis.Array.isArray(object?.cGroup)
        ? object.cGroup.map((e: any) => VidCameraId.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidGroup): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strName !== "") {
      obj.strName = message.strName;
    }
    if (message.cGroup?.length) {
      obj.cGroup = message.cGroup.map((e) => VidCameraId.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidGroup>, I>>(base?: I): VidGroup {
    return VidGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidGroup>, I>>(object: I): VidGroup {
    const message = createBaseVidGroup();
    message.strId = object.strId ?? "";
    message.strName = object.strName ?? "";
    message.cGroup =
      object.cGroup?.map((e) => VidCameraId.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidGroupList(): VidGroupList {
  return { cVidGroup: [] };
}

export const VidGroupList = {
  encode(
    message: VidGroupList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidGroup) {
      VidGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidGroupList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidGroupList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidGroup.push(VidGroup.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidGroupList {
    return {
      cVidGroup: globalThis.Array.isArray(object?.cVidGroup)
        ? object.cVidGroup.map((e: any) => VidGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidGroupList): unknown {
    const obj: any = {};
    if (message.cVidGroup?.length) {
      obj.cVidGroup = message.cVidGroup.map((e) => VidGroup.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidGroupList>, I>>(
    base?: I,
  ): VidGroupList {
    return VidGroupList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidGroupList>, I>>(
    object: I,
  ): VidGroupList {
    const message = createBaseVidGroupList();
    message.cVidGroup =
      object.cVidGroup?.map((e) => VidGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidEmapCamera(): VidEmapCamera {
  return { cId: undefined, x: 0, y: 0, w: 0, h: 0 };
}

export const VidEmapCamera = {
  encode(
    message: VidEmapCamera,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cId !== undefined) {
      VidCameraId.encode(message.cId, writer.uint32(10).fork()).ldelim();
    }
    if (message.x !== 0) {
      writer.uint32(16).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(24).int32(message.y);
    }
    if (message.w !== 0) {
      writer.uint32(32).int32(message.w);
    }
    if (message.h !== 0) {
      writer.uint32(40).int32(message.h);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidEmapCamera {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidEmapCamera();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cId = VidCameraId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.x = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.y = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.w = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.h = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidEmapCamera {
    return {
      cId: isSet(object.cId) ? VidCameraId.fromJSON(object.cId) : undefined,
      x: isSet(object.x) ? globalThis.Number(object.x) : 0,
      y: isSet(object.y) ? globalThis.Number(object.y) : 0,
      w: isSet(object.w) ? globalThis.Number(object.w) : 0,
      h: isSet(object.h) ? globalThis.Number(object.h) : 0,
    };
  },

  toJSON(message: VidEmapCamera): unknown {
    const obj: any = {};
    if (message.cId !== undefined) {
      obj.cId = VidCameraId.toJSON(message.cId);
    }
    if (message.x !== 0) {
      obj.x = Math.round(message.x);
    }
    if (message.y !== 0) {
      obj.y = Math.round(message.y);
    }
    if (message.w !== 0) {
      obj.w = Math.round(message.w);
    }
    if (message.h !== 0) {
      obj.h = Math.round(message.h);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidEmapCamera>, I>>(
    base?: I,
  ): VidEmapCamera {
    return VidEmapCamera.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidEmapCamera>, I>>(
    object: I,
  ): VidEmapCamera {
    const message = createBaseVidEmapCamera();
    message.cId =
      object.cId !== undefined && object.cId !== null
        ? VidCameraId.fromPartial(object.cId)
        : undefined;
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.w = object.w ?? 0;
    message.h = object.h ?? 0;
    return message;
  },
};

function createBaseVidEmap(): VidEmap {
  return { strId: "", strName: "", cCamera: [] };
}

export const VidEmap = {
  encode(
    message: VidEmap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.strName !== "") {
      writer.uint32(18).string(message.strName);
    }
    for (const v of message.cCamera) {
      VidEmapCamera.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidEmap {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidEmap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cCamera.push(VidEmapCamera.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidEmap {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strName: isSet(object.strName) ? globalThis.String(object.strName) : "",
      cCamera: globalThis.Array.isArray(object?.cCamera)
        ? object.cCamera.map((e: any) => VidEmapCamera.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidEmap): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strName !== "") {
      obj.strName = message.strName;
    }
    if (message.cCamera?.length) {
      obj.cCamera = message.cCamera.map((e) => VidEmapCamera.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidEmap>, I>>(base?: I): VidEmap {
    return VidEmap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidEmap>, I>>(object: I): VidEmap {
    const message = createBaseVidEmap();
    message.strId = object.strId ?? "";
    message.strName = object.strName ?? "";
    message.cCamera =
      object.cCamera?.map((e) => VidEmapCamera.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidEmapList(): VidEmapList {
  return { cVidEmap: [] };
}

export const VidEmapList = {
  encode(
    message: VidEmapList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidEmap) {
      VidEmap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidEmapList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidEmapList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidEmap.push(VidEmap.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidEmapList {
    return {
      cVidEmap: globalThis.Array.isArray(object?.cVidEmap)
        ? object.cVidEmap.map((e: any) => VidEmap.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidEmapList): unknown {
    const obj: any = {};
    if (message.cVidEmap?.length) {
      obj.cVidEmap = message.cVidEmap.map((e) => VidEmap.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidEmapList>, I>>(base?: I): VidEmapList {
    return VidEmapList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidEmapList>, I>>(
    object: I,
  ): VidEmapList {
    const message = createBaseVidEmapList();
    message.cVidEmap =
      object.cVidEmap?.map((e) => VidEmap.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidStream(): VidStream {
  return { strToken: "", strName: "" };
}

export const VidStream = {
  encode(
    message: VidStream,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strToken !== "") {
      writer.uint32(10).string(message.strToken);
    }
    if (message.strName !== "") {
      writer.uint32(18).string(message.strName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidStream {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidStream {
    return {
      strToken: isSet(object.strToken)
        ? globalThis.String(object.strToken)
        : "",
      strName: isSet(object.strName) ? globalThis.String(object.strName) : "",
    };
  },

  toJSON(message: VidStream): unknown {
    const obj: any = {};
    if (message.strToken !== "") {
      obj.strToken = message.strToken;
    }
    if (message.strName !== "") {
      obj.strName = message.strName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidStream>, I>>(base?: I): VidStream {
    return VidStream.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidStream>, I>>(
    object: I,
  ): VidStream {
    const message = createBaseVidStream();
    message.strToken = object.strToken ?? "";
    message.strName = object.strName ?? "";
    return message;
  },
};

function createBaseVidStreamList(): VidStreamList {
  return { cVidStream: [] };
}

export const VidStreamList = {
  encode(
    message: VidStreamList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidStream) {
      VidStream.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidStreamList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidStreamList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidStream.push(VidStream.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidStreamList {
    return {
      cVidStream: globalThis.Array.isArray(object?.cVidStream)
        ? object.cVidStream.map((e: any) => VidStream.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidStreamList): unknown {
    const obj: any = {};
    if (message.cVidStream?.length) {
      obj.cVidStream = message.cVidStream.map((e) => VidStream.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidStreamList>, I>>(
    base?: I,
  ): VidStreamList {
    return VidStreamList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidStreamList>, I>>(
    object: I,
  ): VidStreamList {
    const message = createBaseVidStreamList();
    message.cVidStream =
      object.cVidStream?.map((e) => VidStream.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidBlob(): VidBlob {
  return { x0: 0, y0: 0, x1: 0, y1: 0 };
}

export const VidBlob = {
  encode(
    message: VidBlob,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x0 !== 0) {
      writer.uint32(8).int32(message.x0);
    }
    if (message.y0 !== 0) {
      writer.uint32(16).int32(message.y0);
    }
    if (message.x1 !== 0) {
      writer.uint32(24).int32(message.x1);
    }
    if (message.y1 !== 0) {
      writer.uint32(32).int32(message.y1);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidBlob {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidBlob();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.x0 = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.y0 = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.x1 = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.y1 = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidBlob {
    return {
      x0: isSet(object.x0) ? globalThis.Number(object.x0) : 0,
      y0: isSet(object.y0) ? globalThis.Number(object.y0) : 0,
      x1: isSet(object.x1) ? globalThis.Number(object.x1) : 0,
      y1: isSet(object.y1) ? globalThis.Number(object.y1) : 0,
    };
  },

  toJSON(message: VidBlob): unknown {
    const obj: any = {};
    if (message.x0 !== 0) {
      obj.x0 = Math.round(message.x0);
    }
    if (message.y0 !== 0) {
      obj.y0 = Math.round(message.y0);
    }
    if (message.x1 !== 0) {
      obj.x1 = Math.round(message.x1);
    }
    if (message.y1 !== 0) {
      obj.y1 = Math.round(message.y1);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidBlob>, I>>(base?: I): VidBlob {
    return VidBlob.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidBlob>, I>>(object: I): VidBlob {
    const message = createBaseVidBlob();
    message.x0 = object.x0 ?? 0;
    message.y0 = object.y0 ?? 0;
    message.x1 = object.x1 ?? 0;
    message.y1 = object.y1 ?? 0;
    return message;
  },
};

function createBaseVidBlobList(): VidBlobList {
  return { cBlob: [] };
}

export const VidBlobList = {
  encode(
    message: VidBlobList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cBlob) {
      VidBlob.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidBlobList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidBlobList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cBlob.push(VidBlob.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidBlobList {
    return {
      cBlob: globalThis.Array.isArray(object?.cBlob)
        ? object.cBlob.map((e: any) => VidBlob.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidBlobList): unknown {
    const obj: any = {};
    if (message.cBlob?.length) {
      obj.cBlob = message.cBlob.map((e) => VidBlob.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidBlobList>, I>>(base?: I): VidBlobList {
    return VidBlobList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidBlobList>, I>>(
    object: I,
  ): VidBlobList {
    const message = createBaseVidBlobList();
    message.cBlob = object.cBlob?.map((e) => VidBlob.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidEventDBConf(): VidEventDBConf {
  return { nType: 0, strDBPath: "" };
}

export const VidEventDBConf = {
  encode(
    message: VidEventDBConf,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nType !== 0) {
      writer.uint32(8).int32(message.nType);
    }
    if (message.strDBPath !== "") {
      writer.uint32(18).string(message.strDBPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidEventDBConf {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidEventDBConf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strDBPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidEventDBConf {
    return {
      nType: isSet(object.nType) ? vidEventDBTypeFromJSON(object.nType) : 0,
      strDBPath: isSet(object.strDBPath)
        ? globalThis.String(object.strDBPath)
        : "",
    };
  },

  toJSON(message: VidEventDBConf): unknown {
    const obj: any = {};
    if (message.nType !== 0) {
      obj.nType = vidEventDBTypeToJSON(message.nType);
    }
    if (message.strDBPath !== "") {
      obj.strDBPath = message.strDBPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidEventDBConf>, I>>(
    base?: I,
  ): VidEventDBConf {
    return VidEventDBConf.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidEventDBConf>, I>>(
    object: I,
  ): VidEventDBConf {
    const message = createBaseVidEventDBConf();
    message.nType = object.nType ?? 0;
    message.strDBPath = object.strDBPath ?? "";
    return message;
  },
};

function createBaseVidEvent(): VidEvent {
  return {
    strId: "",
    strDevice: "",
    strDeviceName: "",
    strType: "",
    nTime: 0,
    strTime: "",
    strDesc: "",
    bHandled: false,
    bSearched: false,
    strComments: "",
    strStorId: "",
    strStorName: "",
    nIdx: 0,
  };
}

export const VidEvent = {
  encode(
    message: VidEvent,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.strDevice !== "") {
      writer.uint32(18).string(message.strDevice);
    }
    if (message.strDeviceName !== "") {
      writer.uint32(26).string(message.strDeviceName);
    }
    if (message.strType !== "") {
      writer.uint32(34).string(message.strType);
    }
    if (message.nTime !== 0) {
      writer.uint32(40).int64(message.nTime);
    }
    if (message.strTime !== "") {
      writer.uint32(50).string(message.strTime);
    }
    if (message.strDesc !== "") {
      writer.uint32(58).string(message.strDesc);
    }
    if (message.bHandled === true) {
      writer.uint32(64).bool(message.bHandled);
    }
    if (message.bSearched === true) {
      writer.uint32(72).bool(message.bSearched);
    }
    if (message.strComments !== "") {
      writer.uint32(82).string(message.strComments);
    }
    if (message.strStorId !== "") {
      writer.uint32(90).string(message.strStorId);
    }
    if (message.strStorName !== "") {
      writer.uint32(98).string(message.strStorName);
    }
    if (message.nIdx !== 0) {
      writer.uint32(104).int64(message.nIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidEvent {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strDevice = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.strDeviceName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.strType = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.nTime = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.strTime = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.strDesc = reader.string();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.bHandled = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.bSearched = reader.bool();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.strComments = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.strStorId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.strStorName = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.nIdx = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidEvent {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      strDevice: isSet(object.strDevice)
        ? globalThis.String(object.strDevice)
        : "",
      strDeviceName: isSet(object.strDeviceName)
        ? globalThis.String(object.strDeviceName)
        : "",
      strType: isSet(object.strType) ? globalThis.String(object.strType) : "",
      nTime: isSet(object.nTime) ? globalThis.Number(object.nTime) : 0,
      strTime: isSet(object.strTime) ? globalThis.String(object.strTime) : "",
      strDesc: isSet(object.strDesc) ? globalThis.String(object.strDesc) : "",
      bHandled: isSet(object.bHandled)
        ? globalThis.Boolean(object.bHandled)
        : false,
      bSearched: isSet(object.bSearched)
        ? globalThis.Boolean(object.bSearched)
        : false,
      strComments: isSet(object.strComments)
        ? globalThis.String(object.strComments)
        : "",
      strStorId: isSet(object.strStorId)
        ? globalThis.String(object.strStorId)
        : "",
      strStorName: isSet(object.strStorName)
        ? globalThis.String(object.strStorName)
        : "",
      nIdx: isSet(object.nIdx) ? globalThis.Number(object.nIdx) : 0,
    };
  },

  toJSON(message: VidEvent): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.strDevice !== "") {
      obj.strDevice = message.strDevice;
    }
    if (message.strDeviceName !== "") {
      obj.strDeviceName = message.strDeviceName;
    }
    if (message.strType !== "") {
      obj.strType = message.strType;
    }
    if (message.nTime !== 0) {
      obj.nTime = Math.round(message.nTime);
    }
    if (message.strTime !== "") {
      obj.strTime = message.strTime;
    }
    if (message.strDesc !== "") {
      obj.strDesc = message.strDesc;
    }
    if (message.bHandled === true) {
      obj.bHandled = message.bHandled;
    }
    if (message.bSearched === true) {
      obj.bSearched = message.bSearched;
    }
    if (message.strComments !== "") {
      obj.strComments = message.strComments;
    }
    if (message.strStorId !== "") {
      obj.strStorId = message.strStorId;
    }
    if (message.strStorName !== "") {
      obj.strStorName = message.strStorName;
    }
    if (message.nIdx !== 0) {
      obj.nIdx = Math.round(message.nIdx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidEvent>, I>>(base?: I): VidEvent {
    return VidEvent.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidEvent>, I>>(object: I): VidEvent {
    const message = createBaseVidEvent();
    message.strId = object.strId ?? "";
    message.strDevice = object.strDevice ?? "";
    message.strDeviceName = object.strDeviceName ?? "";
    message.strType = object.strType ?? "";
    message.nTime = object.nTime ?? 0;
    message.strTime = object.strTime ?? "";
    message.strDesc = object.strDesc ?? "";
    message.bHandled = object.bHandled ?? false;
    message.bSearched = object.bSearched ?? false;
    message.strComments = object.strComments ?? "";
    message.strStorId = object.strStorId ?? "";
    message.strStorName = object.strStorName ?? "";
    message.nIdx = object.nIdx ?? 0;
    return message;
  },
};

function createBaseVidStreamUrl(): VidStreamUrl {
  return { strProtocol: "", strUrl: "" };
}

export const VidStreamUrl = {
  encode(
    message: VidStreamUrl,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strProtocol !== "") {
      writer.uint32(10).string(message.strProtocol);
    }
    if (message.strUrl !== "") {
      writer.uint32(18).string(message.strUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidStreamUrl {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidStreamUrl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strProtocol = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidStreamUrl {
    return {
      strProtocol: isSet(object.strProtocol)
        ? globalThis.String(object.strProtocol)
        : "",
      strUrl: isSet(object.strUrl) ? globalThis.String(object.strUrl) : "",
    };
  },

  toJSON(message: VidStreamUrl): unknown {
    const obj: any = {};
    if (message.strProtocol !== "") {
      obj.strProtocol = message.strProtocol;
    }
    if (message.strUrl !== "") {
      obj.strUrl = message.strUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidStreamUrl>, I>>(
    base?: I,
  ): VidStreamUrl {
    return VidStreamUrl.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidStreamUrl>, I>>(
    object: I,
  ): VidStreamUrl {
    const message = createBaseVidStreamUrl();
    message.strProtocol = object.strProtocol ?? "";
    message.strUrl = object.strUrl ?? "";
    return message;
  },
};

function createBaseVidStreamUrlList(): VidStreamUrlList {
  return { cUrl: [] };
}

export const VidStreamUrlList = {
  encode(
    message: VidStreamUrlList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cUrl) {
      VidStreamUrl.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidStreamUrlList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidStreamUrlList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cUrl.push(VidStreamUrl.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidStreamUrlList {
    return {
      cUrl: globalThis.Array.isArray(object?.cUrl)
        ? object.cUrl.map((e: any) => VidStreamUrl.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidStreamUrlList): unknown {
    const obj: any = {};
    if (message.cUrl?.length) {
      obj.cUrl = message.cUrl.map((e) => VidStreamUrl.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidStreamUrlList>, I>>(
    base?: I,
  ): VidStreamUrlList {
    return VidStreamUrlList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidStreamUrlList>, I>>(
    object: I,
  ): VidStreamUrlList {
    const message = createBaseVidStreamUrlList();
    message.cUrl = object.cUrl?.map((e) => VidStreamUrl.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVidSocket(): VidSocket {
  return { strid: "", strIp: "", nConnectType: 0, nDataLen: 0, nFps: 0 };
}

export const VidSocket = {
  encode(
    message: VidSocket,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strid !== "") {
      writer.uint32(10).string(message.strid);
    }
    if (message.strIp !== "") {
      writer.uint32(18).string(message.strIp);
    }
    if (message.nConnectType !== 0) {
      writer.uint32(24).int32(message.nConnectType);
    }
    if (message.nDataLen !== 0) {
      writer.uint32(32).int64(message.nDataLen);
    }
    if (message.nFps !== 0) {
      writer.uint32(40).int32(message.nFps);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidSocket {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidSocket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strIp = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nConnectType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nDataLen = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.nFps = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidSocket {
    return {
      strid: isSet(object.strid) ? globalThis.String(object.strid) : "",
      strIp: isSet(object.strIp) ? globalThis.String(object.strIp) : "",
      nConnectType: isSet(object.nConnectType)
        ? socketConnectTypeFromJSON(object.nConnectType)
        : 0,
      nDataLen: isSet(object.nDataLen) ? globalThis.Number(object.nDataLen) : 0,
      nFps: isSet(object.nFps) ? globalThis.Number(object.nFps) : 0,
    };
  },

  toJSON(message: VidSocket): unknown {
    const obj: any = {};
    if (message.strid !== "") {
      obj.strid = message.strid;
    }
    if (message.strIp !== "") {
      obj.strIp = message.strIp;
    }
    if (message.nConnectType !== 0) {
      obj.nConnectType = socketConnectTypeToJSON(message.nConnectType);
    }
    if (message.nDataLen !== 0) {
      obj.nDataLen = Math.round(message.nDataLen);
    }
    if (message.nFps !== 0) {
      obj.nFps = Math.round(message.nFps);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidSocket>, I>>(base?: I): VidSocket {
    return VidSocket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidSocket>, I>>(
    object: I,
  ): VidSocket {
    const message = createBaseVidSocket();
    message.strid = object.strid ?? "";
    message.strIp = object.strIp ?? "";
    message.nConnectType = object.nConnectType ?? 0;
    message.nDataLen = object.nDataLen ?? 0;
    message.nFps = object.nFps ?? 0;
    return message;
  },
};

function createBaseVidSocketList(): VidSocketList {
  return { cVidSocket: [] };
}

export const VidSocketList = {
  encode(
    message: VidSocketList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cVidSocket) {
      VidSocket.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VidSocketList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVidSocketList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cVidSocket.push(VidSocket.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VidSocketList {
    return {
      cVidSocket: globalThis.Array.isArray(object?.cVidSocket)
        ? object.cVidSocket.map((e: any) => VidSocket.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VidSocketList): unknown {
    const obj: any = {};
    if (message.cVidSocket?.length) {
      obj.cVidSocket = message.cVidSocket.map((e) => VidSocket.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VidSocketList>, I>>(
    base?: I,
  ): VidSocketList {
    return VidSocketList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VidSocketList>, I>>(
    object: I,
  ): VidSocketList {
    const message = createBaseVidSocketList();
    message.cVidSocket =
      object.cVidSocket?.map((e) => VidSocket.fromPartial(e)) || [];
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
