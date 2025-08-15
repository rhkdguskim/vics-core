import { LinkCmdType } from "./linkproto";
import {
  LinkLoginReq,
  LinkLoginResp,
  LinkKeepaliveResp,
  LinkRegNotifyResp,
  LinkSetLogLevelResp,
  LinkListCamResp,
  LinkAddCamReq,
  LinkAddCamResp,
  LinkAddDiskReq,
  LinkAddDiskResp,
  LinkAddUserReq,
  LinkAddUserResp,
  LinkCamAddNotify,
  LinkCamIdNotify,
  LinkCamReq,
  LinkCamResp,
  LinkCamSearchStartReq,
  LinkCamSearchStartResp,
  LinkCamSearchStopReq,
  LinkCamSearchStopResp,
  LinkCamSearchedNotify,
  LinkConfLicReq,
  LinkConfLicResp,
  LinkDelCamReq,
  LinkDelCamResp,
  LinkDelDiskReq,
  LinkDelDiskResp,
  LinkEventNotify,
  LinkEventSearchReq,
  LinkEventSearchResp,
  LinkGetLicReq,
  LinkGetLicResp,
  LinkGetStreamListReq,
  LinkGetStreamListResp,
  LinkGetVerReq,
  LinkGetVerResp,
  LinkHandleEventReq,
  LinkHandleEventResp,
  LinkHasRecordReq,
  LinkHasRecordResp,
  LinkKeepaliveReq,
  LinkListCamReq,
  LinkMiChangeStreamCmd,
  LinkMiPlayBackCmd,
  LinkMiPlayNextFrameCmd,
  LinkMiPlayPauseCmd,
  LinkMiPlayPreFrameCmd,
  LinkMiPlayResumeCmd,
  LinkMiPlaySeekCmd,
  LinkMiPlaySpeedCmd,
  LinkMiPlayStopCmd,
  LinkMiStartLiveCmd,
  LinkMiStopLiveCmd,
  LinkPtzCmd,
  LinkRegEventReq,
  LinkRegEventResp,
  LinkRegNotifyReq,
  LinkRegSocketNotifyReq,
  LinkRegSocketNotifyResp,
  LinkSearchRecordReq,
  LinkSearchRecordResp,
  LinkSetCamSchedReq,
  LinkSetCamSchedResp,
  LinkSetLogLevelReq,
  LinkSocketAddNotify,
  LinkSocketDelNotify,
  LinkSocketEmptyNotify,
  LinkSocketFullNotify,
  LinkSocketSetSocketReq,
  LinkSocketSetSocketResp,
  LinkSysVidDiskListReq,
  LinkSysVidDiskListResp,
  LinkUnRegEventReq,
  LinkUnRegEventResp,
  LinkUpdateDiskLimitReq,
  LinkUpdateDiskLimitResp,
  LinkVidDiskListReq,
  LinkVidDiskListResp,
  LinkVidSocketCntReq,
  LinkVidSocketCntResp,
  LinkVidSocketListReq,
  LinkVidSocketListResp,
} from "./linksystem";
import { VidCamera } from "./vidconf";

export interface VICSDataResponse {
  type: LinkCmdType;
  loginResp?: LinkLoginResp;
  keepaliveResp?: LinkKeepaliveResp;
  regNotifyResp?: LinkRegNotifyResp;
  setLogLevelResp?: LinkSetLogLevelResp;
  camListResp?: LinkListCamResp;
  camResp?: LinkCamResp;
  addCamResp?: LinkAddCamResp;
  delCamResp?: LinkDelCamResp;
  setCamSchedResp?: LinkSetCamSchedResp;
  getStreamListResp?: LinkGetStreamListResp;
  diskListResp?: LinkVidDiskListResp;
  sysDiskListResp?: LinkSysVidDiskListResp;
  addDiskResp?: LinkAddDiskResp;
  delDiskResp?: LinkDelDiskResp;
  diskLimitResp?: LinkUpdateDiskLimitResp;
  licResp?: LinkGetLicResp;
  verResp?: LinkGetVerResp;
  confLicResp?: LinkConfLicResp;
  addUserResp?: LinkAddUserResp;
  hasRecResp?: LinkHasRecordResp;
  searchRecResp?: LinkSearchRecordResp;
  MistopLiveCmd?: LinkMiStopLiveCmd;
  MiplayBackCmd?: LinkMiPlayBackCmd;
  MiplayPauseCmd?: LinkMiPlayPauseCmd;
  MiplayResumeCmd?: LinkMiPlayResumeCmd;
  MiplaySeekCmd?: LinkMiPlaySeekCmd;
  MiplayStopCmd?: LinkMiPlayStopCmd;
  MiplaySpeedCmd?: LinkMiPlaySpeedCmd;
  MiplayNextFrameCmd?: LinkMiPlayNextFrameCmd;
  MiplayPreFrameCmd?: LinkMiPlayPreFrameCmd;
  MichangeStreamCmd?: LinkMiChangeStreamCmd;
  ptzCmd?: LinkPtzCmd;
  camSearchStartResp?: LinkCamSearchStartResp;
  camSearchStopResp?: LinkCamSearchStopResp;
  regEventResp?: LinkRegEventResp;
  unRegEventResp?: LinkUnRegEventResp;
  eventSearchResp?: LinkEventSearchResp;
  handleEventResp?: LinkHandleEventResp;
  camAddNotify?: LinkCamAddNotify;
  camIdNotify?: LinkCamIdNotify;
  camSearchedNotify?: LinkCamSearchedNotify;
  evnetNotify?: LinkEventNotify;
  regSocketNotifyResp?: LinkRegSocketNotifyResp;
  socketCntResp?: LinkVidSocketCntResp;
  socketListResp?: LinkVidSocketListResp;
  socketAddNotify?: LinkSocketAddNotify;
  socketDelNotify?: LinkSocketDelNotify;
  socketEmptyNotify?: LinkSocketEmptyNotify;
  socketFullNotify?: LinkSocketFullNotify;
  socketSetSocketResp?: LinkSocketSetSocketResp;
}

