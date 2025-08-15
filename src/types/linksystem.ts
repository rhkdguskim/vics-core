/* eslint-disable */
import * as _m0 from "protobufjs/minimal.js";
import {
  SocketConnectType,
  socketConnectTypeFromJSON,
  socketConnectTypeToJSON,
  VidCamera,
  VidCameraList,
  VidDisk,
  VidDiskList,
  VidEvent,
  VidSocket,
  VidSocketList,
  VidStreamList,
} from "./vidconf";
import Long from "long";

export const protobufPackage = "";

export interface LinkLoginReq {
  strUserName: string;
  strPasswd: string;
}

export interface LinkLoginResp {
  strNonce: string;
  bRetNonce: boolean;
  bRet: boolean;
}

export interface LinkKeepaliveReq {
  nKeepalive: number;
}

export interface LinkKeepaliveResp {
  nKeepalive: number;
}

export interface LinkRegNotifyReq {
  strFake: string;
}

export interface LinkRegNotifyResp {
  bSuccess: boolean;
}

/** MIRERO // -1 �ΰ��, �ܼ� ��ȸ */
export interface LinkSetLogLevelReq {
  nLevel: number;
}

/** ���д� -1 */
export interface LinkSetLogLevelResp {
  nLevel: number;
}

/** Camera */
export interface LinkListCamReq {
  bAll: boolean;
}

export interface LinkListCamResp {
  cList: VidCameraList | undefined;
}

export interface LinkCamReq {
  strId: string;
}

export interface LinkCamResp {
  cCam: VidCamera | undefined;
}

export interface LinkAddCamReq {
  cCam: VidCamera | undefined;
}

export interface LinkAddCamResp {
  bSuccess: boolean;
}

export interface LinkDelCamReq {
  strId: string;
}

export interface LinkDelCamResp {
  bSuccess: boolean;
}

export interface LinkSetCamSchedReq {
  cCam: VidCamera | undefined;
}

export interface LinkSetCamSchedResp {
  bSuccess: boolean;
}

export interface LinkGetStreamListReq {
  strId: string;
}

export interface LinkGetStreamListResp {
  cList: VidStreamList | undefined;
}

/** Disk */
export interface LinkVidDiskListReq {
  bAll: boolean;
}

export interface LinkVidDiskListResp {
  cDisk: VidDiskList | undefined;
}

export interface LinkSysVidDiskListReq {
  bAll: boolean;
}

export interface LinkSysVidDiskListResp {
  cDisk: VidDiskList | undefined;
}

export interface LinkAddDiskReq {
  cDisk: VidDisk | undefined;
}

export interface LinkAddDiskResp {
  bSuccess: boolean;
}

export interface LinkDelDiskReq {
  strId: string;
}

export interface LinkDelDiskResp {
  bSuccess: boolean;
}

export interface LinkUpdateDiskLimitReq {
  strId: string;
  nLimit: number;
}

export interface LinkUpdateDiskLimitResp {
  bSuccess: boolean;
}

/** License & Version */
export interface LinkGetLicReq {
  strFake: string;
}

export interface LinkGetLicResp {
  strLic: string;
  strHostId: string;
  nCh: number;
  strType: string;
  strStartTime: string;
  strExpireTime: string;
}

export interface LinkGetVerReq {
  strFake: string;
}

export interface LinkGetVerResp {
  strVer: string;
  strInfo: string;
}

export interface LinkConfLicReq {
  strLic: string;
}

export interface LinkConfLicResp {
  bSuccess: boolean;
}

/** User Add Del */
export interface LinkAddUserReq {
  strUser: string;
  strPasswd: string;
  /** Role of the user */
  stroldPasswd: string;
}

export interface LinkAddUserResp {
  bSuccess: boolean;
}

/** Search */
export interface LinkHasRecordItem {
  nId: number;
  nStart: number;
  nEnd: number;
  nType: number;
  bHas: boolean;
}

export interface LinkHasRecordList {
  cHasRec: LinkHasRecordItem[];
}

export interface LinkHasRecordReq {
  strId: string;
  cList: LinkHasRecordList | undefined;
}

export interface LinkHasRecordResp {
  cList: LinkHasRecordList | undefined;
}

export interface LinkRecordItem {
  nId: number;
  nStart: number;
  nEnd: number;
  nType: number;
}

export interface LinkRecordList {
  cList: LinkRecordItem[];
}

export interface LinkSearchRecordReq {
  strId: string;
  nStart: number;
  nEnd: number;
  nType: number;
}

export interface LinkSearchRecordResp {
  strId: string;
  cList: LinkRecordList | undefined;
}

/** Stream, Stream is one way command from client to server */
export interface LinkStartLiveCmd {
  strId: string;
  nStream: number;
}

export interface LinkStopLiveCmd {
  strId: string;
  nStream: number;
}

export interface LinkPlayBackCmd {
  strId: string;
  nPlaytime: number;
}

export interface LinkPlayPauseCmd {
  strId: string;
}

export interface LinkPlayResumeCmd {
  strId: string;
}

export interface LinkPlaySeekCmd {
  strId: string;
  nPlaytime: number;
}

export interface LinkPlayStopCmd {
  strId: string;
}

export interface LinkPlaySpeedCmd {
  strId: string;
  fSpeed: number;
}

export interface LinkPlayNextFrameCmd {
  strId: string;
}

export interface LinkPlayPreFrameCmd {
  strId: string;
}

/** NewMiStream */
export interface LinkMiVideoData {
  struuid: string;
  strdatabuf: string;
  dataLen: number;
  bufLen: number;
  streamType: number;
  frameType: number;
  secs: number;
  msecs: number;
}

export interface LinkMiStartLiveCmd {
  strId: string;
  nStream: number;
  struuid: string;
}

export interface LinkMiStopLiveCmd {
  struuid: string;
}

export interface LinkMiPlayBackCmd {
  strId: string;
  nPlaytime: number;
  struuid: string;
}

export interface LinkMiPlayPauseCmd {
  struuid: string;
}

export interface LinkMiPlayResumeCmd {
  struuid: string;
}

export interface LinkMiPlaySeekCmd {
  struuid: string;
  nPlaytime: number;
}

export interface LinkMiPlayStopCmd {
  struuid: string;
}

export interface LinkMiPlaySpeedCmd {
  struuid: string;
  fSpeed: number;
}

export interface LinkMiPlayNextFrameCmd {
  struuid: string;
}

export interface LinkMiPlayPreFrameCmd {
  struuid: string;
}

export interface LinkMiChangeStreamCmd {
  strId: string;
  nStream: number;
  struuid: string;
}

/** PTZ Command */
export interface LinkPtzCmd {
  strId: string;
  nAction: number;
  nParam: number;
}

/** Camera Search & Event Search */
export interface LinkCamSearchStartReq {
  strFake: string;
}

export interface LinkCamSearchStartResp {
  bSuccess: boolean;
}

export interface LinkCamSearchStopReq {
  strFake: string;
}

export interface LinkCamSearchStopResp {
  bSuccess: boolean;
}

export interface LinkRegEventReq {
  strId: string;
}

export interface LinkRegEventResp {
  bSuccess: boolean;
}

export interface LinkUnRegEventReq {
  strId: string;
}

export interface LinkUnRegEventResp {
  bSuccess: boolean;
}

export interface LinkEventSearchReq {
  strId: string;
  nStart: number;
  nEnd: number;
}

export interface LinkEventSearchResp {
  bSuccess: boolean;
}

export interface LinkHandleEventReq {
  strId: string;
}

export interface LinkHandleEventResp {
  bSuccess: boolean;
}

/** Notify */
export interface LinkCamAddNotify {
  cCam: VidCamera | undefined;
}

export interface LinkCamIdNotify {
  strId: string;
}

export interface LinkCamSearchedNotify {
  strIp: string;
  strPort: string;
  strModel: string;
  strONVIFAddress: string;
}

export interface LinkEventNotify {
  cEvent: VidEvent | undefined;
}

export interface LinkRegSocketNotifyReq {
  strFake: string;
}

export interface LinkRegSocketNotifyResp {
  bSuccess: boolean;
}

export interface LinkVidSocketCntReq {
  nClientCnt: number;
  nStreamCnt: number;
}

export interface LinkVidSocketCntResp {
  bSuccess: boolean;
}

export interface LinkVidSocketListReq {
  bSuccess: boolean;
}

export interface LinkVidSocketListResp {
  cSocketList: VidSocketList | undefined;
  bUserFull: boolean;
  bAdminFull: boolean;
}

export interface LinkSocketAddNotify {
  cSocket: VidSocket | undefined;
}

export interface LinkSocketDelNotify {
  cSocket: VidSocket | undefined;
}

export interface LinkSocketEmptyNotify {
  bSuccess: boolean;
  nConnectType: SocketConnectType;
}

export interface LinkSocketFullNotify {
  bSuccess: boolean;
  nConnectType: SocketConnectType;
}

export interface LinkSocketSetSocketReq {
  nConnectType: SocketConnectType;
}

export interface LinkSocketSetSocketResp {
  bSuccess: boolean;
}

function createBaseLinkLoginReq(): LinkLoginReq {
  return { strUserName: "", strPasswd: "" };
}

export const LinkLoginReq = {
  encode(
    message: LinkLoginReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strUserName !== "") {
      writer.uint32(10).string(message.strUserName);
    }
    if (message.strPasswd !== "") {
      writer.uint32(18).string(message.strPasswd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkLoginReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkLoginReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strUserName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): LinkLoginReq {
    return {
      strUserName: isSet(object.strUserName)
        ? globalThis.String(object.strUserName)
        : "",
      strPasswd: isSet(object.strPasswd)
        ? globalThis.String(object.strPasswd)
        : "",
    };
  },

  toJSON(message: LinkLoginReq): unknown {
    const obj: any = {};
    if (message.strUserName !== "") {
      obj.strUserName = message.strUserName;
    }
    if (message.strPasswd !== "") {
      obj.strPasswd = message.strPasswd;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkLoginReq>, I>>(
    base?: I,
  ): LinkLoginReq {
    return LinkLoginReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkLoginReq>, I>>(
    object: I,
  ): LinkLoginReq {
    const message = createBaseLinkLoginReq();
    message.strUserName = object.strUserName ?? "";
    message.strPasswd = object.strPasswd ?? "";
    return message;
  },
};

function createBaseLinkLoginResp(): LinkLoginResp {
  return { strNonce: "", bRetNonce: false, bRet: false };
}

export const LinkLoginResp = {
  encode(
    message: LinkLoginResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strNonce !== "") {
      writer.uint32(10).string(message.strNonce);
    }
    if (message.bRetNonce === true) {
      writer.uint32(16).bool(message.bRetNonce);
    }
    if (message.bRet === true) {
      writer.uint32(24).bool(message.bRet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkLoginResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkLoginResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strNonce = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bRetNonce = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bRet = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkLoginResp {
    return {
      strNonce: isSet(object.strNonce)
        ? globalThis.String(object.strNonce)
        : "",
      bRetNonce: isSet(object.bRetNonce)
        ? globalThis.Boolean(object.bRetNonce)
        : false,
      bRet: isSet(object.bRet) ? globalThis.Boolean(object.bRet) : false,
    };
  },

  toJSON(message: LinkLoginResp): unknown {
    const obj: any = {};
    if (message.strNonce !== "") {
      obj.strNonce = message.strNonce;
    }
    if (message.bRetNonce === true) {
      obj.bRetNonce = message.bRetNonce;
    }
    if (message.bRet === true) {
      obj.bRet = message.bRet;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkLoginResp>, I>>(
    base?: I,
  ): LinkLoginResp {
    return LinkLoginResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkLoginResp>, I>>(
    object: I,
  ): LinkLoginResp {
    const message = createBaseLinkLoginResp();
    message.strNonce = object.strNonce ?? "";
    message.bRetNonce = object.bRetNonce ?? false;
    message.bRet = object.bRet ?? false;
    return message;
  },
};

function createBaseLinkKeepaliveReq(): LinkKeepaliveReq {
  return { nKeepalive: 0 };
}

export const LinkKeepaliveReq = {
  encode(
    message: LinkKeepaliveReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nKeepalive !== 0) {
      writer.uint32(8).int32(message.nKeepalive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkKeepaliveReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkKeepaliveReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nKeepalive = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkKeepaliveReq {
    return {
      nKeepalive: isSet(object.nKeepalive)
        ? globalThis.Number(object.nKeepalive)
        : 0,
    };
  },

  toJSON(message: LinkKeepaliveReq): unknown {
    const obj: any = {};
    if (message.nKeepalive !== 0) {
      obj.nKeepalive = Math.round(message.nKeepalive);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkKeepaliveReq>, I>>(
    base?: I,
  ): LinkKeepaliveReq {
    return LinkKeepaliveReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkKeepaliveReq>, I>>(
    object: I,
  ): LinkKeepaliveReq {
    const message = createBaseLinkKeepaliveReq();
    message.nKeepalive = object.nKeepalive ?? 0;
    return message;
  },
};

function createBaseLinkKeepaliveResp(): LinkKeepaliveResp {
  return { nKeepalive: 0 };
}

export const LinkKeepaliveResp = {
  encode(
    message: LinkKeepaliveResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nKeepalive !== 0) {
      writer.uint32(8).int32(message.nKeepalive);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkKeepaliveResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkKeepaliveResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nKeepalive = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkKeepaliveResp {
    return {
      nKeepalive: isSet(object.nKeepalive)
        ? globalThis.Number(object.nKeepalive)
        : 0,
    };
  },

  toJSON(message: LinkKeepaliveResp): unknown {
    const obj: any = {};
    if (message.nKeepalive !== 0) {
      obj.nKeepalive = Math.round(message.nKeepalive);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkKeepaliveResp>, I>>(
    base?: I,
  ): LinkKeepaliveResp {
    return LinkKeepaliveResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkKeepaliveResp>, I>>(
    object: I,
  ): LinkKeepaliveResp {
    const message = createBaseLinkKeepaliveResp();
    message.nKeepalive = object.nKeepalive ?? 0;
    return message;
  },
};

function createBaseLinkRegNotifyReq(): LinkRegNotifyReq {
  return { strFake: "" };
}

export const LinkRegNotifyReq = {
  encode(
    message: LinkRegNotifyReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strFake !== "") {
      writer.uint32(10).string(message.strFake);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRegNotifyReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRegNotifyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strFake = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkRegNotifyReq {
    return {
      strFake: isSet(object.strFake) ? globalThis.String(object.strFake) : "",
    };
  },

  toJSON(message: LinkRegNotifyReq): unknown {
    const obj: any = {};
    if (message.strFake !== "") {
      obj.strFake = message.strFake;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkRegNotifyReq>, I>>(
    base?: I,
  ): LinkRegNotifyReq {
    return LinkRegNotifyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkRegNotifyReq>, I>>(
    object: I,
  ): LinkRegNotifyReq {
    const message = createBaseLinkRegNotifyReq();
    message.strFake = object.strFake ?? "";
    return message;
  },
};

function createBaseLinkRegNotifyResp(): LinkRegNotifyResp {
  return { bSuccess: false };
}

export const LinkRegNotifyResp = {
  encode(
    message: LinkRegNotifyResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRegNotifyResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRegNotifyResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkRegNotifyResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkRegNotifyResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkRegNotifyResp>, I>>(
    base?: I,
  ): LinkRegNotifyResp {
    return LinkRegNotifyResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkRegNotifyResp>, I>>(
    object: I,
  ): LinkRegNotifyResp {
    const message = createBaseLinkRegNotifyResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkSetLogLevelReq(): LinkSetLogLevelReq {
  return { nLevel: 0 };
}

export const LinkSetLogLevelReq = {
  encode(
    message: LinkSetLogLevelReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nLevel !== 0) {
      writer.uint32(8).int32(message.nLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkSetLogLevelReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSetLogLevelReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nLevel = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSetLogLevelReq {
    return {
      nLevel: isSet(object.nLevel) ? globalThis.Number(object.nLevel) : 0,
    };
  },

  toJSON(message: LinkSetLogLevelReq): unknown {
    const obj: any = {};
    if (message.nLevel !== 0) {
      obj.nLevel = Math.round(message.nLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSetLogLevelReq>, I>>(
    base?: I,
  ): LinkSetLogLevelReq {
    return LinkSetLogLevelReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSetLogLevelReq>, I>>(
    object: I,
  ): LinkSetLogLevelReq {
    const message = createBaseLinkSetLogLevelReq();
    message.nLevel = object.nLevel ?? 0;
    return message;
  },
};

function createBaseLinkSetLogLevelResp(): LinkSetLogLevelResp {
  return { nLevel: 0 };
}

export const LinkSetLogLevelResp = {
  encode(
    message: LinkSetLogLevelResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nLevel !== 0) {
      writer.uint32(8).int32(message.nLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkSetLogLevelResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSetLogLevelResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nLevel = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSetLogLevelResp {
    return {
      nLevel: isSet(object.nLevel) ? globalThis.Number(object.nLevel) : 0,
    };
  },

  toJSON(message: LinkSetLogLevelResp): unknown {
    const obj: any = {};
    if (message.nLevel !== 0) {
      obj.nLevel = Math.round(message.nLevel);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSetLogLevelResp>, I>>(
    base?: I,
  ): LinkSetLogLevelResp {
    return LinkSetLogLevelResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSetLogLevelResp>, I>>(
    object: I,
  ): LinkSetLogLevelResp {
    const message = createBaseLinkSetLogLevelResp();
    message.nLevel = object.nLevel ?? 0;
    return message;
  },
};

function createBaseLinkListCamReq(): LinkListCamReq {
  return { bAll: false };
}

export const LinkListCamReq = {
  encode(
    message: LinkListCamReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bAll === true) {
      writer.uint32(8).bool(message.bAll);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkListCamReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkListCamReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bAll = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkListCamReq {
    return {
      bAll: isSet(object.bAll) ? globalThis.Boolean(object.bAll) : false,
    };
  },

  toJSON(message: LinkListCamReq): unknown {
    const obj: any = {};
    if (message.bAll === true) {
      obj.bAll = message.bAll;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkListCamReq>, I>>(
    base?: I,
  ): LinkListCamReq {
    return LinkListCamReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkListCamReq>, I>>(
    object: I,
  ): LinkListCamReq {
    const message = createBaseLinkListCamReq();
    message.bAll = object.bAll ?? false;
    return message;
  },
};

function createBaseLinkListCamResp(): LinkListCamResp {
  return { cList: undefined };
}

export const LinkListCamResp = {
  encode(
    message: LinkListCamResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cList !== undefined) {
      VidCameraList.encode(message.cList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkListCamResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkListCamResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cList = VidCameraList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkListCamResp {
    return {
      cList: isSet(object.cList)
        ? VidCameraList.fromJSON(object.cList)
        : undefined,
    };
  },

  toJSON(message: LinkListCamResp): unknown {
    const obj: any = {};
    if (message.cList !== undefined) {
      obj.cList = VidCameraList.toJSON(message.cList);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkListCamResp>, I>>(
    base?: I,
  ): LinkListCamResp {
    return LinkListCamResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkListCamResp>, I>>(
    object: I,
  ): LinkListCamResp {
    const message = createBaseLinkListCamResp();
    message.cList =
      object.cList !== undefined && object.cList !== null
        ? VidCameraList.fromPartial(object.cList)
        : undefined;
    return message;
  },
};

function createBaseLinkCamReq(): LinkCamReq {
  return { strId: "" };
}

export const LinkCamReq = {
  encode(
    message: LinkCamReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkCamReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkCamReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamReq>, I>>(base?: I): LinkCamReq {
    return LinkCamReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamReq>, I>>(
    object: I,
  ): LinkCamReq {
    const message = createBaseLinkCamReq();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkCamResp(): LinkCamResp {
  return { cCam: undefined };
}

export const LinkCamResp = {
  encode(
    message: LinkCamResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cCam !== undefined) {
      VidCamera.encode(message.cCam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkCamResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cCam = VidCamera.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamResp {
    return {
      cCam: isSet(object.cCam) ? VidCamera.fromJSON(object.cCam) : undefined,
    };
  },

  toJSON(message: LinkCamResp): unknown {
    const obj: any = {};
    if (message.cCam !== undefined) {
      obj.cCam = VidCamera.toJSON(message.cCam);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamResp>, I>>(base?: I): LinkCamResp {
    return LinkCamResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamResp>, I>>(
    object: I,
  ): LinkCamResp {
    const message = createBaseLinkCamResp();
    message.cCam =
      object.cCam !== undefined && object.cCam !== null
        ? VidCamera.fromPartial(object.cCam)
        : undefined;
    return message;
  },
};

function createBaseLinkAddCamReq(): LinkAddCamReq {
  return { cCam: undefined };
}

export const LinkAddCamReq = {
  encode(
    message: LinkAddCamReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cCam !== undefined) {
      VidCamera.encode(message.cCam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkAddCamReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkAddCamReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cCam = VidCamera.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkAddCamReq {
    return {
      cCam: isSet(object.cCam) ? VidCamera.fromJSON(object.cCam) : undefined,
    };
  },

  toJSON(message: LinkAddCamReq): unknown {
    const obj: any = {};
    if (message.cCam !== undefined) {
      obj.cCam = VidCamera.toJSON(message.cCam);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkAddCamReq>, I>>(
    base?: I,
  ): LinkAddCamReq {
    return LinkAddCamReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkAddCamReq>, I>>(
    object: I,
  ): LinkAddCamReq {
    const message = createBaseLinkAddCamReq();
    message.cCam =
      object.cCam !== undefined && object.cCam !== null
        ? VidCamera.fromPartial(object.cCam)
        : undefined;
    return message;
  },
};

function createBaseLinkAddCamResp(): LinkAddCamResp {
  return { bSuccess: false };
}

export const LinkAddCamResp = {
  encode(
    message: LinkAddCamResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkAddCamResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkAddCamResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkAddCamResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkAddCamResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkAddCamResp>, I>>(
    base?: I,
  ): LinkAddCamResp {
    return LinkAddCamResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkAddCamResp>, I>>(
    object: I,
  ): LinkAddCamResp {
    const message = createBaseLinkAddCamResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkDelCamReq(): LinkDelCamReq {
  return { strId: "" };
}

export const LinkDelCamReq = {
  encode(
    message: LinkDelCamReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkDelCamReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkDelCamReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkDelCamReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkDelCamReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkDelCamReq>, I>>(
    base?: I,
  ): LinkDelCamReq {
    return LinkDelCamReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkDelCamReq>, I>>(
    object: I,
  ): LinkDelCamReq {
    const message = createBaseLinkDelCamReq();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkDelCamResp(): LinkDelCamResp {
  return { bSuccess: false };
}

export const LinkDelCamResp = {
  encode(
    message: LinkDelCamResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkDelCamResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkDelCamResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkDelCamResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkDelCamResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkDelCamResp>, I>>(
    base?: I,
  ): LinkDelCamResp {
    return LinkDelCamResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkDelCamResp>, I>>(
    object: I,
  ): LinkDelCamResp {
    const message = createBaseLinkDelCamResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkSetCamSchedReq(): LinkSetCamSchedReq {
  return { cCam: undefined };
}

export const LinkSetCamSchedReq = {
  encode(
    message: LinkSetCamSchedReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cCam !== undefined) {
      VidCamera.encode(message.cCam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkSetCamSchedReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSetCamSchedReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cCam = VidCamera.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSetCamSchedReq {
    return {
      cCam: isSet(object.cCam) ? VidCamera.fromJSON(object.cCam) : undefined,
    };
  },

  toJSON(message: LinkSetCamSchedReq): unknown {
    const obj: any = {};
    if (message.cCam !== undefined) {
      obj.cCam = VidCamera.toJSON(message.cCam);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSetCamSchedReq>, I>>(
    base?: I,
  ): LinkSetCamSchedReq {
    return LinkSetCamSchedReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSetCamSchedReq>, I>>(
    object: I,
  ): LinkSetCamSchedReq {
    const message = createBaseLinkSetCamSchedReq();
    message.cCam =
      object.cCam !== undefined && object.cCam !== null
        ? VidCamera.fromPartial(object.cCam)
        : undefined;
    return message;
  },
};

function createBaseLinkSetCamSchedResp(): LinkSetCamSchedResp {
  return { bSuccess: false };
}

export const LinkSetCamSchedResp = {
  encode(
    message: LinkSetCamSchedResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkSetCamSchedResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSetCamSchedResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSetCamSchedResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkSetCamSchedResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSetCamSchedResp>, I>>(
    base?: I,
  ): LinkSetCamSchedResp {
    return LinkSetCamSchedResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSetCamSchedResp>, I>>(
    object: I,
  ): LinkSetCamSchedResp {
    const message = createBaseLinkSetCamSchedResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkGetStreamListReq(): LinkGetStreamListReq {
  return { strId: "" };
}

export const LinkGetStreamListReq = {
  encode(
    message: LinkGetStreamListReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkGetStreamListReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkGetStreamListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkGetStreamListReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkGetStreamListReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkGetStreamListReq>, I>>(
    base?: I,
  ): LinkGetStreamListReq {
    return LinkGetStreamListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkGetStreamListReq>, I>>(
    object: I,
  ): LinkGetStreamListReq {
    const message = createBaseLinkGetStreamListReq();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkGetStreamListResp(): LinkGetStreamListResp {
  return { cList: undefined };
}

export const LinkGetStreamListResp = {
  encode(
    message: LinkGetStreamListResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cList !== undefined) {
      VidStreamList.encode(message.cList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkGetStreamListResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkGetStreamListResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cList = VidStreamList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkGetStreamListResp {
    return {
      cList: isSet(object.cList)
        ? VidStreamList.fromJSON(object.cList)
        : undefined,
    };
  },

  toJSON(message: LinkGetStreamListResp): unknown {
    const obj: any = {};
    if (message.cList !== undefined) {
      obj.cList = VidStreamList.toJSON(message.cList);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkGetStreamListResp>, I>>(
    base?: I,
  ): LinkGetStreamListResp {
    return LinkGetStreamListResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkGetStreamListResp>, I>>(
    object: I,
  ): LinkGetStreamListResp {
    const message = createBaseLinkGetStreamListResp();
    message.cList =
      object.cList !== undefined && object.cList !== null
        ? VidStreamList.fromPartial(object.cList)
        : undefined;
    return message;
  },
};

function createBaseLinkVidDiskListReq(): LinkVidDiskListReq {
  return { bAll: false };
}

export const LinkVidDiskListReq = {
  encode(
    message: LinkVidDiskListReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bAll === true) {
      writer.uint32(8).bool(message.bAll);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkVidDiskListReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkVidDiskListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bAll = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkVidDiskListReq {
    return {
      bAll: isSet(object.bAll) ? globalThis.Boolean(object.bAll) : false,
    };
  },

  toJSON(message: LinkVidDiskListReq): unknown {
    const obj: any = {};
    if (message.bAll === true) {
      obj.bAll = message.bAll;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkVidDiskListReq>, I>>(
    base?: I,
  ): LinkVidDiskListReq {
    return LinkVidDiskListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkVidDiskListReq>, I>>(
    object: I,
  ): LinkVidDiskListReq {
    const message = createBaseLinkVidDiskListReq();
    message.bAll = object.bAll ?? false;
    return message;
  },
};

function createBaseLinkVidDiskListResp(): LinkVidDiskListResp {
  return { cDisk: undefined };
}

export const LinkVidDiskListResp = {
  encode(
    message: LinkVidDiskListResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cDisk !== undefined) {
      VidDiskList.encode(message.cDisk, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkVidDiskListResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkVidDiskListResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cDisk = VidDiskList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkVidDiskListResp {
    return {
      cDisk: isSet(object.cDisk)
        ? VidDiskList.fromJSON(object.cDisk)
        : undefined,
    };
  },

  toJSON(message: LinkVidDiskListResp): unknown {
    const obj: any = {};
    if (message.cDisk !== undefined) {
      obj.cDisk = VidDiskList.toJSON(message.cDisk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkVidDiskListResp>, I>>(
    base?: I,
  ): LinkVidDiskListResp {
    return LinkVidDiskListResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkVidDiskListResp>, I>>(
    object: I,
  ): LinkVidDiskListResp {
    const message = createBaseLinkVidDiskListResp();
    message.cDisk =
      object.cDisk !== undefined && object.cDisk !== null
        ? VidDiskList.fromPartial(object.cDisk)
        : undefined;
    return message;
  },
};

function createBaseLinkSysVidDiskListReq(): LinkSysVidDiskListReq {
  return { bAll: false };
}

export const LinkSysVidDiskListReq = {
  encode(
    message: LinkSysVidDiskListReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bAll === true) {
      writer.uint32(8).bool(message.bAll);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkSysVidDiskListReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSysVidDiskListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bAll = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSysVidDiskListReq {
    return {
      bAll: isSet(object.bAll) ? globalThis.Boolean(object.bAll) : false,
    };
  },

  toJSON(message: LinkSysVidDiskListReq): unknown {
    const obj: any = {};
    if (message.bAll === true) {
      obj.bAll = message.bAll;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSysVidDiskListReq>, I>>(
    base?: I,
  ): LinkSysVidDiskListReq {
    return LinkSysVidDiskListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSysVidDiskListReq>, I>>(
    object: I,
  ): LinkSysVidDiskListReq {
    const message = createBaseLinkSysVidDiskListReq();
    message.bAll = object.bAll ?? false;
    return message;
  },
};

function createBaseLinkSysVidDiskListResp(): LinkSysVidDiskListResp {
  return { cDisk: undefined };
}

export const LinkSysVidDiskListResp = {
  encode(
    message: LinkSysVidDiskListResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cDisk !== undefined) {
      VidDiskList.encode(message.cDisk, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkSysVidDiskListResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSysVidDiskListResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cDisk = VidDiskList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSysVidDiskListResp {
    return {
      cDisk: isSet(object.cDisk)
        ? VidDiskList.fromJSON(object.cDisk)
        : undefined,
    };
  },

  toJSON(message: LinkSysVidDiskListResp): unknown {
    const obj: any = {};
    if (message.cDisk !== undefined) {
      obj.cDisk = VidDiskList.toJSON(message.cDisk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSysVidDiskListResp>, I>>(
    base?: I,
  ): LinkSysVidDiskListResp {
    return LinkSysVidDiskListResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSysVidDiskListResp>, I>>(
    object: I,
  ): LinkSysVidDiskListResp {
    const message = createBaseLinkSysVidDiskListResp();
    message.cDisk =
      object.cDisk !== undefined && object.cDisk !== null
        ? VidDiskList.fromPartial(object.cDisk)
        : undefined;
    return message;
  },
};

function createBaseLinkAddDiskReq(): LinkAddDiskReq {
  return { cDisk: undefined };
}

export const LinkAddDiskReq = {
  encode(
    message: LinkAddDiskReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cDisk !== undefined) {
      VidDisk.encode(message.cDisk, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkAddDiskReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkAddDiskReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cDisk = VidDisk.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkAddDiskReq {
    return {
      cDisk: isSet(object.cDisk) ? VidDisk.fromJSON(object.cDisk) : undefined,
    };
  },

  toJSON(message: LinkAddDiskReq): unknown {
    const obj: any = {};
    if (message.cDisk !== undefined) {
      obj.cDisk = VidDisk.toJSON(message.cDisk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkAddDiskReq>, I>>(
    base?: I,
  ): LinkAddDiskReq {
    return LinkAddDiskReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkAddDiskReq>, I>>(
    object: I,
  ): LinkAddDiskReq {
    const message = createBaseLinkAddDiskReq();
    message.cDisk =
      object.cDisk !== undefined && object.cDisk !== null
        ? VidDisk.fromPartial(object.cDisk)
        : undefined;
    return message;
  },
};

function createBaseLinkAddDiskResp(): LinkAddDiskResp {
  return { bSuccess: false };
}

export const LinkAddDiskResp = {
  encode(
    message: LinkAddDiskResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkAddDiskResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkAddDiskResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkAddDiskResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkAddDiskResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkAddDiskResp>, I>>(
    base?: I,
  ): LinkAddDiskResp {
    return LinkAddDiskResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkAddDiskResp>, I>>(
    object: I,
  ): LinkAddDiskResp {
    const message = createBaseLinkAddDiskResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkDelDiskReq(): LinkDelDiskReq {
  return { strId: "" };
}

export const LinkDelDiskReq = {
  encode(
    message: LinkDelDiskReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkDelDiskReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkDelDiskReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkDelDiskReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkDelDiskReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkDelDiskReq>, I>>(
    base?: I,
  ): LinkDelDiskReq {
    return LinkDelDiskReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkDelDiskReq>, I>>(
    object: I,
  ): LinkDelDiskReq {
    const message = createBaseLinkDelDiskReq();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkDelDiskResp(): LinkDelDiskResp {
  return { bSuccess: false };
}

export const LinkDelDiskResp = {
  encode(
    message: LinkDelDiskResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkDelDiskResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkDelDiskResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkDelDiskResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkDelDiskResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkDelDiskResp>, I>>(
    base?: I,
  ): LinkDelDiskResp {
    return LinkDelDiskResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkDelDiskResp>, I>>(
    object: I,
  ): LinkDelDiskResp {
    const message = createBaseLinkDelDiskResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkUpdateDiskLimitReq(): LinkUpdateDiskLimitReq {
  return { strId: "", nLimit: 0 };
}

export const LinkUpdateDiskLimitReq = {
  encode(
    message: LinkUpdateDiskLimitReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nLimit !== 0) {
      writer.uint32(16).int64(message.nLimit);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkUpdateDiskLimitReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkUpdateDiskLimitReq();
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
          if (tag !== 16) {
            break;
          }

          message.nLimit = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkUpdateDiskLimitReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nLimit: isSet(object.nLimit) ? globalThis.Number(object.nLimit) : 0,
    };
  },

  toJSON(message: LinkUpdateDiskLimitReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nLimit !== 0) {
      obj.nLimit = Math.round(message.nLimit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkUpdateDiskLimitReq>, I>>(
    base?: I,
  ): LinkUpdateDiskLimitReq {
    return LinkUpdateDiskLimitReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkUpdateDiskLimitReq>, I>>(
    object: I,
  ): LinkUpdateDiskLimitReq {
    const message = createBaseLinkUpdateDiskLimitReq();
    message.strId = object.strId ?? "";
    message.nLimit = object.nLimit ?? 0;
    return message;
  },
};

function createBaseLinkUpdateDiskLimitResp(): LinkUpdateDiskLimitResp {
  return { bSuccess: false };
}

export const LinkUpdateDiskLimitResp = {
  encode(
    message: LinkUpdateDiskLimitResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkUpdateDiskLimitResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkUpdateDiskLimitResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkUpdateDiskLimitResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkUpdateDiskLimitResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkUpdateDiskLimitResp>, I>>(
    base?: I,
  ): LinkUpdateDiskLimitResp {
    return LinkUpdateDiskLimitResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkUpdateDiskLimitResp>, I>>(
    object: I,
  ): LinkUpdateDiskLimitResp {
    const message = createBaseLinkUpdateDiskLimitResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkGetLicReq(): LinkGetLicReq {
  return { strFake: "" };
}

export const LinkGetLicReq = {
  encode(
    message: LinkGetLicReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strFake !== "") {
      writer.uint32(10).string(message.strFake);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkGetLicReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkGetLicReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strFake = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkGetLicReq {
    return {
      strFake: isSet(object.strFake) ? globalThis.String(object.strFake) : "",
    };
  },

  toJSON(message: LinkGetLicReq): unknown {
    const obj: any = {};
    if (message.strFake !== "") {
      obj.strFake = message.strFake;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkGetLicReq>, I>>(
    base?: I,
  ): LinkGetLicReq {
    return LinkGetLicReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkGetLicReq>, I>>(
    object: I,
  ): LinkGetLicReq {
    const message = createBaseLinkGetLicReq();
    message.strFake = object.strFake ?? "";
    return message;
  },
};

function createBaseLinkGetLicResp(): LinkGetLicResp {
  return {
    strLic: "",
    strHostId: "",
    nCh: 0,
    strType: "",
    strStartTime: "",
    strExpireTime: "",
  };
}

export const LinkGetLicResp = {
  encode(
    message: LinkGetLicResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strLic !== "") {
      writer.uint32(10).string(message.strLic);
    }
    if (message.strHostId !== "") {
      writer.uint32(18).string(message.strHostId);
    }
    if (message.nCh !== 0) {
      writer.uint32(24).int32(message.nCh);
    }
    if (message.strType !== "") {
      writer.uint32(34).string(message.strType);
    }
    if (message.strStartTime !== "") {
      writer.uint32(42).string(message.strStartTime);
    }
    if (message.strExpireTime !== "") {
      writer.uint32(50).string(message.strExpireTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkGetLicResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkGetLicResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strLic = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strHostId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nCh = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.strType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.strStartTime = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.strExpireTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkGetLicResp {
    return {
      strLic: isSet(object.strLic) ? globalThis.String(object.strLic) : "",
      strHostId: isSet(object.strHostId)
        ? globalThis.String(object.strHostId)
        : "",
      nCh: isSet(object.nCh) ? globalThis.Number(object.nCh) : 0,
      strType: isSet(object.strType) ? globalThis.String(object.strType) : "",
      strStartTime: isSet(object.strStartTime)
        ? globalThis.String(object.strStartTime)
        : "",
      strExpireTime: isSet(object.strExpireTime)
        ? globalThis.String(object.strExpireTime)
        : "",
    };
  },

  toJSON(message: LinkGetLicResp): unknown {
    const obj: any = {};
    if (message.strLic !== "") {
      obj.strLic = message.strLic;
    }
    if (message.strHostId !== "") {
      obj.strHostId = message.strHostId;
    }
    if (message.nCh !== 0) {
      obj.nCh = Math.round(message.nCh);
    }
    if (message.strType !== "") {
      obj.strType = message.strType;
    }
    if (message.strStartTime !== "") {
      obj.strStartTime = message.strStartTime;
    }
    if (message.strExpireTime !== "") {
      obj.strExpireTime = message.strExpireTime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkGetLicResp>, I>>(
    base?: I,
  ): LinkGetLicResp {
    return LinkGetLicResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkGetLicResp>, I>>(
    object: I,
  ): LinkGetLicResp {
    const message = createBaseLinkGetLicResp();
    message.strLic = object.strLic ?? "";
    message.strHostId = object.strHostId ?? "";
    message.nCh = object.nCh ?? 0;
    message.strType = object.strType ?? "";
    message.strStartTime = object.strStartTime ?? "";
    message.strExpireTime = object.strExpireTime ?? "";
    return message;
  },
};

function createBaseLinkGetVerReq(): LinkGetVerReq {
  return { strFake: "" };
}

export const LinkGetVerReq = {
  encode(
    message: LinkGetVerReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strFake !== "") {
      writer.uint32(10).string(message.strFake);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkGetVerReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkGetVerReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strFake = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkGetVerReq {
    return {
      strFake: isSet(object.strFake) ? globalThis.String(object.strFake) : "",
    };
  },

  toJSON(message: LinkGetVerReq): unknown {
    const obj: any = {};
    if (message.strFake !== "") {
      obj.strFake = message.strFake;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkGetVerReq>, I>>(
    base?: I,
  ): LinkGetVerReq {
    return LinkGetVerReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkGetVerReq>, I>>(
    object: I,
  ): LinkGetVerReq {
    const message = createBaseLinkGetVerReq();
    message.strFake = object.strFake ?? "";
    return message;
  },
};

function createBaseLinkGetVerResp(): LinkGetVerResp {
  return { strVer: "", strInfo: "" };
}

export const LinkGetVerResp = {
  encode(
    message: LinkGetVerResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strVer !== "") {
      writer.uint32(10).string(message.strVer);
    }
    if (message.strInfo !== "") {
      writer.uint32(18).string(message.strInfo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkGetVerResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkGetVerResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strVer = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strInfo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkGetVerResp {
    return {
      strVer: isSet(object.strVer) ? globalThis.String(object.strVer) : "",
      strInfo: isSet(object.strInfo) ? globalThis.String(object.strInfo) : "",
    };
  },

  toJSON(message: LinkGetVerResp): unknown {
    const obj: any = {};
    if (message.strVer !== "") {
      obj.strVer = message.strVer;
    }
    if (message.strInfo !== "") {
      obj.strInfo = message.strInfo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkGetVerResp>, I>>(
    base?: I,
  ): LinkGetVerResp {
    return LinkGetVerResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkGetVerResp>, I>>(
    object: I,
  ): LinkGetVerResp {
    const message = createBaseLinkGetVerResp();
    message.strVer = object.strVer ?? "";
    message.strInfo = object.strInfo ?? "";
    return message;
  },
};

function createBaseLinkConfLicReq(): LinkConfLicReq {
  return { strLic: "" };
}

export const LinkConfLicReq = {
  encode(
    message: LinkConfLicReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strLic !== "") {
      writer.uint32(10).string(message.strLic);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkConfLicReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkConfLicReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strLic = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkConfLicReq {
    return {
      strLic: isSet(object.strLic) ? globalThis.String(object.strLic) : "",
    };
  },

  toJSON(message: LinkConfLicReq): unknown {
    const obj: any = {};
    if (message.strLic !== "") {
      obj.strLic = message.strLic;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkConfLicReq>, I>>(
    base?: I,
  ): LinkConfLicReq {
    return LinkConfLicReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkConfLicReq>, I>>(
    object: I,
  ): LinkConfLicReq {
    const message = createBaseLinkConfLicReq();
    message.strLic = object.strLic ?? "";
    return message;
  },
};

function createBaseLinkConfLicResp(): LinkConfLicResp {
  return { bSuccess: false };
}

export const LinkConfLicResp = {
  encode(
    message: LinkConfLicResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkConfLicResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkConfLicResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkConfLicResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkConfLicResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkConfLicResp>, I>>(
    base?: I,
  ): LinkConfLicResp {
    return LinkConfLicResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkConfLicResp>, I>>(
    object: I,
  ): LinkConfLicResp {
    const message = createBaseLinkConfLicResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkAddUserReq(): LinkAddUserReq {
  return { strUser: "", strPasswd: "", stroldPasswd: "" };
}

export const LinkAddUserReq = {
  encode(
    message: LinkAddUserReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strUser !== "") {
      writer.uint32(10).string(message.strUser);
    }
    if (message.strPasswd !== "") {
      writer.uint32(18).string(message.strPasswd);
    }
    if (message.stroldPasswd !== "") {
      writer.uint32(26).string(message.stroldPasswd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkAddUserReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkAddUserReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strUser = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strPasswd = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stroldPasswd = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkAddUserReq {
    return {
      strUser: isSet(object.strUser) ? globalThis.String(object.strUser) : "",
      strPasswd: isSet(object.strPasswd)
        ? globalThis.String(object.strPasswd)
        : "",
      stroldPasswd: isSet(object.stroldPasswd)
        ? globalThis.String(object.stroldPasswd)
        : "",
    };
  },

  toJSON(message: LinkAddUserReq): unknown {
    const obj: any = {};
    if (message.strUser !== "") {
      obj.strUser = message.strUser;
    }
    if (message.strPasswd !== "") {
      obj.strPasswd = message.strPasswd;
    }
    if (message.stroldPasswd !== "") {
      obj.stroldPasswd = message.stroldPasswd;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkAddUserReq>, I>>(
    base?: I,
  ): LinkAddUserReq {
    return LinkAddUserReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkAddUserReq>, I>>(
    object: I,
  ): LinkAddUserReq {
    const message = createBaseLinkAddUserReq();
    message.strUser = object.strUser ?? "";
    message.strPasswd = object.strPasswd ?? "";
    message.stroldPasswd = object.stroldPasswd ?? "";
    return message;
  },
};

function createBaseLinkAddUserResp(): LinkAddUserResp {
  return { bSuccess: false };
}

export const LinkAddUserResp = {
  encode(
    message: LinkAddUserResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkAddUserResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkAddUserResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkAddUserResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkAddUserResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkAddUserResp>, I>>(
    base?: I,
  ): LinkAddUserResp {
    return LinkAddUserResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkAddUserResp>, I>>(
    object: I,
  ): LinkAddUserResp {
    const message = createBaseLinkAddUserResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkHasRecordItem(): LinkHasRecordItem {
  return { nId: 0, nStart: 0, nEnd: 0, nType: 0, bHas: false };
}

export const LinkHasRecordItem = {
  encode(
    message: LinkHasRecordItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nId !== 0) {
      writer.uint32(8).int64(message.nId);
    }
    if (message.nStart !== 0) {
      writer.uint32(16).int32(message.nStart);
    }
    if (message.nEnd !== 0) {
      writer.uint32(24).int32(message.nEnd);
    }
    if (message.nType !== 0) {
      writer.uint32(32).int32(message.nType);
    }
    if (message.bHas === true) {
      writer.uint32(40).bool(message.bHas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkHasRecordItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkHasRecordItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nStart = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nEnd = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nType = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.bHas = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkHasRecordItem {
    return {
      nId: isSet(object.nId) ? globalThis.Number(object.nId) : 0,
      nStart: isSet(object.nStart) ? globalThis.Number(object.nStart) : 0,
      nEnd: isSet(object.nEnd) ? globalThis.Number(object.nEnd) : 0,
      nType: isSet(object.nType) ? globalThis.Number(object.nType) : 0,
      bHas: isSet(object.bHas) ? globalThis.Boolean(object.bHas) : false,
    };
  },

  toJSON(message: LinkHasRecordItem): unknown {
    const obj: any = {};
    if (message.nId !== 0) {
      obj.nId = Math.round(message.nId);
    }
    if (message.nStart !== 0) {
      obj.nStart = Math.round(message.nStart);
    }
    if (message.nEnd !== 0) {
      obj.nEnd = Math.round(message.nEnd);
    }
    if (message.nType !== 0) {
      obj.nType = Math.round(message.nType);
    }
    if (message.bHas === true) {
      obj.bHas = message.bHas;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkHasRecordItem>, I>>(
    base?: I,
  ): LinkHasRecordItem {
    return LinkHasRecordItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkHasRecordItem>, I>>(
    object: I,
  ): LinkHasRecordItem {
    const message = createBaseLinkHasRecordItem();
    message.nId = object.nId ?? 0;
    message.nStart = object.nStart ?? 0;
    message.nEnd = object.nEnd ?? 0;
    message.nType = object.nType ?? 0;
    message.bHas = object.bHas ?? false;
    return message;
  },
};

function createBaseLinkHasRecordList(): LinkHasRecordList {
  return { cHasRec: [] };
}

export const LinkHasRecordList = {
  encode(
    message: LinkHasRecordList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cHasRec) {
      LinkHasRecordItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkHasRecordList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkHasRecordList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cHasRec.push(
            LinkHasRecordItem.decode(reader, reader.uint32()),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkHasRecordList {
    return {
      cHasRec: globalThis.Array.isArray(object?.cHasRec)
        ? object.cHasRec.map((e: any) => LinkHasRecordItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LinkHasRecordList): unknown {
    const obj: any = {};
    if (message.cHasRec?.length) {
      obj.cHasRec = message.cHasRec.map((e) => LinkHasRecordItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkHasRecordList>, I>>(
    base?: I,
  ): LinkHasRecordList {
    return LinkHasRecordList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkHasRecordList>, I>>(
    object: I,
  ): LinkHasRecordList {
    const message = createBaseLinkHasRecordList();
    message.cHasRec =
      object.cHasRec?.map((e) => LinkHasRecordItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLinkHasRecordReq(): LinkHasRecordReq {
  return { strId: "", cList: undefined };
}

export const LinkHasRecordReq = {
  encode(
    message: LinkHasRecordReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.cList !== undefined) {
      LinkHasRecordList.encode(
        message.cList,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkHasRecordReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkHasRecordReq();
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

          message.cList = LinkHasRecordList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkHasRecordReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      cList: isSet(object.cList)
        ? LinkHasRecordList.fromJSON(object.cList)
        : undefined,
    };
  },

  toJSON(message: LinkHasRecordReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.cList !== undefined) {
      obj.cList = LinkHasRecordList.toJSON(message.cList);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkHasRecordReq>, I>>(
    base?: I,
  ): LinkHasRecordReq {
    return LinkHasRecordReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkHasRecordReq>, I>>(
    object: I,
  ): LinkHasRecordReq {
    const message = createBaseLinkHasRecordReq();
    message.strId = object.strId ?? "";
    message.cList =
      object.cList !== undefined && object.cList !== null
        ? LinkHasRecordList.fromPartial(object.cList)
        : undefined;
    return message;
  },
};

function createBaseLinkHasRecordResp(): LinkHasRecordResp {
  return { cList: undefined };
}

export const LinkHasRecordResp = {
  encode(
    message: LinkHasRecordResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cList !== undefined) {
      LinkHasRecordList.encode(
        message.cList,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkHasRecordResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkHasRecordResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cList = LinkHasRecordList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkHasRecordResp {
    return {
      cList: isSet(object.cList)
        ? LinkHasRecordList.fromJSON(object.cList)
        : undefined,
    };
  },

  toJSON(message: LinkHasRecordResp): unknown {
    const obj: any = {};
    if (message.cList !== undefined) {
      obj.cList = LinkHasRecordList.toJSON(message.cList);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkHasRecordResp>, I>>(
    base?: I,
  ): LinkHasRecordResp {
    return LinkHasRecordResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkHasRecordResp>, I>>(
    object: I,
  ): LinkHasRecordResp {
    const message = createBaseLinkHasRecordResp();
    message.cList =
      object.cList !== undefined && object.cList !== null
        ? LinkHasRecordList.fromPartial(object.cList)
        : undefined;
    return message;
  },
};

function createBaseLinkRecordItem(): LinkRecordItem {
  return { nId: 0, nStart: 0, nEnd: 0, nType: 0 };
}

export const LinkRecordItem = {
  encode(
    message: LinkRecordItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nId !== 0) {
      writer.uint32(8).int64(message.nId);
    }
    if (message.nStart !== 0) {
      writer.uint32(16).int32(message.nStart);
    }
    if (message.nEnd !== 0) {
      writer.uint32(24).int32(message.nEnd);
    }
    if (message.nType !== 0) {
      writer.uint32(32).int32(message.nType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRecordItem {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRecordItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nId = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nStart = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nEnd = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nType = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkRecordItem {
    return {
      nId: isSet(object.nId) ? globalThis.Number(object.nId) : 0,
      nStart: isSet(object.nStart) ? globalThis.Number(object.nStart) : 0,
      nEnd: isSet(object.nEnd) ? globalThis.Number(object.nEnd) : 0,
      nType: isSet(object.nType) ? globalThis.Number(object.nType) : 0,
    };
  },

  toJSON(message: LinkRecordItem): unknown {
    const obj: any = {};
    if (message.nId !== 0) {
      obj.nId = Math.round(message.nId);
    }
    if (message.nStart !== 0) {
      obj.nStart = Math.round(message.nStart);
    }
    if (message.nEnd !== 0) {
      obj.nEnd = Math.round(message.nEnd);
    }
    if (message.nType !== 0) {
      obj.nType = Math.round(message.nType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkRecordItem>, I>>(
    base?: I,
  ): LinkRecordItem {
    return LinkRecordItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkRecordItem>, I>>(
    object: I,
  ): LinkRecordItem {
    const message = createBaseLinkRecordItem();
    message.nId = object.nId ?? 0;
    message.nStart = object.nStart ?? 0;
    message.nEnd = object.nEnd ?? 0;
    message.nType = object.nType ?? 0;
    return message;
  },
};

function createBaseLinkRecordList(): LinkRecordList {
  return { cList: [] };
}

export const LinkRecordList = {
  encode(
    message: LinkRecordList,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.cList) {
      LinkRecordItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRecordList {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRecordList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cList.push(LinkRecordItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkRecordList {
    return {
      cList: globalThis.Array.isArray(object?.cList)
        ? object.cList.map((e: any) => LinkRecordItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LinkRecordList): unknown {
    const obj: any = {};
    if (message.cList?.length) {
      obj.cList = message.cList.map((e) => LinkRecordItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkRecordList>, I>>(
    base?: I,
  ): LinkRecordList {
    return LinkRecordList.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkRecordList>, I>>(
    object: I,
  ): LinkRecordList {
    const message = createBaseLinkRecordList();
    message.cList =
      object.cList?.map((e) => LinkRecordItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLinkSearchRecordReq(): LinkSearchRecordReq {
  return { strId: "", nStart: 0, nEnd: 0, nType: 0 };
}

export const LinkSearchRecordReq = {
  encode(
    message: LinkSearchRecordReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nStart !== 0) {
      writer.uint32(16).int32(message.nStart);
    }
    if (message.nEnd !== 0) {
      writer.uint32(24).int32(message.nEnd);
    }
    if (message.nType !== 0) {
      writer.uint32(32).int32(message.nType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkSearchRecordReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSearchRecordReq();
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
          if (tag !== 16) {
            break;
          }

          message.nStart = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nEnd = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.nType = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSearchRecordReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nStart: isSet(object.nStart) ? globalThis.Number(object.nStart) : 0,
      nEnd: isSet(object.nEnd) ? globalThis.Number(object.nEnd) : 0,
      nType: isSet(object.nType) ? globalThis.Number(object.nType) : 0,
    };
  },

  toJSON(message: LinkSearchRecordReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nStart !== 0) {
      obj.nStart = Math.round(message.nStart);
    }
    if (message.nEnd !== 0) {
      obj.nEnd = Math.round(message.nEnd);
    }
    if (message.nType !== 0) {
      obj.nType = Math.round(message.nType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSearchRecordReq>, I>>(
    base?: I,
  ): LinkSearchRecordReq {
    return LinkSearchRecordReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSearchRecordReq>, I>>(
    object: I,
  ): LinkSearchRecordReq {
    const message = createBaseLinkSearchRecordReq();
    message.strId = object.strId ?? "";
    message.nStart = object.nStart ?? 0;
    message.nEnd = object.nEnd ?? 0;
    message.nType = object.nType ?? 0;
    return message;
  },
};

function createBaseLinkSearchRecordResp(): LinkSearchRecordResp {
  return { strId: "", cList: undefined };
}

export const LinkSearchRecordResp = {
  encode(
    message: LinkSearchRecordResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.cList !== undefined) {
      LinkRecordList.encode(message.cList, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkSearchRecordResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSearchRecordResp();
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

          message.cList = LinkRecordList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSearchRecordResp {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      cList: isSet(object.cList)
        ? LinkRecordList.fromJSON(object.cList)
        : undefined,
    };
  },

  toJSON(message: LinkSearchRecordResp): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.cList !== undefined) {
      obj.cList = LinkRecordList.toJSON(message.cList);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSearchRecordResp>, I>>(
    base?: I,
  ): LinkSearchRecordResp {
    return LinkSearchRecordResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSearchRecordResp>, I>>(
    object: I,
  ): LinkSearchRecordResp {
    const message = createBaseLinkSearchRecordResp();
    message.strId = object.strId ?? "";
    message.cList =
      object.cList !== undefined && object.cList !== null
        ? LinkRecordList.fromPartial(object.cList)
        : undefined;
    return message;
  },
};

function createBaseLinkStartLiveCmd(): LinkStartLiveCmd {
  return { strId: "", nStream: 0 };
}

export const LinkStartLiveCmd = {
  encode(
    message: LinkStartLiveCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nStream !== 0) {
      writer.uint32(16).int32(message.nStream);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkStartLiveCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkStartLiveCmd();
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
          if (tag !== 16) {
            break;
          }

          message.nStream = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkStartLiveCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nStream: isSet(object.nStream) ? globalThis.Number(object.nStream) : 0,
    };
  },

  toJSON(message: LinkStartLiveCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nStream !== 0) {
      obj.nStream = Math.round(message.nStream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkStartLiveCmd>, I>>(
    base?: I,
  ): LinkStartLiveCmd {
    return LinkStartLiveCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkStartLiveCmd>, I>>(
    object: I,
  ): LinkStartLiveCmd {
    const message = createBaseLinkStartLiveCmd();
    message.strId = object.strId ?? "";
    message.nStream = object.nStream ?? 0;
    return message;
  },
};

function createBaseLinkStopLiveCmd(): LinkStopLiveCmd {
  return { strId: "", nStream: 0 };
}

export const LinkStopLiveCmd = {
  encode(
    message: LinkStopLiveCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nStream !== 0) {
      writer.uint32(16).int32(message.nStream);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkStopLiveCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkStopLiveCmd();
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
          if (tag !== 16) {
            break;
          }

          message.nStream = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkStopLiveCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nStream: isSet(object.nStream) ? globalThis.Number(object.nStream) : 0,
    };
  },

  toJSON(message: LinkStopLiveCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nStream !== 0) {
      obj.nStream = Math.round(message.nStream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkStopLiveCmd>, I>>(
    base?: I,
  ): LinkStopLiveCmd {
    return LinkStopLiveCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkStopLiveCmd>, I>>(
    object: I,
  ): LinkStopLiveCmd {
    const message = createBaseLinkStopLiveCmd();
    message.strId = object.strId ?? "";
    message.nStream = object.nStream ?? 0;
    return message;
  },
};

function createBaseLinkPlayBackCmd(): LinkPlayBackCmd {
  return { strId: "", nPlaytime: 0 };
}

export const LinkPlayBackCmd = {
  encode(
    message: LinkPlayBackCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nPlaytime !== 0) {
      writer.uint32(16).int32(message.nPlaytime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPlayBackCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPlayBackCmd();
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
          if (tag !== 16) {
            break;
          }

          message.nPlaytime = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPlayBackCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nPlaytime: isSet(object.nPlaytime)
        ? globalThis.Number(object.nPlaytime)
        : 0,
    };
  },

  toJSON(message: LinkPlayBackCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nPlaytime !== 0) {
      obj.nPlaytime = Math.round(message.nPlaytime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPlayBackCmd>, I>>(
    base?: I,
  ): LinkPlayBackCmd {
    return LinkPlayBackCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPlayBackCmd>, I>>(
    object: I,
  ): LinkPlayBackCmd {
    const message = createBaseLinkPlayBackCmd();
    message.strId = object.strId ?? "";
    message.nPlaytime = object.nPlaytime ?? 0;
    return message;
  },
};

function createBaseLinkPlayPauseCmd(): LinkPlayPauseCmd {
  return { strId: "" };
}

export const LinkPlayPauseCmd = {
  encode(
    message: LinkPlayPauseCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPlayPauseCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPlayPauseCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPlayPauseCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkPlayPauseCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPlayPauseCmd>, I>>(
    base?: I,
  ): LinkPlayPauseCmd {
    return LinkPlayPauseCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPlayPauseCmd>, I>>(
    object: I,
  ): LinkPlayPauseCmd {
    const message = createBaseLinkPlayPauseCmd();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkPlayResumeCmd(): LinkPlayResumeCmd {
  return { strId: "" };
}

export const LinkPlayResumeCmd = {
  encode(
    message: LinkPlayResumeCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPlayResumeCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPlayResumeCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPlayResumeCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkPlayResumeCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPlayResumeCmd>, I>>(
    base?: I,
  ): LinkPlayResumeCmd {
    return LinkPlayResumeCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPlayResumeCmd>, I>>(
    object: I,
  ): LinkPlayResumeCmd {
    const message = createBaseLinkPlayResumeCmd();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkPlaySeekCmd(): LinkPlaySeekCmd {
  return { strId: "", nPlaytime: 0 };
}

export const LinkPlaySeekCmd = {
  encode(
    message: LinkPlaySeekCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nPlaytime !== 0) {
      writer.uint32(16).int32(message.nPlaytime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPlaySeekCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPlaySeekCmd();
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
          if (tag !== 16) {
            break;
          }

          message.nPlaytime = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPlaySeekCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nPlaytime: isSet(object.nPlaytime)
        ? globalThis.Number(object.nPlaytime)
        : 0,
    };
  },

  toJSON(message: LinkPlaySeekCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nPlaytime !== 0) {
      obj.nPlaytime = Math.round(message.nPlaytime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPlaySeekCmd>, I>>(
    base?: I,
  ): LinkPlaySeekCmd {
    return LinkPlaySeekCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPlaySeekCmd>, I>>(
    object: I,
  ): LinkPlaySeekCmd {
    const message = createBaseLinkPlaySeekCmd();
    message.strId = object.strId ?? "";
    message.nPlaytime = object.nPlaytime ?? 0;
    return message;
  },
};

function createBaseLinkPlayStopCmd(): LinkPlayStopCmd {
  return { strId: "" };
}

export const LinkPlayStopCmd = {
  encode(
    message: LinkPlayStopCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPlayStopCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPlayStopCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPlayStopCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkPlayStopCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPlayStopCmd>, I>>(
    base?: I,
  ): LinkPlayStopCmd {
    return LinkPlayStopCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPlayStopCmd>, I>>(
    object: I,
  ): LinkPlayStopCmd {
    const message = createBaseLinkPlayStopCmd();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkPlaySpeedCmd(): LinkPlaySpeedCmd {
  return { strId: "", fSpeed: 0 };
}

export const LinkPlaySpeedCmd = {
  encode(
    message: LinkPlaySpeedCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.fSpeed !== 0) {
      writer.uint32(21).float(message.fSpeed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPlaySpeedCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPlaySpeedCmd();
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
          if (tag !== 21) {
            break;
          }

          message.fSpeed = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPlaySpeedCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      fSpeed: isSet(object.fSpeed) ? globalThis.Number(object.fSpeed) : 0,
    };
  },

  toJSON(message: LinkPlaySpeedCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.fSpeed !== 0) {
      obj.fSpeed = message.fSpeed;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPlaySpeedCmd>, I>>(
    base?: I,
  ): LinkPlaySpeedCmd {
    return LinkPlaySpeedCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPlaySpeedCmd>, I>>(
    object: I,
  ): LinkPlaySpeedCmd {
    const message = createBaseLinkPlaySpeedCmd();
    message.strId = object.strId ?? "";
    message.fSpeed = object.fSpeed ?? 0;
    return message;
  },
};

function createBaseLinkPlayNextFrameCmd(): LinkPlayNextFrameCmd {
  return { strId: "" };
}

export const LinkPlayNextFrameCmd = {
  encode(
    message: LinkPlayNextFrameCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkPlayNextFrameCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPlayNextFrameCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPlayNextFrameCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkPlayNextFrameCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPlayNextFrameCmd>, I>>(
    base?: I,
  ): LinkPlayNextFrameCmd {
    return LinkPlayNextFrameCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPlayNextFrameCmd>, I>>(
    object: I,
  ): LinkPlayNextFrameCmd {
    const message = createBaseLinkPlayNextFrameCmd();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkPlayPreFrameCmd(): LinkPlayPreFrameCmd {
  return { strId: "" };
}

export const LinkPlayPreFrameCmd = {
  encode(
    message: LinkPlayPreFrameCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPlayPreFrameCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPlayPreFrameCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPlayPreFrameCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkPlayPreFrameCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPlayPreFrameCmd>, I>>(
    base?: I,
  ): LinkPlayPreFrameCmd {
    return LinkPlayPreFrameCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPlayPreFrameCmd>, I>>(
    object: I,
  ): LinkPlayPreFrameCmd {
    const message = createBaseLinkPlayPreFrameCmd();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkMiVideoData(): LinkMiVideoData {
  return {
    struuid: "",
    strdatabuf: "",
    dataLen: 0,
    bufLen: 0,
    streamType: 0,
    frameType: 0,
    secs: 0,
    msecs: 0,
  };
}

export const LinkMiVideoData = {
  encode(
    message: LinkMiVideoData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    if (message.strdatabuf !== "") {
      writer.uint32(18).string(message.strdatabuf);
    }
    if (message.dataLen !== 0) {
      writer.uint32(24).uint32(message.dataLen);
    }
    if (message.bufLen !== 0) {
      writer.uint32(32).uint32(message.bufLen);
    }
    if (message.streamType !== 0) {
      writer.uint32(40).uint32(message.streamType);
    }
    if (message.frameType !== 0) {
      writer.uint32(48).uint32(message.frameType);
    }
    if (message.secs !== 0) {
      writer.uint32(56).uint32(message.secs);
    }
    if (message.msecs !== 0) {
      writer.uint32(64).uint32(message.msecs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiVideoData {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiVideoData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.strdatabuf = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.dataLen = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bufLen = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.streamType = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.frameType = reader.uint32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.secs = reader.uint32();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.msecs = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiVideoData {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
      strdatabuf: isSet(object.strdatabuf)
        ? globalThis.String(object.strdatabuf)
        : "",
      dataLen: isSet(object.dataLen) ? globalThis.Number(object.dataLen) : 0,
      bufLen: isSet(object.bufLen) ? globalThis.Number(object.bufLen) : 0,
      streamType: isSet(object.streamType)
        ? globalThis.Number(object.streamType)
        : 0,
      frameType: isSet(object.frameType)
        ? globalThis.Number(object.frameType)
        : 0,
      secs: isSet(object.secs) ? globalThis.Number(object.secs) : 0,
      msecs: isSet(object.msecs) ? globalThis.Number(object.msecs) : 0,
    };
  },

  toJSON(message: LinkMiVideoData): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    if (message.strdatabuf !== "") {
      obj.strdatabuf = message.strdatabuf;
    }
    if (message.dataLen !== 0) {
      obj.dataLen = Math.round(message.dataLen);
    }
    if (message.bufLen !== 0) {
      obj.bufLen = Math.round(message.bufLen);
    }
    if (message.streamType !== 0) {
      obj.streamType = Math.round(message.streamType);
    }
    if (message.frameType !== 0) {
      obj.frameType = Math.round(message.frameType);
    }
    if (message.secs !== 0) {
      obj.secs = Math.round(message.secs);
    }
    if (message.msecs !== 0) {
      obj.msecs = Math.round(message.msecs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiVideoData>, I>>(
    base?: I,
  ): LinkMiVideoData {
    return LinkMiVideoData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiVideoData>, I>>(
    object: I,
  ): LinkMiVideoData {
    const message = createBaseLinkMiVideoData();
    message.struuid = object.struuid ?? "";
    message.strdatabuf = object.strdatabuf ?? "";
    message.dataLen = object.dataLen ?? 0;
    message.bufLen = object.bufLen ?? 0;
    message.streamType = object.streamType ?? 0;
    message.frameType = object.frameType ?? 0;
    message.secs = object.secs ?? 0;
    message.msecs = object.msecs ?? 0;
    return message;
  },
};

function createBaseLinkMiStartLiveCmd(): LinkMiStartLiveCmd {
  return { strId: "", nStream: 0, struuid: "" };
}

export const LinkMiStartLiveCmd = {
  encode(
    message: LinkMiStartLiveCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nStream !== 0) {
      writer.uint32(16).int32(message.nStream);
    }
    if (message.struuid !== "") {
      writer.uint32(26).string(message.struuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiStartLiveCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiStartLiveCmd();
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
          if (tag !== 16) {
            break;
          }

          message.nStream = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiStartLiveCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nStream: isSet(object.nStream) ? globalThis.Number(object.nStream) : 0,
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiStartLiveCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nStream !== 0) {
      obj.nStream = Math.round(message.nStream);
    }
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiStartLiveCmd>, I>>(
    base?: I,
  ): LinkMiStartLiveCmd {
    return LinkMiStartLiveCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiStartLiveCmd>, I>>(
    object: I,
  ): LinkMiStartLiveCmd {
    const message = createBaseLinkMiStartLiveCmd();
    message.strId = object.strId ?? "";
    message.nStream = object.nStream ?? 0;
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkMiStopLiveCmd(): LinkMiStopLiveCmd {
  return { struuid: "" };
}

export const LinkMiStopLiveCmd = {
  encode(
    message: LinkMiStopLiveCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiStopLiveCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiStopLiveCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiStopLiveCmd {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiStopLiveCmd): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiStopLiveCmd>, I>>(
    base?: I,
  ): LinkMiStopLiveCmd {
    return LinkMiStopLiveCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiStopLiveCmd>, I>>(
    object: I,
  ): LinkMiStopLiveCmd {
    const message = createBaseLinkMiStopLiveCmd();
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkMiPlayBackCmd(): LinkMiPlayBackCmd {
  return { strId: "", nPlaytime: 0, struuid: "" };
}

export const LinkMiPlayBackCmd = {
  encode(
    message: LinkMiPlayBackCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nPlaytime !== 0) {
      writer.uint32(16).int32(message.nPlaytime);
    }
    if (message.struuid !== "") {
      writer.uint32(26).string(message.struuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiPlayBackCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiPlayBackCmd();
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
          if (tag !== 16) {
            break;
          }

          message.nPlaytime = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiPlayBackCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nPlaytime: isSet(object.nPlaytime)
        ? globalThis.Number(object.nPlaytime)
        : 0,
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiPlayBackCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nPlaytime !== 0) {
      obj.nPlaytime = Math.round(message.nPlaytime);
    }
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiPlayBackCmd>, I>>(
    base?: I,
  ): LinkMiPlayBackCmd {
    return LinkMiPlayBackCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiPlayBackCmd>, I>>(
    object: I,
  ): LinkMiPlayBackCmd {
    const message = createBaseLinkMiPlayBackCmd();
    message.strId = object.strId ?? "";
    message.nPlaytime = object.nPlaytime ?? 0;
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkMiPlayPauseCmd(): LinkMiPlayPauseCmd {
  return { struuid: "" };
}

export const LinkMiPlayPauseCmd = {
  encode(
    message: LinkMiPlayPauseCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiPlayPauseCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiPlayPauseCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiPlayPauseCmd {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiPlayPauseCmd): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiPlayPauseCmd>, I>>(
    base?: I,
  ): LinkMiPlayPauseCmd {
    return LinkMiPlayPauseCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiPlayPauseCmd>, I>>(
    object: I,
  ): LinkMiPlayPauseCmd {
    const message = createBaseLinkMiPlayPauseCmd();
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkMiPlayResumeCmd(): LinkMiPlayResumeCmd {
  return { struuid: "" };
}

export const LinkMiPlayResumeCmd = {
  encode(
    message: LinkMiPlayResumeCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiPlayResumeCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiPlayResumeCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiPlayResumeCmd {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiPlayResumeCmd): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiPlayResumeCmd>, I>>(
    base?: I,
  ): LinkMiPlayResumeCmd {
    return LinkMiPlayResumeCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiPlayResumeCmd>, I>>(
    object: I,
  ): LinkMiPlayResumeCmd {
    const message = createBaseLinkMiPlayResumeCmd();
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkMiPlaySeekCmd(): LinkMiPlaySeekCmd {
  return { struuid: "", nPlaytime: 0 };
}

export const LinkMiPlaySeekCmd = {
  encode(
    message: LinkMiPlaySeekCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    if (message.nPlaytime !== 0) {
      writer.uint32(16).int32(message.nPlaytime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiPlaySeekCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiPlaySeekCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nPlaytime = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiPlaySeekCmd {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
      nPlaytime: isSet(object.nPlaytime)
        ? globalThis.Number(object.nPlaytime)
        : 0,
    };
  },

  toJSON(message: LinkMiPlaySeekCmd): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    if (message.nPlaytime !== 0) {
      obj.nPlaytime = Math.round(message.nPlaytime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiPlaySeekCmd>, I>>(
    base?: I,
  ): LinkMiPlaySeekCmd {
    return LinkMiPlaySeekCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiPlaySeekCmd>, I>>(
    object: I,
  ): LinkMiPlaySeekCmd {
    const message = createBaseLinkMiPlaySeekCmd();
    message.struuid = object.struuid ?? "";
    message.nPlaytime = object.nPlaytime ?? 0;
    return message;
  },
};

function createBaseLinkMiPlayStopCmd(): LinkMiPlayStopCmd {
  return { struuid: "" };
}

export const LinkMiPlayStopCmd = {
  encode(
    message: LinkMiPlayStopCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiPlayStopCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiPlayStopCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiPlayStopCmd {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiPlayStopCmd): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiPlayStopCmd>, I>>(
    base?: I,
  ): LinkMiPlayStopCmd {
    return LinkMiPlayStopCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiPlayStopCmd>, I>>(
    object: I,
  ): LinkMiPlayStopCmd {
    const message = createBaseLinkMiPlayStopCmd();
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkMiPlaySpeedCmd(): LinkMiPlaySpeedCmd {
  return { struuid: "", fSpeed: 0 };
}

export const LinkMiPlaySpeedCmd = {
  encode(
    message: LinkMiPlaySpeedCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    if (message.fSpeed !== 0) {
      writer.uint32(21).float(message.fSpeed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkMiPlaySpeedCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiPlaySpeedCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.fSpeed = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiPlaySpeedCmd {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
      fSpeed: isSet(object.fSpeed) ? globalThis.Number(object.fSpeed) : 0,
    };
  },

  toJSON(message: LinkMiPlaySpeedCmd): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    if (message.fSpeed !== 0) {
      obj.fSpeed = message.fSpeed;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiPlaySpeedCmd>, I>>(
    base?: I,
  ): LinkMiPlaySpeedCmd {
    return LinkMiPlaySpeedCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiPlaySpeedCmd>, I>>(
    object: I,
  ): LinkMiPlaySpeedCmd {
    const message = createBaseLinkMiPlaySpeedCmd();
    message.struuid = object.struuid ?? "";
    message.fSpeed = object.fSpeed ?? 0;
    return message;
  },
};

function createBaseLinkMiPlayNextFrameCmd(): LinkMiPlayNextFrameCmd {
  return { struuid: "" };
}

export const LinkMiPlayNextFrameCmd = {
  encode(
    message: LinkMiPlayNextFrameCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkMiPlayNextFrameCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiPlayNextFrameCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiPlayNextFrameCmd {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiPlayNextFrameCmd): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiPlayNextFrameCmd>, I>>(
    base?: I,
  ): LinkMiPlayNextFrameCmd {
    return LinkMiPlayNextFrameCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiPlayNextFrameCmd>, I>>(
    object: I,
  ): LinkMiPlayNextFrameCmd {
    const message = createBaseLinkMiPlayNextFrameCmd();
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkMiPlayPreFrameCmd(): LinkMiPlayPreFrameCmd {
  return { struuid: "" };
}

export const LinkMiPlayPreFrameCmd = {
  encode(
    message: LinkMiPlayPreFrameCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.struuid !== "") {
      writer.uint32(10).string(message.struuid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkMiPlayPreFrameCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiPlayPreFrameCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiPlayPreFrameCmd {
    return {
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiPlayPreFrameCmd): unknown {
    const obj: any = {};
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiPlayPreFrameCmd>, I>>(
    base?: I,
  ): LinkMiPlayPreFrameCmd {
    return LinkMiPlayPreFrameCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiPlayPreFrameCmd>, I>>(
    object: I,
  ): LinkMiPlayPreFrameCmd {
    const message = createBaseLinkMiPlayPreFrameCmd();
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkMiChangeStreamCmd(): LinkMiChangeStreamCmd {
  return { strId: "", nStream: 0, struuid: "" };
}

export const LinkMiChangeStreamCmd = {
  encode(
    message: LinkMiChangeStreamCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nStream !== 0) {
      writer.uint32(16).int32(message.nStream);
    }
    if (message.struuid !== "") {
      writer.uint32(26).string(message.struuid);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkMiChangeStreamCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkMiChangeStreamCmd();
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
          if (tag !== 16) {
            break;
          }

          message.nStream = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.struuid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkMiChangeStreamCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nStream: isSet(object.nStream) ? globalThis.Number(object.nStream) : 0,
      struuid: isSet(object.struuid) ? globalThis.String(object.struuid) : "",
    };
  },

  toJSON(message: LinkMiChangeStreamCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nStream !== 0) {
      obj.nStream = Math.round(message.nStream);
    }
    if (message.struuid !== "") {
      obj.struuid = message.struuid;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkMiChangeStreamCmd>, I>>(
    base?: I,
  ): LinkMiChangeStreamCmd {
    return LinkMiChangeStreamCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkMiChangeStreamCmd>, I>>(
    object: I,
  ): LinkMiChangeStreamCmd {
    const message = createBaseLinkMiChangeStreamCmd();
    message.strId = object.strId ?? "";
    message.nStream = object.nStream ?? 0;
    message.struuid = object.struuid ?? "";
    return message;
  },
};

function createBaseLinkPtzCmd(): LinkPtzCmd {
  return { strId: "", nAction: 0, nParam: 0 };
}

export const LinkPtzCmd = {
  encode(
    message: LinkPtzCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nAction !== 0) {
      writer.uint32(16).int32(message.nAction);
    }
    if (message.nParam !== 0) {
      writer.uint32(25).double(message.nParam);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkPtzCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkPtzCmd();
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
          if (tag !== 16) {
            break;
          }

          message.nAction = reader.int32();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.nParam = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkPtzCmd {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nAction: isSet(object.nAction) ? globalThis.Number(object.nAction) : 0,
      nParam: isSet(object.nParam) ? globalThis.Number(object.nParam) : 0,
    };
  },

  toJSON(message: LinkPtzCmd): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nAction !== 0) {
      obj.nAction = Math.round(message.nAction);
    }
    if (message.nParam !== 0) {
      obj.nParam = message.nParam;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkPtzCmd>, I>>(base?: I): LinkPtzCmd {
    return LinkPtzCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkPtzCmd>, I>>(
    object: I,
  ): LinkPtzCmd {
    const message = createBaseLinkPtzCmd();
    message.strId = object.strId ?? "";
    message.nAction = object.nAction ?? 0;
    message.nParam = object.nParam ?? 0;
    return message;
  },
};

function createBaseLinkCamSearchStartReq(): LinkCamSearchStartReq {
  return { strFake: "" };
}

export const LinkCamSearchStartReq = {
  encode(
    message: LinkCamSearchStartReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strFake !== "") {
      writer.uint32(10).string(message.strFake);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkCamSearchStartReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamSearchStartReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strFake = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamSearchStartReq {
    return {
      strFake: isSet(object.strFake) ? globalThis.String(object.strFake) : "",
    };
  },

  toJSON(message: LinkCamSearchStartReq): unknown {
    const obj: any = {};
    if (message.strFake !== "") {
      obj.strFake = message.strFake;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamSearchStartReq>, I>>(
    base?: I,
  ): LinkCamSearchStartReq {
    return LinkCamSearchStartReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamSearchStartReq>, I>>(
    object: I,
  ): LinkCamSearchStartReq {
    const message = createBaseLinkCamSearchStartReq();
    message.strFake = object.strFake ?? "";
    return message;
  },
};

function createBaseLinkCamSearchStartResp(): LinkCamSearchStartResp {
  return { bSuccess: false };
}

export const LinkCamSearchStartResp = {
  encode(
    message: LinkCamSearchStartResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkCamSearchStartResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamSearchStartResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamSearchStartResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkCamSearchStartResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamSearchStartResp>, I>>(
    base?: I,
  ): LinkCamSearchStartResp {
    return LinkCamSearchStartResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamSearchStartResp>, I>>(
    object: I,
  ): LinkCamSearchStartResp {
    const message = createBaseLinkCamSearchStartResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkCamSearchStopReq(): LinkCamSearchStopReq {
  return { strFake: "" };
}

export const LinkCamSearchStopReq = {
  encode(
    message: LinkCamSearchStopReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strFake !== "") {
      writer.uint32(10).string(message.strFake);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkCamSearchStopReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamSearchStopReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strFake = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamSearchStopReq {
    return {
      strFake: isSet(object.strFake) ? globalThis.String(object.strFake) : "",
    };
  },

  toJSON(message: LinkCamSearchStopReq): unknown {
    const obj: any = {};
    if (message.strFake !== "") {
      obj.strFake = message.strFake;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamSearchStopReq>, I>>(
    base?: I,
  ): LinkCamSearchStopReq {
    return LinkCamSearchStopReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamSearchStopReq>, I>>(
    object: I,
  ): LinkCamSearchStopReq {
    const message = createBaseLinkCamSearchStopReq();
    message.strFake = object.strFake ?? "";
    return message;
  },
};

function createBaseLinkCamSearchStopResp(): LinkCamSearchStopResp {
  return { bSuccess: false };
}

export const LinkCamSearchStopResp = {
  encode(
    message: LinkCamSearchStopResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkCamSearchStopResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamSearchStopResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamSearchStopResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkCamSearchStopResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamSearchStopResp>, I>>(
    base?: I,
  ): LinkCamSearchStopResp {
    return LinkCamSearchStopResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamSearchStopResp>, I>>(
    object: I,
  ): LinkCamSearchStopResp {
    const message = createBaseLinkCamSearchStopResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkRegEventReq(): LinkRegEventReq {
  return { strId: "" };
}

export const LinkRegEventReq = {
  encode(
    message: LinkRegEventReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRegEventReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRegEventReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkRegEventReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkRegEventReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkRegEventReq>, I>>(
    base?: I,
  ): LinkRegEventReq {
    return LinkRegEventReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkRegEventReq>, I>>(
    object: I,
  ): LinkRegEventReq {
    const message = createBaseLinkRegEventReq();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkRegEventResp(): LinkRegEventResp {
  return { bSuccess: false };
}

export const LinkRegEventResp = {
  encode(
    message: LinkRegEventResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRegEventResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRegEventResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkRegEventResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkRegEventResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkRegEventResp>, I>>(
    base?: I,
  ): LinkRegEventResp {
    return LinkRegEventResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkRegEventResp>, I>>(
    object: I,
  ): LinkRegEventResp {
    const message = createBaseLinkRegEventResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkUnRegEventReq(): LinkUnRegEventReq {
  return { strId: "" };
}

export const LinkUnRegEventReq = {
  encode(
    message: LinkUnRegEventReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkUnRegEventReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkUnRegEventReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkUnRegEventReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkUnRegEventReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkUnRegEventReq>, I>>(
    base?: I,
  ): LinkUnRegEventReq {
    return LinkUnRegEventReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkUnRegEventReq>, I>>(
    object: I,
  ): LinkUnRegEventReq {
    const message = createBaseLinkUnRegEventReq();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkUnRegEventResp(): LinkUnRegEventResp {
  return { bSuccess: false };
}

export const LinkUnRegEventResp = {
  encode(
    message: LinkUnRegEventResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkUnRegEventResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkUnRegEventResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkUnRegEventResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkUnRegEventResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkUnRegEventResp>, I>>(
    base?: I,
  ): LinkUnRegEventResp {
    return LinkUnRegEventResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkUnRegEventResp>, I>>(
    object: I,
  ): LinkUnRegEventResp {
    const message = createBaseLinkUnRegEventResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkEventSearchReq(): LinkEventSearchReq {
  return { strId: "", nStart: 0, nEnd: 0 };
}

export const LinkEventSearchReq = {
  encode(
    message: LinkEventSearchReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    if (message.nStart !== 0) {
      writer.uint32(16).int32(message.nStart);
    }
    if (message.nEnd !== 0) {
      writer.uint32(24).int32(message.nEnd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkEventSearchReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkEventSearchReq();
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
          if (tag !== 16) {
            break;
          }

          message.nStart = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nEnd = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkEventSearchReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
      nStart: isSet(object.nStart) ? globalThis.Number(object.nStart) : 0,
      nEnd: isSet(object.nEnd) ? globalThis.Number(object.nEnd) : 0,
    };
  },

  toJSON(message: LinkEventSearchReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    if (message.nStart !== 0) {
      obj.nStart = Math.round(message.nStart);
    }
    if (message.nEnd !== 0) {
      obj.nEnd = Math.round(message.nEnd);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkEventSearchReq>, I>>(
    base?: I,
  ): LinkEventSearchReq {
    return LinkEventSearchReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkEventSearchReq>, I>>(
    object: I,
  ): LinkEventSearchReq {
    const message = createBaseLinkEventSearchReq();
    message.strId = object.strId ?? "";
    message.nStart = object.nStart ?? 0;
    message.nEnd = object.nEnd ?? 0;
    return message;
  },
};

function createBaseLinkEventSearchResp(): LinkEventSearchResp {
  return { bSuccess: false };
}

export const LinkEventSearchResp = {
  encode(
    message: LinkEventSearchResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkEventSearchResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkEventSearchResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkEventSearchResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkEventSearchResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkEventSearchResp>, I>>(
    base?: I,
  ): LinkEventSearchResp {
    return LinkEventSearchResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkEventSearchResp>, I>>(
    object: I,
  ): LinkEventSearchResp {
    const message = createBaseLinkEventSearchResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkHandleEventReq(): LinkHandleEventReq {
  return { strId: "" };
}

export const LinkHandleEventReq = {
  encode(
    message: LinkHandleEventReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkHandleEventReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkHandleEventReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkHandleEventReq {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkHandleEventReq): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkHandleEventReq>, I>>(
    base?: I,
  ): LinkHandleEventReq {
    return LinkHandleEventReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkHandleEventReq>, I>>(
    object: I,
  ): LinkHandleEventReq {
    const message = createBaseLinkHandleEventReq();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkHandleEventResp(): LinkHandleEventResp {
  return { bSuccess: false };
}

export const LinkHandleEventResp = {
  encode(
    message: LinkHandleEventResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkHandleEventResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkHandleEventResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkHandleEventResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkHandleEventResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkHandleEventResp>, I>>(
    base?: I,
  ): LinkHandleEventResp {
    return LinkHandleEventResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkHandleEventResp>, I>>(
    object: I,
  ): LinkHandleEventResp {
    const message = createBaseLinkHandleEventResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkCamAddNotify(): LinkCamAddNotify {
  return { cCam: undefined };
}

export const LinkCamAddNotify = {
  encode(
    message: LinkCamAddNotify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cCam !== undefined) {
      VidCamera.encode(message.cCam, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkCamAddNotify {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamAddNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cCam = VidCamera.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamAddNotify {
    return {
      cCam: isSet(object.cCam) ? VidCamera.fromJSON(object.cCam) : undefined,
    };
  },

  toJSON(message: LinkCamAddNotify): unknown {
    const obj: any = {};
    if (message.cCam !== undefined) {
      obj.cCam = VidCamera.toJSON(message.cCam);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamAddNotify>, I>>(
    base?: I,
  ): LinkCamAddNotify {
    return LinkCamAddNotify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamAddNotify>, I>>(
    object: I,
  ): LinkCamAddNotify {
    const message = createBaseLinkCamAddNotify();
    message.cCam =
      object.cCam !== undefined && object.cCam !== null
        ? VidCamera.fromPartial(object.cCam)
        : undefined;
    return message;
  },
};

function createBaseLinkCamIdNotify(): LinkCamIdNotify {
  return { strId: "" };
}

export const LinkCamIdNotify = {
  encode(
    message: LinkCamIdNotify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strId !== "") {
      writer.uint32(10).string(message.strId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkCamIdNotify {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamIdNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamIdNotify {
    return {
      strId: isSet(object.strId) ? globalThis.String(object.strId) : "",
    };
  },

  toJSON(message: LinkCamIdNotify): unknown {
    const obj: any = {};
    if (message.strId !== "") {
      obj.strId = message.strId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamIdNotify>, I>>(
    base?: I,
  ): LinkCamIdNotify {
    return LinkCamIdNotify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamIdNotify>, I>>(
    object: I,
  ): LinkCamIdNotify {
    const message = createBaseLinkCamIdNotify();
    message.strId = object.strId ?? "";
    return message;
  },
};

function createBaseLinkCamSearchedNotify(): LinkCamSearchedNotify {
  return { strIp: "", strPort: "", strModel: "", strONVIFAddress: "" };
}

export const LinkCamSearchedNotify = {
  encode(
    message: LinkCamSearchedNotify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strIp !== "") {
      writer.uint32(10).string(message.strIp);
    }
    if (message.strPort !== "") {
      writer.uint32(18).string(message.strPort);
    }
    if (message.strModel !== "") {
      writer.uint32(26).string(message.strModel);
    }
    if (message.strONVIFAddress !== "") {
      writer.uint32(34).string(message.strONVIFAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkCamSearchedNotify {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCamSearchedNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strIp = reader.string();
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

          message.strModel = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.strONVIFAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkCamSearchedNotify {
    return {
      strIp: isSet(object.strIp) ? globalThis.String(object.strIp) : "",
      strPort: isSet(object.strPort) ? globalThis.String(object.strPort) : "",
      strModel: isSet(object.strModel)
        ? globalThis.String(object.strModel)
        : "",
      strONVIFAddress: isSet(object.strONVIFAddress)
        ? globalThis.String(object.strONVIFAddress)
        : "",
    };
  },

  toJSON(message: LinkCamSearchedNotify): unknown {
    const obj: any = {};
    if (message.strIp !== "") {
      obj.strIp = message.strIp;
    }
    if (message.strPort !== "") {
      obj.strPort = message.strPort;
    }
    if (message.strModel !== "") {
      obj.strModel = message.strModel;
    }
    if (message.strONVIFAddress !== "") {
      obj.strONVIFAddress = message.strONVIFAddress;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCamSearchedNotify>, I>>(
    base?: I,
  ): LinkCamSearchedNotify {
    return LinkCamSearchedNotify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCamSearchedNotify>, I>>(
    object: I,
  ): LinkCamSearchedNotify {
    const message = createBaseLinkCamSearchedNotify();
    message.strIp = object.strIp ?? "";
    message.strPort = object.strPort ?? "";
    message.strModel = object.strModel ?? "";
    message.strONVIFAddress = object.strONVIFAddress ?? "";
    return message;
  },
};

function createBaseLinkEventNotify(): LinkEventNotify {
  return { cEvent: undefined };
}

export const LinkEventNotify = {
  encode(
    message: LinkEventNotify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cEvent !== undefined) {
      VidEvent.encode(message.cEvent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkEventNotify {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkEventNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cEvent = VidEvent.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkEventNotify {
    return {
      cEvent: isSet(object.cEvent)
        ? VidEvent.fromJSON(object.cEvent)
        : undefined,
    };
  },

  toJSON(message: LinkEventNotify): unknown {
    const obj: any = {};
    if (message.cEvent !== undefined) {
      obj.cEvent = VidEvent.toJSON(message.cEvent);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkEventNotify>, I>>(
    base?: I,
  ): LinkEventNotify {
    return LinkEventNotify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkEventNotify>, I>>(
    object: I,
  ): LinkEventNotify {
    const message = createBaseLinkEventNotify();
    message.cEvent =
      object.cEvent !== undefined && object.cEvent !== null
        ? VidEvent.fromPartial(object.cEvent)
        : undefined;
    return message;
  },
};

function createBaseLinkRegSocketNotifyReq(): LinkRegSocketNotifyReq {
  return { strFake: "" };
}

export const LinkRegSocketNotifyReq = {
  encode(
    message: LinkRegSocketNotifyReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.strFake !== "") {
      writer.uint32(10).string(message.strFake);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkRegSocketNotifyReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRegSocketNotifyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.strFake = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkRegSocketNotifyReq {
    return {
      strFake: isSet(object.strFake) ? globalThis.String(object.strFake) : "",
    };
  },

  toJSON(message: LinkRegSocketNotifyReq): unknown {
    const obj: any = {};
    if (message.strFake !== "") {
      obj.strFake = message.strFake;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkRegSocketNotifyReq>, I>>(
    base?: I,
  ): LinkRegSocketNotifyReq {
    return LinkRegSocketNotifyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkRegSocketNotifyReq>, I>>(
    object: I,
  ): LinkRegSocketNotifyReq {
    const message = createBaseLinkRegSocketNotifyReq();
    message.strFake = object.strFake ?? "";
    return message;
  },
};

function createBaseLinkRegSocketNotifyResp(): LinkRegSocketNotifyResp {
  return { bSuccess: false };
}

export const LinkRegSocketNotifyResp = {
  encode(
    message: LinkRegSocketNotifyResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkRegSocketNotifyResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkRegSocketNotifyResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkRegSocketNotifyResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkRegSocketNotifyResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkRegSocketNotifyResp>, I>>(
    base?: I,
  ): LinkRegSocketNotifyResp {
    return LinkRegSocketNotifyResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkRegSocketNotifyResp>, I>>(
    object: I,
  ): LinkRegSocketNotifyResp {
    const message = createBaseLinkRegSocketNotifyResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkVidSocketCntReq(): LinkVidSocketCntReq {
  return { nClientCnt: 0, nStreamCnt: 0 };
}

export const LinkVidSocketCntReq = {
  encode(
    message: LinkVidSocketCntReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nClientCnt !== 0) {
      writer.uint32(8).int32(message.nClientCnt);
    }
    if (message.nStreamCnt !== 0) {
      writer.uint32(16).int32(message.nStreamCnt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkVidSocketCntReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkVidSocketCntReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nClientCnt = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nStreamCnt = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkVidSocketCntReq {
    return {
      nClientCnt: isSet(object.nClientCnt)
        ? globalThis.Number(object.nClientCnt)
        : 0,
      nStreamCnt: isSet(object.nStreamCnt)
        ? globalThis.Number(object.nStreamCnt)
        : 0,
    };
  },

  toJSON(message: LinkVidSocketCntReq): unknown {
    const obj: any = {};
    if (message.nClientCnt !== 0) {
      obj.nClientCnt = Math.round(message.nClientCnt);
    }
    if (message.nStreamCnt !== 0) {
      obj.nStreamCnt = Math.round(message.nStreamCnt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkVidSocketCntReq>, I>>(
    base?: I,
  ): LinkVidSocketCntReq {
    return LinkVidSocketCntReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkVidSocketCntReq>, I>>(
    object: I,
  ): LinkVidSocketCntReq {
    const message = createBaseLinkVidSocketCntReq();
    message.nClientCnt = object.nClientCnt ?? 0;
    message.nStreamCnt = object.nStreamCnt ?? 0;
    return message;
  },
};

function createBaseLinkVidSocketCntResp(): LinkVidSocketCntResp {
  return { bSuccess: false };
}

export const LinkVidSocketCntResp = {
  encode(
    message: LinkVidSocketCntResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkVidSocketCntResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkVidSocketCntResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkVidSocketCntResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkVidSocketCntResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkVidSocketCntResp>, I>>(
    base?: I,
  ): LinkVidSocketCntResp {
    return LinkVidSocketCntResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkVidSocketCntResp>, I>>(
    object: I,
  ): LinkVidSocketCntResp {
    const message = createBaseLinkVidSocketCntResp();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkVidSocketListReq(): LinkVidSocketListReq {
  return { bSuccess: false };
}

export const LinkVidSocketListReq = {
  encode(
    message: LinkVidSocketListReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkVidSocketListReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkVidSocketListReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkVidSocketListReq {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkVidSocketListReq): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkVidSocketListReq>, I>>(
    base?: I,
  ): LinkVidSocketListReq {
    return LinkVidSocketListReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkVidSocketListReq>, I>>(
    object: I,
  ): LinkVidSocketListReq {
    const message = createBaseLinkVidSocketListReq();
    message.bSuccess = object.bSuccess ?? false;
    return message;
  },
};

function createBaseLinkVidSocketListResp(): LinkVidSocketListResp {
  return { cSocketList: undefined, bUserFull: false, bAdminFull: false };
}

export const LinkVidSocketListResp = {
  encode(
    message: LinkVidSocketListResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cSocketList !== undefined) {
      VidSocketList.encode(
        message.cSocketList,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.bUserFull === true) {
      writer.uint32(16).bool(message.bUserFull);
    }
    if (message.bAdminFull === true) {
      writer.uint32(24).bool(message.bAdminFull);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkVidSocketListResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkVidSocketListResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cSocketList = VidSocketList.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.bUserFull = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.bAdminFull = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkVidSocketListResp {
    return {
      cSocketList: isSet(object.cSocketList)
        ? VidSocketList.fromJSON(object.cSocketList)
        : undefined,
      bUserFull: isSet(object.bUserFull)
        ? globalThis.Boolean(object.bUserFull)
        : false,
      bAdminFull: isSet(object.bAdminFull)
        ? globalThis.Boolean(object.bAdminFull)
        : false,
    };
  },

  toJSON(message: LinkVidSocketListResp): unknown {
    const obj: any = {};
    if (message.cSocketList !== undefined) {
      obj.cSocketList = VidSocketList.toJSON(message.cSocketList);
    }
    if (message.bUserFull === true) {
      obj.bUserFull = message.bUserFull;
    }
    if (message.bAdminFull === true) {
      obj.bAdminFull = message.bAdminFull;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkVidSocketListResp>, I>>(
    base?: I,
  ): LinkVidSocketListResp {
    return LinkVidSocketListResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkVidSocketListResp>, I>>(
    object: I,
  ): LinkVidSocketListResp {
    const message = createBaseLinkVidSocketListResp();
    message.cSocketList =
      object.cSocketList !== undefined && object.cSocketList !== null
        ? VidSocketList.fromPartial(object.cSocketList)
        : undefined;
    message.bUserFull = object.bUserFull ?? false;
    message.bAdminFull = object.bAdminFull ?? false;
    return message;
  },
};

function createBaseLinkSocketAddNotify(): LinkSocketAddNotify {
  return { cSocket: undefined };
}

export const LinkSocketAddNotify = {
  encode(
    message: LinkSocketAddNotify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cSocket !== undefined) {
      VidSocket.encode(message.cSocket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkSocketAddNotify {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSocketAddNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cSocket = VidSocket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSocketAddNotify {
    return {
      cSocket: isSet(object.cSocket)
        ? VidSocket.fromJSON(object.cSocket)
        : undefined,
    };
  },

  toJSON(message: LinkSocketAddNotify): unknown {
    const obj: any = {};
    if (message.cSocket !== undefined) {
      obj.cSocket = VidSocket.toJSON(message.cSocket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSocketAddNotify>, I>>(
    base?: I,
  ): LinkSocketAddNotify {
    return LinkSocketAddNotify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSocketAddNotify>, I>>(
    object: I,
  ): LinkSocketAddNotify {
    const message = createBaseLinkSocketAddNotify();
    message.cSocket =
      object.cSocket !== undefined && object.cSocket !== null
        ? VidSocket.fromPartial(object.cSocket)
        : undefined;
    return message;
  },
};

function createBaseLinkSocketDelNotify(): LinkSocketDelNotify {
  return { cSocket: undefined };
}

export const LinkSocketDelNotify = {
  encode(
    message: LinkSocketDelNotify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.cSocket !== undefined) {
      VidSocket.encode(message.cSocket, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkSocketDelNotify {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSocketDelNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cSocket = VidSocket.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSocketDelNotify {
    return {
      cSocket: isSet(object.cSocket)
        ? VidSocket.fromJSON(object.cSocket)
        : undefined,
    };
  },

  toJSON(message: LinkSocketDelNotify): unknown {
    const obj: any = {};
    if (message.cSocket !== undefined) {
      obj.cSocket = VidSocket.toJSON(message.cSocket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSocketDelNotify>, I>>(
    base?: I,
  ): LinkSocketDelNotify {
    return LinkSocketDelNotify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSocketDelNotify>, I>>(
    object: I,
  ): LinkSocketDelNotify {
    const message = createBaseLinkSocketDelNotify();
    message.cSocket =
      object.cSocket !== undefined && object.cSocket !== null
        ? VidSocket.fromPartial(object.cSocket)
        : undefined;
    return message;
  },
};

function createBaseLinkSocketEmptyNotify(): LinkSocketEmptyNotify {
  return { bSuccess: false, nConnectType: 0 };
}

export const LinkSocketEmptyNotify = {
  encode(
    message: LinkSocketEmptyNotify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    if (message.nConnectType !== 0) {
      writer.uint32(16).int32(message.nConnectType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkSocketEmptyNotify {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSocketEmptyNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nConnectType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSocketEmptyNotify {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
      nConnectType: isSet(object.nConnectType)
        ? socketConnectTypeFromJSON(object.nConnectType)
        : 0,
    };
  },

  toJSON(message: LinkSocketEmptyNotify): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    if (message.nConnectType !== 0) {
      obj.nConnectType = socketConnectTypeToJSON(message.nConnectType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSocketEmptyNotify>, I>>(
    base?: I,
  ): LinkSocketEmptyNotify {
    return LinkSocketEmptyNotify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSocketEmptyNotify>, I>>(
    object: I,
  ): LinkSocketEmptyNotify {
    const message = createBaseLinkSocketEmptyNotify();
    message.bSuccess = object.bSuccess ?? false;
    message.nConnectType = object.nConnectType ?? 0;
    return message;
  },
};

function createBaseLinkSocketFullNotify(): LinkSocketFullNotify {
  return { bSuccess: false, nConnectType: 0 };
}

export const LinkSocketFullNotify = {
  encode(
    message: LinkSocketFullNotify,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    if (message.nConnectType !== 0) {
      writer.uint32(16).int32(message.nConnectType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkSocketFullNotify {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSocketFullNotify();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nConnectType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSocketFullNotify {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
      nConnectType: isSet(object.nConnectType)
        ? socketConnectTypeFromJSON(object.nConnectType)
        : 0,
    };
  },

  toJSON(message: LinkSocketFullNotify): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    if (message.nConnectType !== 0) {
      obj.nConnectType = socketConnectTypeToJSON(message.nConnectType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSocketFullNotify>, I>>(
    base?: I,
  ): LinkSocketFullNotify {
    return LinkSocketFullNotify.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSocketFullNotify>, I>>(
    object: I,
  ): LinkSocketFullNotify {
    const message = createBaseLinkSocketFullNotify();
    message.bSuccess = object.bSuccess ?? false;
    message.nConnectType = object.nConnectType ?? 0;
    return message;
  },
};

function createBaseLinkSocketSetSocketReq(): LinkSocketSetSocketReq {
  return { nConnectType: 0 };
}

export const LinkSocketSetSocketReq = {
  encode(
    message: LinkSocketSetSocketReq,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.nConnectType !== 0) {
      writer.uint32(8).int32(message.nConnectType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkSocketSetSocketReq {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSocketSetSocketReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.nConnectType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSocketSetSocketReq {
    return {
      nConnectType: isSet(object.nConnectType)
        ? socketConnectTypeFromJSON(object.nConnectType)
        : 0,
    };
  },

  toJSON(message: LinkSocketSetSocketReq): unknown {
    const obj: any = {};
    if (message.nConnectType !== 0) {
      obj.nConnectType = socketConnectTypeToJSON(message.nConnectType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSocketSetSocketReq>, I>>(
    base?: I,
  ): LinkSocketSetSocketReq {
    return LinkSocketSetSocketReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSocketSetSocketReq>, I>>(
    object: I,
  ): LinkSocketSetSocketReq {
    const message = createBaseLinkSocketSetSocketReq();
    message.nConnectType = object.nConnectType ?? 0;
    return message;
  },
};

function createBaseLinkSocketSetSocketResp(): LinkSocketSetSocketResp {
  return { bSuccess: false };
}

export const LinkSocketSetSocketResp = {
  encode(
    message: LinkSocketSetSocketResp,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bSuccess === true) {
      writer.uint32(8).bool(message.bSuccess);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): LinkSocketSetSocketResp {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkSocketSetSocketResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bSuccess = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LinkSocketSetSocketResp {
    return {
      bSuccess: isSet(object.bSuccess)
        ? globalThis.Boolean(object.bSuccess)
        : false,
    };
  },

  toJSON(message: LinkSocketSetSocketResp): unknown {
    const obj: any = {};
    if (message.bSuccess === true) {
      obj.bSuccess = message.bSuccess;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkSocketSetSocketResp>, I>>(
    base?: I,
  ): LinkSocketSetSocketResp {
    return LinkSocketSetSocketResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkSocketSetSocketResp>, I>>(
    object: I,
  ): LinkSocketSetSocketResp {
    const message = createBaseLinkSocketSetSocketResp();
    message.bSuccess = object.bSuccess ?? false;
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