export interface VICSDataRequest {
  type: LinkCmdType;
  loginReq?: LinkLoginReq;
  keepaliveReq?: LinkKeepaliveReq;
  regNotifyReq?: LinkRegNotifyReq;
  setLogLevelReq?: LinkSetLogLevelReq;
  camListReq?: LinkListCamReq;
  camReq?: LinkCamReq;
  addCamReq?: LinkAddCamReq;
  delCamReq?: LinkDelCamReq;
  setCamSchedReq?: LinkSetCamSchedReq;
  getStreamListReq?: LinkGetStreamListReq;
  diskListReq?: LinkVidDiskListReq;
  sysDiskListReq?: LinkSysVidDiskListReq;
  addDiskReq?: LinkAddDiskReq;
  delDiskReq?: LinkDelDiskReq;
  diskLimitReq?: LinkUpdateDiskLimitReq;
  licReq?: LinkGetLicReq;
  verReq?: LinkGetVerReq;
  confLicReq?: LinkConfLicReq;
  addUserReq?: LinkAddUserReq;
  hasRecReq?: LinkHasRecordReq;
  searchRecReq?: LinkSearchRecordReq;
  MistartLiveCmd?: LinkMiStartLiveCmd;
  MistopLiveCmd?: LinkMiStopLiveCmd;
  MiplayBackCmd?: LinkMiPlayBackCmd;
  MiplayPauseCmd?: LinkMiPlayPauseCmd;
  MiplayResumeCmd?: LinkMiPlayResumeCmd;
  MiplaySeekCmd?: LinkMiPlaySeekCmd;
  MiplayStopCmd?: LinkMiPlayStopCmd;
  MiplaySpeedCmd?: LinkMiPlaySpeedCmd;
  MiplayNextFrameCmd?: LinkMiPlayNextFrameCmd;
  MiplayPreFrameCmd?: LinkMiPlayPreFrameCmd;
  MichangeStreamCmd?: LinkMiChangeStreamCmd;
  ptzCmd?: LinkPtzCmd;
  camSearchStartReq?: LinkCamSearchStartReq;
  camSearchStopReq?: LinkCamSearchStopReq;
  regEventReq?: LinkRegEventReq;
  unRegEventReq?: LinkUnRegEventReq;
  eventSearchReq?: LinkEventSearchReq;
  handleEventReq?: LinkHandleEventReq;
  regSocketNotifyReq?: LinkRegSocketNotifyReq;
  socketCntReq?: LinkVidSocketCntReq;
  socketListReq?: LinkVidSocketListReq;
  socketSetSocketReq?: LinkSocketSetSocketReq;
}

export enum CodecType {
  CODEC_PCMU = 0,
  CODEC_PCMA = 8,
  CODEC_G711A = 19,
  CODEC_G711U = 20,
  CODEC_H264 = 96,
  CODEC_H265 = 98,
  CODEC_MPEG4 = 97,
  CODEC_MJPEG = 26,
  CODEC_AAC = 100,
  CODEC_NONE = 254,
  CODEC_LAST = 1000,
}

export interface InfoFrameP {
  video: number; // CodecType
  audio: number; // CodecType
  padding1: number;
}

export interface InfoFrameI {
  video: number; // CodecType
  audio: number; // CodecType
  padding0: number;
  vFps: number;
  vWidth: number;
  vHeight: number;
  aSampleRate: number;
  aSampleBit: number;
  aChannels: number;
  padding1: number;
  padding2: number;
  padding3: number;
  padding4: number;
  padding5: number;
}

export interface FrameHeader {
  streamType: VideoStreamType;
  frameType: VideoFrameType;
  seq: number;
  secs: number;
  msecs: number;
  dataLen: number;
  UUID: string;
}

export interface VideoData {
  frameHeader: FrameHeader;
  videodata: Uint8Array;
}

export enum VideoStreamType {
  VIDEO_STREAM_VIDEO = 1,
  VIDEO_STREAM_AUDIO,
  VIDEO_STREAM_INFO,
  VIDEO_STREAM_TEXT,
  VIDEO_STREAM_SDP,
  VIDEO_STREAM_END,
  VIDEO_STREAM_LAST,
}

export enum VideoFrameType {
  VIDEO_FRM_NONE = 0,
  VIDEO_FRM_I = 1,
  VIDEO_FRM_P = 2,
  VIDEO_FRM_B = 3,
  VIDEO_FRM_INFO = 4,
  VIDEO_FRM_AUDIO = 5,
  VIDEO_FRM_LAST = 6,
}
