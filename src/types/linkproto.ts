/* eslint-disable */
import * as _m0 from "protobufjs/minimal.js";
import {
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
  LinkCamSearchedNotify,
  LinkCamSearchStartReq,
  LinkCamSearchStartResp,
  LinkCamSearchStopReq,
  LinkCamSearchStopResp,
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
  LinkKeepaliveResp,
  LinkListCamReq,
  LinkListCamResp,
  LinkLoginReq,
  LinkLoginResp,
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
  LinkMiVideoData,
  LinkPlayBackCmd,
  LinkPlayNextFrameCmd,
  LinkPlayPauseCmd,
  LinkPlayPreFrameCmd,
  LinkPlayResumeCmd,
  LinkPlaySeekCmd,
  LinkPlaySpeedCmd,
  LinkPlayStopCmd,
  LinkPtzCmd,
  LinkRegEventReq,
  LinkRegEventResp,
  LinkRegNotifyReq,
  LinkRegNotifyResp,
  LinkRegSocketNotifyReq,
  LinkRegSocketNotifyResp,
  LinkSearchRecordReq,
  LinkSearchRecordResp,
  LinkSetCamSchedReq,
  LinkSetCamSchedResp,
  LinkSetLogLevelReq,
  LinkSetLogLevelResp,
  LinkSocketAddNotify,
  LinkSocketDelNotify,
  LinkSocketEmptyNotify,
  LinkSocketFullNotify,
  LinkSocketSetSocketReq,
  LinkSocketSetSocketResp,
  LinkStartLiveCmd,
  LinkStopLiveCmd,
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

export const protobufPackage = "Link";

export enum LinkCmdType {
  LINK_CMD_ZERO = 0,
  LINK_CMD_LOGIN_REQ = 101,
  LINK_CMD_LOGIN_RESP = 102,
  LINK_CMD_KEEPALIVE_REQ = 103,
  LINK_CMD_KEEPALIVE_RESP = 104,
  LINK_CMD_REG_NOTIFY_REQ = 105,
  LINK_CMD_REG_NOTIFY_RESP = 106,
  /**
   * LINK_CMD_LOG_LEVEL_REQ - MIRERO
   * Log Level
   */
  LINK_CMD_LOG_LEVEL_REQ = 107,
  LINK_CMD_LOG_LEVEL_RESP = 108,
  /** LINK_CMD_CAM_LIST_REQ - Cam */
  LINK_CMD_CAM_LIST_REQ = 201,
  LINK_CMD_CAM_LIST_RESP = 202,
  LINK_CMD_CAM_REQ = 203,
  LINK_CMD_CAM_RESP = 204,
  LINK_CMD_ADD_CAM_REQ = 205,
  LINK_CMD_ADD_CAM_RESP = 206,
  LINK_CMD_DEL_CAM_REQ = 207,
  LINK_CMD_DEL_CAM_RESP = 208,
  LINK_CMD_SET_CAM_SCHED_REQ = 209,
  LINK_CMD_SET_CAM_SCHED_RESP = 210,
  LINK_CMD_GET_STREAM_LIST_REQ = 211,
  LINK_CMD_GET_STREAM_LIST_RESP = 212,
  /** LINK_CMD_DISK_LIST_REQ - Disk */
  LINK_CMD_DISK_LIST_REQ = 301,
  LINK_CMD_DISK_LIST_RESP = 302,
  LINK_CMD_SYS_DISK_LIST_REQ = 303,
  LINK_CMD_SYS_DISK_LIST_RESP = 304,
  LINK_CMD_ADD_DISK_REQ = 305,
  LINK_CMD_ADD_DISK_RESP = 306,
  LINK_CMD_DEL_DISK_REQ = 307,
  LINK_CMD_DEL_DISK_RESP = 308,
  LINK_CMD_UPDATE_DISK_LIMIT_REQ = 309,
  LINK_CMD_UPDATE_DISK_LIMIT_RESP = 310,
  /** LINK_CMD_GET_LIC_REQ - License & Version */
  LINK_CMD_GET_LIC_REQ = 401,
  LINK_CMD_GET_LIC_RESP = 402,
  LINK_CMD_GET_VER_REQ = 403,
  LINK_CMD_GET_VER_RESP = 404,
  LINK_CMD_CONF_LIC_REQ = 405,
  LINK_CMD_CONF_LIC_RESP = 406,
  /** LINK_CMD_ADD_USER_REQ - User */
  LINK_CMD_ADD_USER_REQ = 501,
  LINK_CMD_ADD_USER_RESP = 502,
  /** LINK_CMD_HAS_RECORD_REQ - Search */
  LINK_CMD_HAS_RECORD_REQ = 601,
  LINK_CMD_HAS_RECORD_RESP = 602,
  LINK_CMD_SEARCH_RECORD_REQ = 603,
  LINK_CMD_SEARCH_RECORD_RESP = 604,
  /** LINK_CMD_START_LIVE_CMD - Stream one way command */
  LINK_CMD_START_LIVE_CMD = 701,
  LINK_CMD_STOP_LIVE_CMD = 702,
  LINK_CMD_PLAY_BACK_CMD = 703,
  LINK_CMD_PLAY_PAUSE_CMD = 704,
  LINK_CMD_PLAY_RESUME_CMD = 705,
  LINK_CMD_PLAY_SEEK_CMD = 706,
  LINK_CMD_PLAY_STOP_CMD = 707,
  LINK_CMD_PLAY_SPEED_CMD = 708,
  LINK_CMD_PLAY_NEXT_FRAME_CMD = 709,
  LINK_CMD_PLAY_PRE_FRAME_CMD = 710,
  /** LINK_MI_CMD_VIDEO_DATA - Stream one way command */
  LINK_MI_CMD_VIDEO_DATA = 711,
  LINK_MI_CMD_START_LIVE_CMD = 712,
  LINK_MI_CMD_STOP_LIVE_CMD = 713,
  LINK_MI_CMD_PLAY_BACK_CMD = 714,
  LINK_MI_CMD_PLAY_PAUSE_CMD = 715,
  LINK_MI_CMD_PLAY_RESUME_CMD = 716,
  LINK_MI_CMD_PLAY_SEEK_CMD = 717,
  LINK_MI_CMD_PLAY_STOP_CMD = 718,
  LINK_MI_CMD_PLAY_SPEED_CMD = 719,
  LINK_MI_CMD_PLAY_NEXT_FRAME_CMD = 720,
  LINK_MI_CMD_PLAY_PRE_FRAME_CMD = 721,
  LINK_MI_CMD_CHANGE_STREAM_CMD = 722,
  /** LINK_CMD_PTZ_CMD - PTZ one way command */
  LINK_CMD_PTZ_CMD = 801,
  /** LINK_CMD_CAM_SEARCH_START_REQ - Cam Search & Event */
  LINK_CMD_CAM_SEARCH_START_REQ = 901,
  LINK_CMD_CAM_SEARCH_START_RESP = 902,
  LINK_CMD_CAM_SEARCH_STOP_REQ = 903,
  LINK_CMD_CAM_SEARCH_STOP_RESP = 904,
  LINK_CMD_REG_EVENT_REQ = 905,
  LINK_CMD_REG_EVENT_RESP = 906,
  LINK_CMD_UNREG_EVENT_REQ = 907,
  LINK_CMD_UNREG_EVENT_RESP = 908,
  LINK_CMD_EVENT_SEARCH_REQ = 909,
  LINK_CMD_EVENT_SEARCH_RESP = 910,
  LINK_CMD_HANDLE_EVENT_REQ = 911,
  LINK_CMD_HANDLE_EVENT_RESP = 912,
  /** LINK_CMD_CAM_ADD_NOTIFY - Notify message */
  LINK_CMD_CAM_ADD_NOTIFY = 10001,
  LINK_CMD_CAM_DEL_NOTIFY = 10002,
  LINK_CMD_CAM_ONLINE_NOTIFY = 10003,
  LINK_CMD_CAM_OFFLINE_NOTIFY = 10004,
  LINK_CMD_CAM_REC_ON_NOTIFY = 10005,
  LINK_CMD_CAM_REC_OFF_NOTIFY = 10006,
  LINK_CMD_CAM_SEARCHED_NOTIFY = 10007,
  LINK_CMD_EVENT_NOTIFY = 10008,
  /** LINK_CMD_REG_SOCKET_NOTIFY_REQ - Socket message */
  LINK_CMD_REG_SOCKET_NOTIFY_REQ = 20000,
  LINK_CMD_REG_SOCKET_NOTIFY_RESP = 20001,
  LINK_CMD_SET_SOCKET_CNT_REQ = 20002,
  LINK_CMD_SET_SOCKET_CNT_RESP = 20003,
  LINK_CMD_SOCKET_LIST_REQ = 20004,
  LINK_CMD_SOCKET_LIST_RESP = 20005,
  LINK_CMD_SOCKET_ADD_NOTIFY = 20006,
  LINK_CMD_SOCKET_DEL_NOTIFY = 20007,
  LINK_CMD_SOCKET_EMPTY_NOTIFY = 20008,
  LINK_CMD_SOCKET_FULL_NOTIFY = 20009,
  LINK_CMD_SET_SOCKET_REQ = 20010,
  LINK_CMD_SET_SOCKET_RESP = 20011,
  UNRECOGNIZED = -1,
}

export function linkCmdTypeFromJSON(object: any): LinkCmdType {
  switch (object) {
    case 0:
    case "LINK_CMD_ZERO":
      return LinkCmdType.LINK_CMD_ZERO;
    case 101:
    case "LINK_CMD_LOGIN_REQ":
      return LinkCmdType.LINK_CMD_LOGIN_REQ;
    case 102:
    case "LINK_CMD_LOGIN_RESP":
      return LinkCmdType.LINK_CMD_LOGIN_RESP;
    case 103:
    case "LINK_CMD_KEEPALIVE_REQ":
      return LinkCmdType.LINK_CMD_KEEPALIVE_REQ;
    case 104:
    case "LINK_CMD_KEEPALIVE_RESP":
      return LinkCmdType.LINK_CMD_KEEPALIVE_RESP;
    case 105:
    case "LINK_CMD_REG_NOTIFY_REQ":
      return LinkCmdType.LINK_CMD_REG_NOTIFY_REQ;
    case 106:
    case "LINK_CMD_REG_NOTIFY_RESP":
      return LinkCmdType.LINK_CMD_REG_NOTIFY_RESP;
    case 107:
    case "LINK_CMD_LOG_LEVEL_REQ":
      return LinkCmdType.LINK_CMD_LOG_LEVEL_REQ;
    case 108:
    case "LINK_CMD_LOG_LEVEL_RESP":
      return LinkCmdType.LINK_CMD_LOG_LEVEL_RESP;
    case 201:
    case "LINK_CMD_CAM_LIST_REQ":
      return LinkCmdType.LINK_CMD_CAM_LIST_REQ;
    case 202:
    case "LINK_CMD_CAM_LIST_RESP":
      return LinkCmdType.LINK_CMD_CAM_LIST_RESP;
    case 203:
    case "LINK_CMD_CAM_REQ":
      return LinkCmdType.LINK_CMD_CAM_REQ;
    case 204:
    case "LINK_CMD_CAM_RESP":
      return LinkCmdType.LINK_CMD_CAM_RESP;
    case 205:
    case "LINK_CMD_ADD_CAM_REQ":
      return LinkCmdType.LINK_CMD_ADD_CAM_REQ;
    case 206:
    case "LINK_CMD_ADD_CAM_RESP":
      return LinkCmdType.LINK_CMD_ADD_CAM_RESP;
    case 207:
    case "LINK_CMD_DEL_CAM_REQ":
      return LinkCmdType.LINK_CMD_DEL_CAM_REQ;
    case 208:
    case "LINK_CMD_DEL_CAM_RESP":
      return LinkCmdType.LINK_CMD_DEL_CAM_RESP;
    case 209:
    case "LINK_CMD_SET_CAM_SCHED_REQ":
      return LinkCmdType.LINK_CMD_SET_CAM_SCHED_REQ;
    case 210:
    case "LINK_CMD_SET_CAM_SCHED_RESP":
      return LinkCmdType.LINK_CMD_SET_CAM_SCHED_RESP;
    case 211:
    case "LINK_CMD_GET_STREAM_LIST_REQ":
      return LinkCmdType.LINK_CMD_GET_STREAM_LIST_REQ;
    case 212:
    case "LINK_CMD_GET_STREAM_LIST_RESP":
      return LinkCmdType.LINK_CMD_GET_STREAM_LIST_RESP;
    case 301:
    case "LINK_CMD_DISK_LIST_REQ":
      return LinkCmdType.LINK_CMD_DISK_LIST_REQ;
    case 302:
    case "LINK_CMD_DISK_LIST_RESP":
      return LinkCmdType.LINK_CMD_DISK_LIST_RESP;
    case 303:
    case "LINK_CMD_SYS_DISK_LIST_REQ":
      return LinkCmdType.LINK_CMD_SYS_DISK_LIST_REQ;
    case 304:
    case "LINK_CMD_SYS_DISK_LIST_RESP":
      return LinkCmdType.LINK_CMD_SYS_DISK_LIST_RESP;
    case 305:
    case "LINK_CMD_ADD_DISK_REQ":
      return LinkCmdType.LINK_CMD_ADD_DISK_REQ;
    case 306:
    case "LINK_CMD_ADD_DISK_RESP":
      return LinkCmdType.LINK_CMD_ADD_DISK_RESP;
    case 307:
    case "LINK_CMD_DEL_DISK_REQ":
      return LinkCmdType.LINK_CMD_DEL_DISK_REQ;
    case 308:
    case "LINK_CMD_DEL_DISK_RESP":
      return LinkCmdType.LINK_CMD_DEL_DISK_RESP;
    case 309:
    case "LINK_CMD_UPDATE_DISK_LIMIT_REQ":
      return LinkCmdType.LINK_CMD_UPDATE_DISK_LIMIT_REQ;
    case 310:
    case "LINK_CMD_UPDATE_DISK_LIMIT_RESP":
      return LinkCmdType.LINK_CMD_UPDATE_DISK_LIMIT_RESP;
    case 401:
    case "LINK_CMD_GET_LIC_REQ":
      return LinkCmdType.LINK_CMD_GET_LIC_REQ;
    case 402:
    case "LINK_CMD_GET_LIC_RESP":
      return LinkCmdType.LINK_CMD_GET_LIC_RESP;
    case 403:
    case "LINK_CMD_GET_VER_REQ":
      return LinkCmdType.LINK_CMD_GET_VER_REQ;
    case 404:
    case "LINK_CMD_GET_VER_RESP":
      return LinkCmdType.LINK_CMD_GET_VER_RESP;
    case 405:
    case "LINK_CMD_CONF_LIC_REQ":
      return LinkCmdType.LINK_CMD_CONF_LIC_REQ;
    case 406:
    case "LINK_CMD_CONF_LIC_RESP":
      return LinkCmdType.LINK_CMD_CONF_LIC_RESP;
    case 501:
    case "LINK_CMD_ADD_USER_REQ":
      return LinkCmdType.LINK_CMD_ADD_USER_REQ;
    case 502:
    case "LINK_CMD_ADD_USER_RESP":
      return LinkCmdType.LINK_CMD_ADD_USER_RESP;
    case 601:
    case "LINK_CMD_HAS_RECORD_REQ":
      return LinkCmdType.LINK_CMD_HAS_RECORD_REQ;
    case 602:
    case "LINK_CMD_HAS_RECORD_RESP":
      return LinkCmdType.LINK_CMD_HAS_RECORD_RESP;
    case 603:
    case "LINK_CMD_SEARCH_RECORD_REQ":
      return LinkCmdType.LINK_CMD_SEARCH_RECORD_REQ;
    case 604:
    case "LINK_CMD_SEARCH_RECORD_RESP":
      return LinkCmdType.LINK_CMD_SEARCH_RECORD_RESP;
    case 701:
    case "LINK_CMD_START_LIVE_CMD":
      return LinkCmdType.LINK_CMD_START_LIVE_CMD;
    case 702:
    case "LINK_CMD_STOP_LIVE_CMD":
      return LinkCmdType.LINK_CMD_STOP_LIVE_CMD;
    case 703:
    case "LINK_CMD_PLAY_BACK_CMD":
      return LinkCmdType.LINK_CMD_PLAY_BACK_CMD;
    case 704:
    case "LINK_CMD_PLAY_PAUSE_CMD":
      return LinkCmdType.LINK_CMD_PLAY_PAUSE_CMD;
    case 705:
    case "LINK_CMD_PLAY_RESUME_CMD":
      return LinkCmdType.LINK_CMD_PLAY_RESUME_CMD;
    case 706:
    case "LINK_CMD_PLAY_SEEK_CMD":
      return LinkCmdType.LINK_CMD_PLAY_SEEK_CMD;
    case 707:
    case "LINK_CMD_PLAY_STOP_CMD":
      return LinkCmdType.LINK_CMD_PLAY_STOP_CMD;
    case 708:
    case "LINK_CMD_PLAY_SPEED_CMD":
      return LinkCmdType.LINK_CMD_PLAY_SPEED_CMD;
    case 709:
    case "LINK_CMD_PLAY_NEXT_FRAME_CMD":
      return LinkCmdType.LINK_CMD_PLAY_NEXT_FRAME_CMD;
    case 710:
    case "LINK_CMD_PLAY_PRE_FRAME_CMD":
      return LinkCmdType.LINK_CMD_PLAY_PRE_FRAME_CMD;
    case 711:
    case "LINK_MI_CMD_VIDEO_DATA":
      return LinkCmdType.LINK_MI_CMD_VIDEO_DATA;
    case 712:
    case "LINK_MI_CMD_START_LIVE_CMD":
      return LinkCmdType.LINK_MI_CMD_START_LIVE_CMD;
    case 713:
    case "LINK_MI_CMD_STOP_LIVE_CMD":
      return LinkCmdType.LINK_MI_CMD_STOP_LIVE_CMD;
    case 714:
    case "LINK_MI_CMD_PLAY_BACK_CMD":
      return LinkCmdType.LINK_MI_CMD_PLAY_BACK_CMD;
    case 715:
    case "LINK_MI_CMD_PLAY_PAUSE_CMD":
      return LinkCmdType.LINK_MI_CMD_PLAY_PAUSE_CMD;
    case 716:
    case "LINK_MI_CMD_PLAY_RESUME_CMD":
      return LinkCmdType.LINK_MI_CMD_PLAY_RESUME_CMD;
    case 717:
    case "LINK_MI_CMD_PLAY_SEEK_CMD":
      return LinkCmdType.LINK_MI_CMD_PLAY_SEEK_CMD;
    case 718:
    case "LINK_MI_CMD_PLAY_STOP_CMD":
      return LinkCmdType.LINK_MI_CMD_PLAY_STOP_CMD;
    case 719:
    case "LINK_MI_CMD_PLAY_SPEED_CMD":
      return LinkCmdType.LINK_MI_CMD_PLAY_SPEED_CMD;
    case 720:
    case "LINK_MI_CMD_PLAY_NEXT_FRAME_CMD":
      return LinkCmdType.LINK_MI_CMD_PLAY_NEXT_FRAME_CMD;
    case 721:
    case "LINK_MI_CMD_PLAY_PRE_FRAME_CMD":
      return LinkCmdType.LINK_MI_CMD_PLAY_PRE_FRAME_CMD;
    case 722:
    case "LINK_MI_CMD_CHANGE_STREAM_CMD":
      return LinkCmdType.LINK_MI_CMD_CHANGE_STREAM_CMD;
    case 801:
    case "LINK_CMD_PTZ_CMD":
      return LinkCmdType.LINK_CMD_PTZ_CMD;
    case 901:
    case "LINK_CMD_CAM_SEARCH_START_REQ":
      return LinkCmdType.LINK_CMD_CAM_SEARCH_START_REQ;
    case 902:
    case "LINK_CMD_CAM_SEARCH_START_RESP":
      return LinkCmdType.LINK_CMD_CAM_SEARCH_START_RESP;
    case 903:
    case "LINK_CMD_CAM_SEARCH_STOP_REQ":
      return LinkCmdType.LINK_CMD_CAM_SEARCH_STOP_REQ;
    case 904:
    case "LINK_CMD_CAM_SEARCH_STOP_RESP":
      return LinkCmdType.LINK_CMD_CAM_SEARCH_STOP_RESP;
    case 905:
    case "LINK_CMD_REG_EVENT_REQ":
      return LinkCmdType.LINK_CMD_REG_EVENT_REQ;
    case 906:
    case "LINK_CMD_REG_EVENT_RESP":
      return LinkCmdType.LINK_CMD_REG_EVENT_RESP;
    case 907:
    case "LINK_CMD_UNREG_EVENT_REQ":
      return LinkCmdType.LINK_CMD_UNREG_EVENT_REQ;
    case 908:
    case "LINK_CMD_UNREG_EVENT_RESP":
      return LinkCmdType.LINK_CMD_UNREG_EVENT_RESP;
    case 909:
    case "LINK_CMD_EVENT_SEARCH_REQ":
      return LinkCmdType.LINK_CMD_EVENT_SEARCH_REQ;
    case 910:
    case "LINK_CMD_EVENT_SEARCH_RESP":
      return LinkCmdType.LINK_CMD_EVENT_SEARCH_RESP;
    case 911:
    case "LINK_CMD_HANDLE_EVENT_REQ":
      return LinkCmdType.LINK_CMD_HANDLE_EVENT_REQ;
    case 912:
    case "LINK_CMD_HANDLE_EVENT_RESP":
      return LinkCmdType.LINK_CMD_HANDLE_EVENT_RESP;
    case 10001:
    case "LINK_CMD_CAM_ADD_NOTIFY":
      return LinkCmdType.LINK_CMD_CAM_ADD_NOTIFY;
    case 10002:
    case "LINK_CMD_CAM_DEL_NOTIFY":
      return LinkCmdType.LINK_CMD_CAM_DEL_NOTIFY;
    case 10003:
    case "LINK_CMD_CAM_ONLINE_NOTIFY":
      return LinkCmdType.LINK_CMD_CAM_ONLINE_NOTIFY;
    case 10004:
    case "LINK_CMD_CAM_OFFLINE_NOTIFY":
      return LinkCmdType.LINK_CMD_CAM_OFFLINE_NOTIFY;
    case 10005:
    case "LINK_CMD_CAM_REC_ON_NOTIFY":
      return LinkCmdType.LINK_CMD_CAM_REC_ON_NOTIFY;
    case 10006:
    case "LINK_CMD_CAM_REC_OFF_NOTIFY":
      return LinkCmdType.LINK_CMD_CAM_REC_OFF_NOTIFY;
    case 10007:
    case "LINK_CMD_CAM_SEARCHED_NOTIFY":
      return LinkCmdType.LINK_CMD_CAM_SEARCHED_NOTIFY;
    case 10008:
    case "LINK_CMD_EVENT_NOTIFY":
      return LinkCmdType.LINK_CMD_EVENT_NOTIFY;
    case 20000:
    case "LINK_CMD_REG_SOCKET_NOTIFY_REQ":
      return LinkCmdType.LINK_CMD_REG_SOCKET_NOTIFY_REQ;
    case 20001:
    case "LINK_CMD_REG_SOCKET_NOTIFY_RESP":
      return LinkCmdType.LINK_CMD_REG_SOCKET_NOTIFY_RESP;
    case 20002:
    case "LINK_CMD_SET_SOCKET_CNT_REQ":
      return LinkCmdType.LINK_CMD_SET_SOCKET_CNT_REQ;
    case 20003:
    case "LINK_CMD_SET_SOCKET_CNT_RESP":
      return LinkCmdType.LINK_CMD_SET_SOCKET_CNT_RESP;
    case 20004:
    case "LINK_CMD_SOCKET_LIST_REQ":
      return LinkCmdType.LINK_CMD_SOCKET_LIST_REQ;
    case 20005:
    case "LINK_CMD_SOCKET_LIST_RESP":
      return LinkCmdType.LINK_CMD_SOCKET_LIST_RESP;
    case 20006:
    case "LINK_CMD_SOCKET_ADD_NOTIFY":
      return LinkCmdType.LINK_CMD_SOCKET_ADD_NOTIFY;
    case 20007:
    case "LINK_CMD_SOCKET_DEL_NOTIFY":
      return LinkCmdType.LINK_CMD_SOCKET_DEL_NOTIFY;
    case 20008:
    case "LINK_CMD_SOCKET_EMPTY_NOTIFY":
      return LinkCmdType.LINK_CMD_SOCKET_EMPTY_NOTIFY;
    case 20009:
    case "LINK_CMD_SOCKET_FULL_NOTIFY":
      return LinkCmdType.LINK_CMD_SOCKET_FULL_NOTIFY;
    case 20010:
    case "LINK_CMD_SET_SOCKET_REQ":
      return LinkCmdType.LINK_CMD_SET_SOCKET_REQ;
    case 20011:
    case "LINK_CMD_SET_SOCKET_RESP":
      return LinkCmdType.LINK_CMD_SET_SOCKET_RESP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LinkCmdType.UNRECOGNIZED;
  }
}

export function linkCmdTypeToJSON(object: LinkCmdType): string {
  switch (object) {
    case LinkCmdType.LINK_CMD_ZERO:
      return "LINK_CMD_ZERO";
    case LinkCmdType.LINK_CMD_LOGIN_REQ:
      return "LINK_CMD_LOGIN_REQ";
    case LinkCmdType.LINK_CMD_LOGIN_RESP:
      return "LINK_CMD_LOGIN_RESP";
    case LinkCmdType.LINK_CMD_KEEPALIVE_REQ:
      return "LINK_CMD_KEEPALIVE_REQ";
    case LinkCmdType.LINK_CMD_KEEPALIVE_RESP:
      return "LINK_CMD_KEEPALIVE_RESP";
    case LinkCmdType.LINK_CMD_REG_NOTIFY_REQ:
      return "LINK_CMD_REG_NOTIFY_REQ";
    case LinkCmdType.LINK_CMD_REG_NOTIFY_RESP:
      return "LINK_CMD_REG_NOTIFY_RESP";
    case LinkCmdType.LINK_CMD_LOG_LEVEL_REQ:
      return "LINK_CMD_LOG_LEVEL_REQ";
    case LinkCmdType.LINK_CMD_LOG_LEVEL_RESP:
      return "LINK_CMD_LOG_LEVEL_RESP";
    case LinkCmdType.LINK_CMD_CAM_LIST_REQ:
      return "LINK_CMD_CAM_LIST_REQ";
    case LinkCmdType.LINK_CMD_CAM_LIST_RESP:
      return "LINK_CMD_CAM_LIST_RESP";
    case LinkCmdType.LINK_CMD_CAM_REQ:
      return "LINK_CMD_CAM_REQ";
    case LinkCmdType.LINK_CMD_CAM_RESP:
      return "LINK_CMD_CAM_RESP";
    case LinkCmdType.LINK_CMD_ADD_CAM_REQ:
      return "LINK_CMD_ADD_CAM_REQ";
    case LinkCmdType.LINK_CMD_ADD_CAM_RESP:
      return "LINK_CMD_ADD_CAM_RESP";
    case LinkCmdType.LINK_CMD_DEL_CAM_REQ:
      return "LINK_CMD_DEL_CAM_REQ";
    case LinkCmdType.LINK_CMD_DEL_CAM_RESP:
      return "LINK_CMD_DEL_CAM_RESP";
    case LinkCmdType.LINK_CMD_SET_CAM_SCHED_REQ:
      return "LINK_CMD_SET_CAM_SCHED_REQ";
    case LinkCmdType.LINK_CMD_SET_CAM_SCHED_RESP:
      return "LINK_CMD_SET_CAM_SCHED_RESP";
    case LinkCmdType.LINK_CMD_GET_STREAM_LIST_REQ:
      return "LINK_CMD_GET_STREAM_LIST_REQ";
    case LinkCmdType.LINK_CMD_GET_STREAM_LIST_RESP:
      return "LINK_CMD_GET_STREAM_LIST_RESP";
    case LinkCmdType.LINK_CMD_DISK_LIST_REQ:
      return "LINK_CMD_DISK_LIST_REQ";
    case LinkCmdType.LINK_CMD_DISK_LIST_RESP:
      return "LINK_CMD_DISK_LIST_RESP";
    case LinkCmdType.LINK_CMD_SYS_DISK_LIST_REQ:
      return "LINK_CMD_SYS_DISK_LIST_REQ";
    case LinkCmdType.LINK_CMD_SYS_DISK_LIST_RESP:
      return "LINK_CMD_SYS_DISK_LIST_RESP";
    case LinkCmdType.LINK_CMD_ADD_DISK_REQ:
      return "LINK_CMD_ADD_DISK_REQ";
    case LinkCmdType.LINK_CMD_ADD_DISK_RESP:
      return "LINK_CMD_ADD_DISK_RESP";
    case LinkCmdType.LINK_CMD_DEL_DISK_REQ:
      return "LINK_CMD_DEL_DISK_REQ";
    case LinkCmdType.LINK_CMD_DEL_DISK_RESP:
      return "LINK_CMD_DEL_DISK_RESP";
    case LinkCmdType.LINK_CMD_UPDATE_DISK_LIMIT_REQ:
      return "LINK_CMD_UPDATE_DISK_LIMIT_REQ";
    case LinkCmdType.LINK_CMD_UPDATE_DISK_LIMIT_RESP:
      return "LINK_CMD_UPDATE_DISK_LIMIT_RESP";
    case LinkCmdType.LINK_CMD_GET_LIC_REQ:
      return "LINK_CMD_GET_LIC_REQ";
    case LinkCmdType.LINK_CMD_GET_LIC_RESP:
      return "LINK_CMD_GET_LIC_RESP";
    case LinkCmdType.LINK_CMD_GET_VER_REQ:
      return "LINK_CMD_GET_VER_REQ";
    case LinkCmdType.LINK_CMD_GET_VER_RESP:
      return "LINK_CMD_GET_VER_RESP";
    case LinkCmdType.LINK_CMD_CONF_LIC_REQ:
      return "LINK_CMD_CONF_LIC_REQ";
    case LinkCmdType.LINK_CMD_CONF_LIC_RESP:
      return "LINK_CMD_CONF_LIC_RESP";
    case LinkCmdType.LINK_CMD_ADD_USER_REQ:
      return "LINK_CMD_ADD_USER_REQ";
    case LinkCmdType.LINK_CMD_ADD_USER_RESP:
      return "LINK_CMD_ADD_USER_RESP";
    case LinkCmdType.LINK_CMD_HAS_RECORD_REQ:
      return "LINK_CMD_HAS_RECORD_REQ";
    case LinkCmdType.LINK_CMD_HAS_RECORD_RESP:
      return "LINK_CMD_HAS_RECORD_RESP";
    case LinkCmdType.LINK_CMD_SEARCH_RECORD_REQ:
      return "LINK_CMD_SEARCH_RECORD_REQ";
    case LinkCmdType.LINK_CMD_SEARCH_RECORD_RESP:
      return "LINK_CMD_SEARCH_RECORD_RESP";
    case LinkCmdType.LINK_CMD_START_LIVE_CMD:
      return "LINK_CMD_START_LIVE_CMD";
    case LinkCmdType.LINK_CMD_STOP_LIVE_CMD:
      return "LINK_CMD_STOP_LIVE_CMD";
    case LinkCmdType.LINK_CMD_PLAY_BACK_CMD:
      return "LINK_CMD_PLAY_BACK_CMD";
    case LinkCmdType.LINK_CMD_PLAY_PAUSE_CMD:
      return "LINK_CMD_PLAY_PAUSE_CMD";
    case LinkCmdType.LINK_CMD_PLAY_RESUME_CMD:
      return "LINK_CMD_PLAY_RESUME_CMD";
    case LinkCmdType.LINK_CMD_PLAY_SEEK_CMD:
      return "LINK_CMD_PLAY_SEEK_CMD";
    case LinkCmdType.LINK_CMD_PLAY_STOP_CMD:
      return "LINK_CMD_PLAY_STOP_CMD";
    case LinkCmdType.LINK_CMD_PLAY_SPEED_CMD:
      return "LINK_CMD_PLAY_SPEED_CMD";
    case LinkCmdType.LINK_CMD_PLAY_NEXT_FRAME_CMD:
      return "LINK_CMD_PLAY_NEXT_FRAME_CMD";
    case LinkCmdType.LINK_CMD_PLAY_PRE_FRAME_CMD:
      return "LINK_CMD_PLAY_PRE_FRAME_CMD";
    case LinkCmdType.LINK_MI_CMD_VIDEO_DATA:
      return "LINK_MI_CMD_VIDEO_DATA";
    case LinkCmdType.LINK_MI_CMD_START_LIVE_CMD:
      return "LINK_MI_CMD_START_LIVE_CMD";
    case LinkCmdType.LINK_MI_CMD_STOP_LIVE_CMD:
      return "LINK_MI_CMD_STOP_LIVE_CMD";
    case LinkCmdType.LINK_MI_CMD_PLAY_BACK_CMD:
      return "LINK_MI_CMD_PLAY_BACK_CMD";
    case LinkCmdType.LINK_MI_CMD_PLAY_PAUSE_CMD:
      return "LINK_MI_CMD_PLAY_PAUSE_CMD";
    case LinkCmdType.LINK_MI_CMD_PLAY_RESUME_CMD:
      return "LINK_MI_CMD_PLAY_RESUME_CMD";
    case LinkCmdType.LINK_MI_CMD_PLAY_SEEK_CMD:
      return "LINK_MI_CMD_PLAY_SEEK_CMD";
    case LinkCmdType.LINK_MI_CMD_PLAY_STOP_CMD:
      return "LINK_MI_CMD_PLAY_STOP_CMD";
    case LinkCmdType.LINK_MI_CMD_PLAY_SPEED_CMD:
      return "LINK_MI_CMD_PLAY_SPEED_CMD";
    case LinkCmdType.LINK_MI_CMD_PLAY_NEXT_FRAME_CMD:
      return "LINK_MI_CMD_PLAY_NEXT_FRAME_CMD";
    case LinkCmdType.LINK_MI_CMD_PLAY_PRE_FRAME_CMD:
      return "LINK_MI_CMD_PLAY_PRE_FRAME_CMD";
    case LinkCmdType.LINK_MI_CMD_CHANGE_STREAM_CMD:
      return "LINK_MI_CMD_CHANGE_STREAM_CMD";
    case LinkCmdType.LINK_CMD_PTZ_CMD:
      return "LINK_CMD_PTZ_CMD";
    case LinkCmdType.LINK_CMD_CAM_SEARCH_START_REQ:
      return "LINK_CMD_CAM_SEARCH_START_REQ";
    case LinkCmdType.LINK_CMD_CAM_SEARCH_START_RESP:
      return "LINK_CMD_CAM_SEARCH_START_RESP";
    case LinkCmdType.LINK_CMD_CAM_SEARCH_STOP_REQ:
      return "LINK_CMD_CAM_SEARCH_STOP_REQ";
    case LinkCmdType.LINK_CMD_CAM_SEARCH_STOP_RESP:
      return "LINK_CMD_CAM_SEARCH_STOP_RESP";
    case LinkCmdType.LINK_CMD_REG_EVENT_REQ:
      return "LINK_CMD_REG_EVENT_REQ";
    case LinkCmdType.LINK_CMD_REG_EVENT_RESP:
      return "LINK_CMD_REG_EVENT_RESP";
    case LinkCmdType.LINK_CMD_UNREG_EVENT_REQ:
      return "LINK_CMD_UNREG_EVENT_REQ";
    case LinkCmdType.LINK_CMD_UNREG_EVENT_RESP:
      return "LINK_CMD_UNREG_EVENT_RESP";
    case LinkCmdType.LINK_CMD_EVENT_SEARCH_REQ:
      return "LINK_CMD_EVENT_SEARCH_REQ";
    case LinkCmdType.LINK_CMD_EVENT_SEARCH_RESP:
      return "LINK_CMD_EVENT_SEARCH_RESP";
    case LinkCmdType.LINK_CMD_HANDLE_EVENT_REQ:
      return "LINK_CMD_HANDLE_EVENT_REQ";
    case LinkCmdType.LINK_CMD_HANDLE_EVENT_RESP:
      return "LINK_CMD_HANDLE_EVENT_RESP";
    case LinkCmdType.LINK_CMD_CAM_ADD_NOTIFY:
      return "LINK_CMD_CAM_ADD_NOTIFY";
    case LinkCmdType.LINK_CMD_CAM_DEL_NOTIFY:
      return "LINK_CMD_CAM_DEL_NOTIFY";
    case LinkCmdType.LINK_CMD_CAM_ONLINE_NOTIFY:
      return "LINK_CMD_CAM_ONLINE_NOTIFY";
    case LinkCmdType.LINK_CMD_CAM_OFFLINE_NOTIFY:
      return "LINK_CMD_CAM_OFFLINE_NOTIFY";
    case LinkCmdType.LINK_CMD_CAM_REC_ON_NOTIFY:
      return "LINK_CMD_CAM_REC_ON_NOTIFY";
    case LinkCmdType.LINK_CMD_CAM_REC_OFF_NOTIFY:
      return "LINK_CMD_CAM_REC_OFF_NOTIFY";
    case LinkCmdType.LINK_CMD_CAM_SEARCHED_NOTIFY:
      return "LINK_CMD_CAM_SEARCHED_NOTIFY";
    case LinkCmdType.LINK_CMD_EVENT_NOTIFY:
      return "LINK_CMD_EVENT_NOTIFY";
    case LinkCmdType.LINK_CMD_REG_SOCKET_NOTIFY_REQ:
      return "LINK_CMD_REG_SOCKET_NOTIFY_REQ";
    case LinkCmdType.LINK_CMD_REG_SOCKET_NOTIFY_RESP:
      return "LINK_CMD_REG_SOCKET_NOTIFY_RESP";
    case LinkCmdType.LINK_CMD_SET_SOCKET_CNT_REQ:
      return "LINK_CMD_SET_SOCKET_CNT_REQ";
    case LinkCmdType.LINK_CMD_SET_SOCKET_CNT_RESP:
      return "LINK_CMD_SET_SOCKET_CNT_RESP";
    case LinkCmdType.LINK_CMD_SOCKET_LIST_REQ:
      return "LINK_CMD_SOCKET_LIST_REQ";
    case LinkCmdType.LINK_CMD_SOCKET_LIST_RESP:
      return "LINK_CMD_SOCKET_LIST_RESP";
    case LinkCmdType.LINK_CMD_SOCKET_ADD_NOTIFY:
      return "LINK_CMD_SOCKET_ADD_NOTIFY";
    case LinkCmdType.LINK_CMD_SOCKET_DEL_NOTIFY:
      return "LINK_CMD_SOCKET_DEL_NOTIFY";
    case LinkCmdType.LINK_CMD_SOCKET_EMPTY_NOTIFY:
      return "LINK_CMD_SOCKET_EMPTY_NOTIFY";
    case LinkCmdType.LINK_CMD_SOCKET_FULL_NOTIFY:
      return "LINK_CMD_SOCKET_FULL_NOTIFY";
    case LinkCmdType.LINK_CMD_SET_SOCKET_REQ:
      return "LINK_CMD_SET_SOCKET_REQ";
    case LinkCmdType.LINK_CMD_SET_SOCKET_RESP:
      return "LINK_CMD_SET_SOCKET_RESP";
    case LinkCmdType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface LinkCmd {
  type: LinkCmdType;
  loginReq?: LinkLoginReq | undefined;
  loginResp?: LinkLoginResp | undefined;
  keepaliveReq?: LinkKeepaliveReq | undefined;
  keepaliveResp?: LinkKeepaliveResp | undefined;
  regNotifyReq?: LinkRegNotifyReq | undefined;
  regNotifyResp?: LinkRegNotifyResp | undefined;
  setLogLevelReq?: LinkSetLogLevelReq | undefined;
  setLogLevelResp?: LinkSetLogLevelResp | undefined;
  /** Cam */
  camListReq?: LinkListCamReq | undefined;
  camListResp?: LinkListCamResp | undefined;
  camReq?: LinkCamReq | undefined;
  camResp?: LinkCamResp | undefined;
  addCamReq?: LinkAddCamReq | undefined;
  addCamResp?: LinkAddCamResp | undefined;
  delCamReq?: LinkDelCamReq | undefined;
  delCamResp?: LinkDelCamResp | undefined;
  setCamSchedReq?: LinkSetCamSchedReq | undefined;
  setCamSchedResp?: LinkSetCamSchedResp | undefined;
  getStreamListReq?: LinkGetStreamListReq | undefined;
  getStreamListResp?: LinkGetStreamListResp | undefined;
  /** Disk */
  diskListReq?: LinkVidDiskListReq | undefined;
  diskListResp?: LinkVidDiskListResp | undefined;
  sysDiskListReq?: LinkSysVidDiskListReq | undefined;
  sysDiskListResp?: LinkSysVidDiskListResp | undefined;
  addDiskReq?: LinkAddDiskReq | undefined;
  addDiskResp?: LinkAddDiskResp | undefined;
  delDiskReq?: LinkDelDiskReq | undefined;
  delDiskResp?: LinkDelDiskResp | undefined;
  diskLimitReq?: LinkUpdateDiskLimitReq | undefined;
  diskLimitResp?: LinkUpdateDiskLimitResp | undefined;
  /** License */
  licReq?: LinkGetLicReq | undefined;
  licResp?: LinkGetLicResp | undefined;
  verReq?: LinkGetVerReq | undefined;
  verResp?: LinkGetVerResp | undefined;
  confLicReq?: LinkConfLicReq | undefined;
  confLicResp?: LinkConfLicResp | undefined;
  /** User */
  addUserReq?: LinkAddUserReq | undefined;
  addUserResp?: LinkAddUserResp | undefined;
  /** Search */
  hasRecReq?: LinkHasRecordReq | undefined;
  hasRecResp?: LinkHasRecordResp | undefined;
  searchRecReq?: LinkSearchRecordReq | undefined;
  searchRecResp?: LinkSearchRecordResp | undefined;
  /** Stream */
  startLiveCmd?: LinkStartLiveCmd | undefined;
  stopLiveCmd?: LinkStopLiveCmd | undefined;
  playBackCmd?: LinkPlayBackCmd | undefined;
  playPauseCmd?: LinkPlayPauseCmd | undefined;
  playResumeCmd?: LinkPlayResumeCmd | undefined;
  playSeekCmd?: LinkPlaySeekCmd | undefined;
  playStopCmd?: LinkPlayStopCmd | undefined;
  playSpeedCmd?: LinkPlaySpeedCmd | undefined;
  playNextFrameCmd?: LinkPlayNextFrameCmd | undefined;
  playPreFrameCmd?: LinkPlayPreFrameCmd | undefined;
  /** MiStream */
  MiVideoData?: LinkMiVideoData | undefined;
  MistartLiveCmd?: LinkMiStartLiveCmd | undefined;
  MistopLiveCmd?: LinkMiStopLiveCmd | undefined;
  MiplayBackCmd?: LinkMiPlayBackCmd | undefined;
  MiplayPauseCmd?: LinkMiPlayPauseCmd | undefined;
  MiplayResumeCmd?: LinkMiPlayResumeCmd | undefined;
  MiplaySeekCmd?: LinkMiPlaySeekCmd | undefined;
  MiplayStopCmd?: LinkMiPlayStopCmd | undefined;
  MiplaySpeedCmd?: LinkMiPlaySpeedCmd | undefined;
  MiplayNextFrameCmd?: LinkMiPlayNextFrameCmd | undefined;
  MiplayPreFrameCmd?: LinkMiPlayPreFrameCmd | undefined;
  MichangeStreamCmd?: LinkMiChangeStreamCmd | undefined;
  /** PTZ */
  ptzCmd?: LinkPtzCmd | undefined;
  /** Cam Search & Event */
  camSearchStartReq?: LinkCamSearchStartReq | undefined;
  camSearchStartResp?: LinkCamSearchStartResp | undefined;
  camSearchStopReq?: LinkCamSearchStopReq | undefined;
  camSearchStopResp?: LinkCamSearchStopResp | undefined;
  regEventReq?: LinkRegEventReq | undefined;
  regEventResp?: LinkRegEventResp | undefined;
  unRegEventReq?: LinkUnRegEventReq | undefined;
  unRegEventResp?: LinkUnRegEventResp | undefined;
  eventSearchReq?: LinkEventSearchReq | undefined;
  eventSearchResp?: LinkEventSearchResp | undefined;
  handleEventReq?: LinkHandleEventReq | undefined;
  handleEventResp?: LinkHandleEventResp | undefined;
  /** Notify */
  camAddNotify?: LinkCamAddNotify | undefined;
  camIdNotify?: LinkCamIdNotify | undefined;
  camSearchedNotify?: LinkCamSearchedNotify | undefined;
  evnetNotify?: LinkEventNotify | undefined;
  /** Socket */
  regSocketNotifyReq?: LinkRegSocketNotifyReq | undefined;
  regSocketNotifyResp?: LinkRegSocketNotifyResp | undefined;
  socketCntReq?: LinkVidSocketCntReq | undefined;
  socketCntResp?: LinkVidSocketCntResp | undefined;
  socketListReq?: LinkVidSocketListReq | undefined;
  socketListResp?: LinkVidSocketListResp | undefined;
  socketAddNotify?: LinkSocketAddNotify | undefined;
  socketDelNotify?: LinkSocketDelNotify | undefined;
  socketEmptyNotify?: LinkSocketEmptyNotify | undefined;
  socketFullNotify?: LinkSocketFullNotify | undefined;
  socketSetSocketReq?: LinkSocketSetSocketReq | undefined;
  socketSetSocketResp?: LinkSocketSetSocketResp | undefined;
}

function createBaseLinkCmd(): LinkCmd {
  return {
    type: 0,
    loginReq: undefined,
    loginResp: undefined,
    keepaliveReq: undefined,
    keepaliveResp: undefined,
    regNotifyReq: undefined,
    regNotifyResp: undefined,
    setLogLevelReq: undefined,
    setLogLevelResp: undefined,
    camListReq: undefined,
    camListResp: undefined,
    camReq: undefined,
    camResp: undefined,
    addCamReq: undefined,
    addCamResp: undefined,
    delCamReq: undefined,
    delCamResp: undefined,
    setCamSchedReq: undefined,
    setCamSchedResp: undefined,
    getStreamListReq: undefined,
    getStreamListResp: undefined,
    diskListReq: undefined,
    diskListResp: undefined,
    sysDiskListReq: undefined,
    sysDiskListResp: undefined,
    addDiskReq: undefined,
    addDiskResp: undefined,
    delDiskReq: undefined,
    delDiskResp: undefined,
    diskLimitReq: undefined,
    diskLimitResp: undefined,
    licReq: undefined,
    licResp: undefined,
    verReq: undefined,
    verResp: undefined,
    confLicReq: undefined,
    confLicResp: undefined,
    addUserReq: undefined,
    addUserResp: undefined,
    hasRecReq: undefined,
    hasRecResp: undefined,
    searchRecReq: undefined,
    searchRecResp: undefined,
    startLiveCmd: undefined,
    stopLiveCmd: undefined,
    playBackCmd: undefined,
    playPauseCmd: undefined,
    playResumeCmd: undefined,
    playSeekCmd: undefined,
    playStopCmd: undefined,
    playSpeedCmd: undefined,
    playNextFrameCmd: undefined,
    playPreFrameCmd: undefined,
    MiVideoData: undefined,
    MistartLiveCmd: undefined,
    MistopLiveCmd: undefined,
    MiplayBackCmd: undefined,
    MiplayPauseCmd: undefined,
    MiplayResumeCmd: undefined,
    MiplaySeekCmd: undefined,
    MiplayStopCmd: undefined,
    MiplaySpeedCmd: undefined,
    MiplayNextFrameCmd: undefined,
    MiplayPreFrameCmd: undefined,
    MichangeStreamCmd: undefined,
    ptzCmd: undefined,
    camSearchStartReq: undefined,
    camSearchStartResp: undefined,
    camSearchStopReq: undefined,
    camSearchStopResp: undefined,
    regEventReq: undefined,
    regEventResp: undefined,
    unRegEventReq: undefined,
    unRegEventResp: undefined,
    eventSearchReq: undefined,
    eventSearchResp: undefined,
    handleEventReq: undefined,
    handleEventResp: undefined,
    camAddNotify: undefined,
    camIdNotify: undefined,
    camSearchedNotify: undefined,
    evnetNotify: undefined,
    regSocketNotifyReq: undefined,
    regSocketNotifyResp: undefined,
    socketCntReq: undefined,
    socketCntResp: undefined,
    socketListReq: undefined,
    socketListResp: undefined,
    socketAddNotify: undefined,
    socketDelNotify: undefined,
    socketEmptyNotify: undefined,
    socketFullNotify: undefined,
    socketSetSocketReq: undefined,
    socketSetSocketResp: undefined,
  };
}

export const LinkCmd = {
  encode(
    message: LinkCmd,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.loginReq !== undefined) {
      LinkLoginReq.encode(message.loginReq, writer.uint32(818).fork()).ldelim();
    }
    if (message.loginResp !== undefined) {
      LinkLoginResp.encode(
        message.loginResp,
        writer.uint32(826).fork(),
      ).ldelim();
    }
    if (message.keepaliveReq !== undefined) {
      LinkKeepaliveReq.encode(
        message.keepaliveReq,
        writer.uint32(834).fork(),
      ).ldelim();
    }
    if (message.keepaliveResp !== undefined) {
      LinkKeepaliveResp.encode(
        message.keepaliveResp,
        writer.uint32(842).fork(),
      ).ldelim();
    }
    if (message.regNotifyReq !== undefined) {
      LinkRegNotifyReq.encode(
        message.regNotifyReq,
        writer.uint32(850).fork(),
      ).ldelim();
    }
    if (message.regNotifyResp !== undefined) {
      LinkRegNotifyResp.encode(
        message.regNotifyResp,
        writer.uint32(858).fork(),
      ).ldelim();
    }
    if (message.setLogLevelReq !== undefined) {
      LinkSetLogLevelReq.encode(
        message.setLogLevelReq,
        writer.uint32(866).fork(),
      ).ldelim();
    }
    if (message.setLogLevelResp !== undefined) {
      LinkSetLogLevelResp.encode(
        message.setLogLevelResp,
        writer.uint32(874).fork(),
      ).ldelim();
    }
    if (message.camListReq !== undefined) {
      LinkListCamReq.encode(
        message.camListReq,
        writer.uint32(1610).fork(),
      ).ldelim();
    }
    if (message.camListResp !== undefined) {
      LinkListCamResp.encode(
        message.camListResp,
        writer.uint32(1618).fork(),
      ).ldelim();
    }
    if (message.camReq !== undefined) {
      LinkCamReq.encode(message.camReq, writer.uint32(1626).fork()).ldelim();
    }
    if (message.camResp !== undefined) {
      LinkCamResp.encode(message.camResp, writer.uint32(1634).fork()).ldelim();
    }
    if (message.addCamReq !== undefined) {
      LinkAddCamReq.encode(
        message.addCamReq,
        writer.uint32(1642).fork(),
      ).ldelim();
    }
    if (message.addCamResp !== undefined) {
      LinkAddCamResp.encode(
        message.addCamResp,
        writer.uint32(1650).fork(),
      ).ldelim();
    }
    if (message.delCamReq !== undefined) {
      LinkDelCamReq.encode(
        message.delCamReq,
        writer.uint32(1658).fork(),
      ).ldelim();
    }
    if (message.delCamResp !== undefined) {
      LinkDelCamResp.encode(
        message.delCamResp,
        writer.uint32(1666).fork(),
      ).ldelim();
    }
    if (message.setCamSchedReq !== undefined) {
      LinkSetCamSchedReq.encode(
        message.setCamSchedReq,
        writer.uint32(1674).fork(),
      ).ldelim();
    }
    if (message.setCamSchedResp !== undefined) {
      LinkSetCamSchedResp.encode(
        message.setCamSchedResp,
        writer.uint32(1682).fork(),
      ).ldelim();
    }
    if (message.getStreamListReq !== undefined) {
      LinkGetStreamListReq.encode(
        message.getStreamListReq,
        writer.uint32(1690).fork(),
      ).ldelim();
    }
    if (message.getStreamListResp !== undefined) {
      LinkGetStreamListResp.encode(
        message.getStreamListResp,
        writer.uint32(1698).fork(),
      ).ldelim();
    }
    if (message.diskListReq !== undefined) {
      LinkVidDiskListReq.encode(
        message.diskListReq,
        writer.uint32(2410).fork(),
      ).ldelim();
    }
    if (message.diskListResp !== undefined) {
      LinkVidDiskListResp.encode(
        message.diskListResp,
        writer.uint32(2418).fork(),
      ).ldelim();
    }
    if (message.sysDiskListReq !== undefined) {
      LinkSysVidDiskListReq.encode(
        message.sysDiskListReq,
        writer.uint32(2426).fork(),
      ).ldelim();
    }
    if (message.sysDiskListResp !== undefined) {
      LinkSysVidDiskListResp.encode(
        message.sysDiskListResp,
        writer.uint32(2434).fork(),
      ).ldelim();
    }
    if (message.addDiskReq !== undefined) {
      LinkAddDiskReq.encode(
        message.addDiskReq,
        writer.uint32(2442).fork(),
      ).ldelim();
    }
    if (message.addDiskResp !== undefined) {
      LinkAddDiskResp.encode(
        message.addDiskResp,
        writer.uint32(2450).fork(),
      ).ldelim();
    }
    if (message.delDiskReq !== undefined) {
      LinkDelDiskReq.encode(
        message.delDiskReq,
        writer.uint32(2458).fork(),
      ).ldelim();
    }
    if (message.delDiskResp !== undefined) {
      LinkDelDiskResp.encode(
        message.delDiskResp,
        writer.uint32(2466).fork(),
      ).ldelim();
    }
    if (message.diskLimitReq !== undefined) {
      LinkUpdateDiskLimitReq.encode(
        message.diskLimitReq,
        writer.uint32(2474).fork(),
      ).ldelim();
    }
    if (message.diskLimitResp !== undefined) {
      LinkUpdateDiskLimitResp.encode(
        message.diskLimitResp,
        writer.uint32(2482).fork(),
      ).ldelim();
    }
    if (message.licReq !== undefined) {
      LinkGetLicReq.encode(message.licReq, writer.uint32(3210).fork()).ldelim();
    }
    if (message.licResp !== undefined) {
      LinkGetLicResp.encode(
        message.licResp,
        writer.uint32(3218).fork(),
      ).ldelim();
    }
    if (message.verReq !== undefined) {
      LinkGetVerReq.encode(message.verReq, writer.uint32(3226).fork()).ldelim();
    }
    if (message.verResp !== undefined) {
      LinkGetVerResp.encode(
        message.verResp,
        writer.uint32(3234).fork(),
      ).ldelim();
    }
    if (message.confLicReq !== undefined) {
      LinkConfLicReq.encode(
        message.confLicReq,
        writer.uint32(3242).fork(),
      ).ldelim();
    }
    if (message.confLicResp !== undefined) {
      LinkConfLicResp.encode(
        message.confLicResp,
        writer.uint32(3250).fork(),
      ).ldelim();
    }
    if (message.addUserReq !== undefined) {
      LinkAddUserReq.encode(
        message.addUserReq,
        writer.uint32(4010).fork(),
      ).ldelim();
    }
    if (message.addUserResp !== undefined) {
      LinkAddUserResp.encode(
        message.addUserResp,
        writer.uint32(4018).fork(),
      ).ldelim();
    }
    if (message.hasRecReq !== undefined) {
      LinkHasRecordReq.encode(
        message.hasRecReq,
        writer.uint32(4810).fork(),
      ).ldelim();
    }
    if (message.hasRecResp !== undefined) {
      LinkHasRecordResp.encode(
        message.hasRecResp,
        writer.uint32(4818).fork(),
      ).ldelim();
    }
    if (message.searchRecReq !== undefined) {
      LinkSearchRecordReq.encode(
        message.searchRecReq,
        writer.uint32(4826).fork(),
      ).ldelim();
    }
    if (message.searchRecResp !== undefined) {
      LinkSearchRecordResp.encode(
        message.searchRecResp,
        writer.uint32(4834).fork(),
      ).ldelim();
    }
    if (message.startLiveCmd !== undefined) {
      LinkStartLiveCmd.encode(
        message.startLiveCmd,
        writer.uint32(5610).fork(),
      ).ldelim();
    }
    if (message.stopLiveCmd !== undefined) {
      LinkStopLiveCmd.encode(
        message.stopLiveCmd,
        writer.uint32(5618).fork(),
      ).ldelim();
    }
    if (message.playBackCmd !== undefined) {
      LinkPlayBackCmd.encode(
        message.playBackCmd,
        writer.uint32(5626).fork(),
      ).ldelim();
    }
    if (message.playPauseCmd !== undefined) {
      LinkPlayPauseCmd.encode(
        message.playPauseCmd,
        writer.uint32(5634).fork(),
      ).ldelim();
    }
    if (message.playResumeCmd !== undefined) {
      LinkPlayResumeCmd.encode(
        message.playResumeCmd,
        writer.uint32(5642).fork(),
      ).ldelim();
    }
    if (message.playSeekCmd !== undefined) {
      LinkPlaySeekCmd.encode(
        message.playSeekCmd,
        writer.uint32(5650).fork(),
      ).ldelim();
    }
    if (message.playStopCmd !== undefined) {
      LinkPlayStopCmd.encode(
        message.playStopCmd,
        writer.uint32(5658).fork(),
      ).ldelim();
    }
    if (message.playSpeedCmd !== undefined) {
      LinkPlaySpeedCmd.encode(
        message.playSpeedCmd,
        writer.uint32(5666).fork(),
      ).ldelim();
    }
    if (message.playNextFrameCmd !== undefined) {
      LinkPlayNextFrameCmd.encode(
        message.playNextFrameCmd,
        writer.uint32(5674).fork(),
      ).ldelim();
    }
    if (message.playPreFrameCmd !== undefined) {
      LinkPlayPreFrameCmd.encode(
        message.playPreFrameCmd,
        writer.uint32(5682).fork(),
      ).ldelim();
    }
    if (message.MiVideoData !== undefined) {
      LinkMiVideoData.encode(
        message.MiVideoData,
        writer.uint32(5690).fork(),
      ).ldelim();
    }
    if (message.MistartLiveCmd !== undefined) {
      LinkMiStartLiveCmd.encode(
        message.MistartLiveCmd,
        writer.uint32(5698).fork(),
      ).ldelim();
    }
    if (message.MistopLiveCmd !== undefined) {
      LinkMiStopLiveCmd.encode(
        message.MistopLiveCmd,
        writer.uint32(5706).fork(),
      ).ldelim();
    }
    if (message.MiplayBackCmd !== undefined) {
      LinkMiPlayBackCmd.encode(
        message.MiplayBackCmd,
        writer.uint32(5714).fork(),
      ).ldelim();
    }
    if (message.MiplayPauseCmd !== undefined) {
      LinkMiPlayPauseCmd.encode(
        message.MiplayPauseCmd,
        writer.uint32(5722).fork(),
      ).ldelim();
    }
    if (message.MiplayResumeCmd !== undefined) {
      LinkMiPlayResumeCmd.encode(
        message.MiplayResumeCmd,
        writer.uint32(5730).fork(),
      ).ldelim();
    }
    if (message.MiplaySeekCmd !== undefined) {
      LinkMiPlaySeekCmd.encode(
        message.MiplaySeekCmd,
        writer.uint32(5738).fork(),
      ).ldelim();
    }
    if (message.MiplayStopCmd !== undefined) {
      LinkMiPlayStopCmd.encode(
        message.MiplayStopCmd,
        writer.uint32(5746).fork(),
      ).ldelim();
    }
    if (message.MiplaySpeedCmd !== undefined) {
      LinkMiPlaySpeedCmd.encode(
        message.MiplaySpeedCmd,
        writer.uint32(5754).fork(),
      ).ldelim();
    }
    if (message.MiplayNextFrameCmd !== undefined) {
      LinkMiPlayNextFrameCmd.encode(
        message.MiplayNextFrameCmd,
        writer.uint32(5762).fork(),
      ).ldelim();
    }
    if (message.MiplayPreFrameCmd !== undefined) {
      LinkMiPlayPreFrameCmd.encode(
        message.MiplayPreFrameCmd,
        writer.uint32(5770).fork(),
      ).ldelim();
    }
    if (message.MichangeStreamCmd !== undefined) {
      LinkMiChangeStreamCmd.encode(
        message.MichangeStreamCmd,
        writer.uint32(5778).fork(),
      ).ldelim();
    }
    if (message.ptzCmd !== undefined) {
      LinkPtzCmd.encode(message.ptzCmd, writer.uint32(6410).fork()).ldelim();
    }
    if (message.camSearchStartReq !== undefined) {
      LinkCamSearchStartReq.encode(
        message.camSearchStartReq,
        writer.uint32(7210).fork(),
      ).ldelim();
    }
    if (message.camSearchStartResp !== undefined) {
      LinkCamSearchStartResp.encode(
        message.camSearchStartResp,
        writer.uint32(7218).fork(),
      ).ldelim();
    }
    if (message.camSearchStopReq !== undefined) {
      LinkCamSearchStopReq.encode(
        message.camSearchStopReq,
        writer.uint32(7226).fork(),
      ).ldelim();
    }
    if (message.camSearchStopResp !== undefined) {
      LinkCamSearchStopResp.encode(
        message.camSearchStopResp,
        writer.uint32(7234).fork(),
      ).ldelim();
    }
    if (message.regEventReq !== undefined) {
      LinkRegEventReq.encode(
        message.regEventReq,
        writer.uint32(7242).fork(),
      ).ldelim();
    }
    if (message.regEventResp !== undefined) {
      LinkRegEventResp.encode(
        message.regEventResp,
        writer.uint32(7250).fork(),
      ).ldelim();
    }
    if (message.unRegEventReq !== undefined) {
      LinkUnRegEventReq.encode(
        message.unRegEventReq,
        writer.uint32(7258).fork(),
      ).ldelim();
    }
    if (message.unRegEventResp !== undefined) {
      LinkUnRegEventResp.encode(
        message.unRegEventResp,
        writer.uint32(7266).fork(),
      ).ldelim();
    }
    if (message.eventSearchReq !== undefined) {
      LinkEventSearchReq.encode(
        message.eventSearchReq,
        writer.uint32(7274).fork(),
      ).ldelim();
    }
    if (message.eventSearchResp !== undefined) {
      LinkEventSearchResp.encode(
        message.eventSearchResp,
        writer.uint32(7282).fork(),
      ).ldelim();
    }
    if (message.handleEventReq !== undefined) {
      LinkHandleEventReq.encode(
        message.handleEventReq,
        writer.uint32(7290).fork(),
      ).ldelim();
    }
    if (message.handleEventResp !== undefined) {
      LinkHandleEventResp.encode(
        message.handleEventResp,
        writer.uint32(7298).fork(),
      ).ldelim();
    }
    if (message.camAddNotify !== undefined) {
      LinkCamAddNotify.encode(
        message.camAddNotify,
        writer.uint32(80010).fork(),
      ).ldelim();
    }
    if (message.camIdNotify !== undefined) {
      LinkCamIdNotify.encode(
        message.camIdNotify,
        writer.uint32(80018).fork(),
      ).ldelim();
    }
    if (message.camSearchedNotify !== undefined) {
      LinkCamSearchedNotify.encode(
        message.camSearchedNotify,
        writer.uint32(80026).fork(),
      ).ldelim();
    }
    if (message.evnetNotify !== undefined) {
      LinkEventNotify.encode(
        message.evnetNotify,
        writer.uint32(80034).fork(),
      ).ldelim();
    }
    if (message.regSocketNotifyReq !== undefined) {
      LinkRegSocketNotifyReq.encode(
        message.regSocketNotifyReq,
        writer.uint32(160002).fork(),
      ).ldelim();
    }
    if (message.regSocketNotifyResp !== undefined) {
      LinkRegSocketNotifyResp.encode(
        message.regSocketNotifyResp,
        writer.uint32(160010).fork(),
      ).ldelim();
    }
    if (message.socketCntReq !== undefined) {
      LinkVidSocketCntReq.encode(
        message.socketCntReq,
        writer.uint32(160018).fork(),
      ).ldelim();
    }
    if (message.socketCntResp !== undefined) {
      LinkVidSocketCntResp.encode(
        message.socketCntResp,
        writer.uint32(160026).fork(),
      ).ldelim();
    }
    if (message.socketListReq !== undefined) {
      LinkVidSocketListReq.encode(
        message.socketListReq,
        writer.uint32(160034).fork(),
      ).ldelim();
    }
    if (message.socketListResp !== undefined) {
      LinkVidSocketListResp.encode(
        message.socketListResp,
        writer.uint32(160042).fork(),
      ).ldelim();
    }
    if (message.socketAddNotify !== undefined) {
      LinkSocketAddNotify.encode(
        message.socketAddNotify,
        writer.uint32(160050).fork(),
      ).ldelim();
    }
    if (message.socketDelNotify !== undefined) {
      LinkSocketDelNotify.encode(
        message.socketDelNotify,
        writer.uint32(160058).fork(),
      ).ldelim();
    }
    if (message.socketEmptyNotify !== undefined) {
      LinkSocketEmptyNotify.encode(
        message.socketEmptyNotify,
        writer.uint32(160066).fork(),
      ).ldelim();
    }
    if (message.socketFullNotify !== undefined) {
      LinkSocketFullNotify.encode(
        message.socketFullNotify,
        writer.uint32(160074).fork(),
      ).ldelim();
    }
    if (message.socketSetSocketReq !== undefined) {
      LinkSocketSetSocketReq.encode(
        message.socketSetSocketReq,
        writer.uint32(160082).fork(),
      ).ldelim();
    }
    if (message.socketSetSocketResp !== undefined) {
      LinkSocketSetSocketResp.encode(
        message.socketSetSocketResp,
        writer.uint32(160090).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkCmd {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkCmd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 102:
          if (tag !== 818) {
            break;
          }

          message.loginReq = LinkLoginReq.decode(reader, reader.uint32());
          continue;
        case 103:
          if (tag !== 826) {
            break;
          }

          message.loginResp = LinkLoginResp.decode(reader, reader.uint32());
          continue;
        case 104:
          if (tag !== 834) {
            break;
          }

          message.keepaliveReq = LinkKeepaliveReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 105:
          if (tag !== 842) {
            break;
          }

          message.keepaliveResp = LinkKeepaliveResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 106:
          if (tag !== 850) {
            break;
          }

          message.regNotifyReq = LinkRegNotifyReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 107:
          if (tag !== 858) {
            break;
          }

          message.regNotifyResp = LinkRegNotifyResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 108:
          if (tag !== 866) {
            break;
          }

          message.setLogLevelReq = LinkSetLogLevelReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 109:
          if (tag !== 874) {
            break;
          }

          message.setLogLevelResp = LinkSetLogLevelResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 201:
          if (tag !== 1610) {
            break;
          }

          message.camListReq = LinkListCamReq.decode(reader, reader.uint32());
          continue;
        case 202:
          if (tag !== 1618) {
            break;
          }

          message.camListResp = LinkListCamResp.decode(reader, reader.uint32());
          continue;
        case 203:
          if (tag !== 1626) {
            break;
          }

          message.camReq = LinkCamReq.decode(reader, reader.uint32());
          continue;
        case 204:
          if (tag !== 1634) {
            break;
          }

          message.camResp = LinkCamResp.decode(reader, reader.uint32());
          continue;
        case 205:
          if (tag !== 1642) {
            break;
          }

          message.addCamReq = LinkAddCamReq.decode(reader, reader.uint32());
          continue;
        case 206:
          if (tag !== 1650) {
            break;
          }

          message.addCamResp = LinkAddCamResp.decode(reader, reader.uint32());
          continue;
        case 207:
          if (tag !== 1658) {
            break;
          }

          message.delCamReq = LinkDelCamReq.decode(reader, reader.uint32());
          continue;
        case 208:
          if (tag !== 1666) {
            break;
          }

          message.delCamResp = LinkDelCamResp.decode(reader, reader.uint32());
          continue;
        case 209:
          if (tag !== 1674) {
            break;
          }

          message.setCamSchedReq = LinkSetCamSchedReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 210:
          if (tag !== 1682) {
            break;
          }

          message.setCamSchedResp = LinkSetCamSchedResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 211:
          if (tag !== 1690) {
            break;
          }

          message.getStreamListReq = LinkGetStreamListReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 212:
          if (tag !== 1698) {
            break;
          }

          message.getStreamListResp = LinkGetStreamListResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 301:
          if (tag !== 2410) {
            break;
          }

          message.diskListReq = LinkVidDiskListReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 302:
          if (tag !== 2418) {
            break;
          }

          message.diskListResp = LinkVidDiskListResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 303:
          if (tag !== 2426) {
            break;
          }

          message.sysDiskListReq = LinkSysVidDiskListReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 304:
          if (tag !== 2434) {
            break;
          }

          message.sysDiskListResp = LinkSysVidDiskListResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 305:
          if (tag !== 2442) {
            break;
          }

          message.addDiskReq = LinkAddDiskReq.decode(reader, reader.uint32());
          continue;
        case 306:
          if (tag !== 2450) {
            break;
          }

          message.addDiskResp = LinkAddDiskResp.decode(reader, reader.uint32());
          continue;
        case 307:
          if (tag !== 2458) {
            break;
          }

          message.delDiskReq = LinkDelDiskReq.decode(reader, reader.uint32());
          continue;
        case 308:
          if (tag !== 2466) {
            break;
          }

          message.delDiskResp = LinkDelDiskResp.decode(reader, reader.uint32());
          continue;
        case 309:
          if (tag !== 2474) {
            break;
          }

          message.diskLimitReq = LinkUpdateDiskLimitReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 310:
          if (tag !== 2482) {
            break;
          }

          message.diskLimitResp = LinkUpdateDiskLimitResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 401:
          if (tag !== 3210) {
            break;
          }

          message.licReq = LinkGetLicReq.decode(reader, reader.uint32());
          continue;
        case 402:
          if (tag !== 3218) {
            break;
          }

          message.licResp = LinkGetLicResp.decode(reader, reader.uint32());
          continue;
        case 403:
          if (tag !== 3226) {
            break;
          }

          message.verReq = LinkGetVerReq.decode(reader, reader.uint32());
          continue;
        case 404:
          if (tag !== 3234) {
            break;
          }

          message.verResp = LinkGetVerResp.decode(reader, reader.uint32());
          continue;
        case 405:
          if (tag !== 3242) {
            break;
          }

          message.confLicReq = LinkConfLicReq.decode(reader, reader.uint32());
          continue;
        case 406:
          if (tag !== 3250) {
            break;
          }

          message.confLicResp = LinkConfLicResp.decode(reader, reader.uint32());
          continue;
        case 501:
          if (tag !== 4010) {
            break;
          }

          message.addUserReq = LinkAddUserReq.decode(reader, reader.uint32());
          continue;
        case 502:
          if (tag !== 4018) {
            break;
          }

          message.addUserResp = LinkAddUserResp.decode(reader, reader.uint32());
          continue;
        case 601:
          if (tag !== 4810) {
            break;
          }

          message.hasRecReq = LinkHasRecordReq.decode(reader, reader.uint32());
          continue;
        case 602:
          if (tag !== 4818) {
            break;
          }

          message.hasRecResp = LinkHasRecordResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 603:
          if (tag !== 4826) {
            break;
          }

          message.searchRecReq = LinkSearchRecordReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 604:
          if (tag !== 4834) {
            break;
          }

          message.searchRecResp = LinkSearchRecordResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 701:
          if (tag !== 5610) {
            break;
          }

          message.startLiveCmd = LinkStartLiveCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 702:
          if (tag !== 5618) {
            break;
          }

          message.stopLiveCmd = LinkStopLiveCmd.decode(reader, reader.uint32());
          continue;
        case 703:
          if (tag !== 5626) {
            break;
          }

          message.playBackCmd = LinkPlayBackCmd.decode(reader, reader.uint32());
          continue;
        case 704:
          if (tag !== 5634) {
            break;
          }

          message.playPauseCmd = LinkPlayPauseCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 705:
          if (tag !== 5642) {
            break;
          }

          message.playResumeCmd = LinkPlayResumeCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 706:
          if (tag !== 5650) {
            break;
          }

          message.playSeekCmd = LinkPlaySeekCmd.decode(reader, reader.uint32());
          continue;
        case 707:
          if (tag !== 5658) {
            break;
          }

          message.playStopCmd = LinkPlayStopCmd.decode(reader, reader.uint32());
          continue;
        case 708:
          if (tag !== 5666) {
            break;
          }

          message.playSpeedCmd = LinkPlaySpeedCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 709:
          if (tag !== 5674) {
            break;
          }

          message.playNextFrameCmd = LinkPlayNextFrameCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 710:
          if (tag !== 5682) {
            break;
          }

          message.playPreFrameCmd = LinkPlayPreFrameCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 711:
          if (tag !== 5690) {
            break;
          }

          message.MiVideoData = LinkMiVideoData.decode(reader, reader.uint32());
          continue;
        case 712:
          if (tag !== 5698) {
            break;
          }

          message.MistartLiveCmd = LinkMiStartLiveCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 713:
          if (tag !== 5706) {
            break;
          }

          message.MistopLiveCmd = LinkMiStopLiveCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 714:
          if (tag !== 5714) {
            break;
          }

          message.MiplayBackCmd = LinkMiPlayBackCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 715:
          if (tag !== 5722) {
            break;
          }

          message.MiplayPauseCmd = LinkMiPlayPauseCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 716:
          if (tag !== 5730) {
            break;
          }

          message.MiplayResumeCmd = LinkMiPlayResumeCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 717:
          if (tag !== 5738) {
            break;
          }

          message.MiplaySeekCmd = LinkMiPlaySeekCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 718:
          if (tag !== 5746) {
            break;
          }

          message.MiplayStopCmd = LinkMiPlayStopCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 719:
          if (tag !== 5754) {
            break;
          }

          message.MiplaySpeedCmd = LinkMiPlaySpeedCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 720:
          if (tag !== 5762) {
            break;
          }

          message.MiplayNextFrameCmd = LinkMiPlayNextFrameCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 721:
          if (tag !== 5770) {
            break;
          }

          message.MiplayPreFrameCmd = LinkMiPlayPreFrameCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 722:
          if (tag !== 5778) {
            break;
          }

          message.MichangeStreamCmd = LinkMiChangeStreamCmd.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 801:
          if (tag !== 6410) {
            break;
          }

          message.ptzCmd = LinkPtzCmd.decode(reader, reader.uint32());
          continue;
        case 901:
          if (tag !== 7210) {
            break;
          }

          message.camSearchStartReq = LinkCamSearchStartReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 902:
          if (tag !== 7218) {
            break;
          }

          message.camSearchStartResp = LinkCamSearchStartResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 903:
          if (tag !== 7226) {
            break;
          }

          message.camSearchStopReq = LinkCamSearchStopReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 904:
          if (tag !== 7234) {
            break;
          }

          message.camSearchStopResp = LinkCamSearchStopResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 905:
          if (tag !== 7242) {
            break;
          }

          message.regEventReq = LinkRegEventReq.decode(reader, reader.uint32());
          continue;
        case 906:
          if (tag !== 7250) {
            break;
          }

          message.regEventResp = LinkRegEventResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 907:
          if (tag !== 7258) {
            break;
          }

          message.unRegEventReq = LinkUnRegEventReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 908:
          if (tag !== 7266) {
            break;
          }

          message.unRegEventResp = LinkUnRegEventResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 909:
          if (tag !== 7274) {
            break;
          }

          message.eventSearchReq = LinkEventSearchReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 910:
          if (tag !== 7282) {
            break;
          }

          message.eventSearchResp = LinkEventSearchResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 911:
          if (tag !== 7290) {
            break;
          }

          message.handleEventReq = LinkHandleEventReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 912:
          if (tag !== 7298) {
            break;
          }

          message.handleEventResp = LinkHandleEventResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10001:
          if (tag !== 80010) {
            break;
          }

          message.camAddNotify = LinkCamAddNotify.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10002:
          if (tag !== 80018) {
            break;
          }

          message.camIdNotify = LinkCamIdNotify.decode(reader, reader.uint32());
          continue;
        case 10003:
          if (tag !== 80026) {
            break;
          }

          message.camSearchedNotify = LinkCamSearchedNotify.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 10004:
          if (tag !== 80034) {
            break;
          }

          message.evnetNotify = LinkEventNotify.decode(reader, reader.uint32());
          continue;
        case 20000:
          if (tag !== 160002) {
            break;
          }

          message.regSocketNotifyReq = LinkRegSocketNotifyReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20001:
          if (tag !== 160010) {
            break;
          }

          message.regSocketNotifyResp = LinkRegSocketNotifyResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20002:
          if (tag !== 160018) {
            break;
          }

          message.socketCntReq = LinkVidSocketCntReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20003:
          if (tag !== 160026) {
            break;
          }

          message.socketCntResp = LinkVidSocketCntResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20004:
          if (tag !== 160034) {
            break;
          }

          message.socketListReq = LinkVidSocketListReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20005:
          if (tag !== 160042) {
            break;
          }

          message.socketListResp = LinkVidSocketListResp.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20006:
          if (tag !== 160050) {
            break;
          }

          message.socketAddNotify = LinkSocketAddNotify.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20007:
          if (tag !== 160058) {
            break;
          }

          message.socketDelNotify = LinkSocketDelNotify.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20008:
          if (tag !== 160066) {
            break;
          }

          message.socketEmptyNotify = LinkSocketEmptyNotify.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20009:
          if (tag !== 160074) {
            break;
          }

          message.socketFullNotify = LinkSocketFullNotify.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20010:
          if (tag !== 160082) {
            break;
          }

          message.socketSetSocketReq = LinkSocketSetSocketReq.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 20011:
          if (tag !== 160090) {
            break;
          }

          message.socketSetSocketResp = LinkSocketSetSocketResp.decode(
            reader,
            reader.uint32(),
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

  fromJSON(object: any): LinkCmd {
    return {
      type: isSet(object.type) ? linkCmdTypeFromJSON(object.type) : 0,
      loginReq: isSet(object.loginReq)
        ? LinkLoginReq.fromJSON(object.loginReq)
        : undefined,
      loginResp: isSet(object.loginResp)
        ? LinkLoginResp.fromJSON(object.loginResp)
        : undefined,
      keepaliveReq: isSet(object.keepaliveReq)
        ? LinkKeepaliveReq.fromJSON(object.keepaliveReq)
        : undefined,
      keepaliveResp: isSet(object.keepaliveResp)
        ? LinkKeepaliveResp.fromJSON(object.keepaliveResp)
        : undefined,
      regNotifyReq: isSet(object.regNotifyReq)
        ? LinkRegNotifyReq.fromJSON(object.regNotifyReq)
        : undefined,
      regNotifyResp: isSet(object.regNotifyResp)
        ? LinkRegNotifyResp.fromJSON(object.regNotifyResp)
        : undefined,
      setLogLevelReq: isSet(object.setLogLevelReq)
        ? LinkSetLogLevelReq.fromJSON(object.setLogLevelReq)
        : undefined,
      setLogLevelResp: isSet(object.setLogLevelResp)
        ? LinkSetLogLevelResp.fromJSON(object.setLogLevelResp)
        : undefined,
      camListReq: isSet(object.camListReq)
        ? LinkListCamReq.fromJSON(object.camListReq)
        : undefined,
      camListResp: isSet(object.camListResp)
        ? LinkListCamResp.fromJSON(object.camListResp)
        : undefined,
      camReq: isSet(object.camReq)
        ? LinkCamReq.fromJSON(object.camReq)
        : undefined,
      camResp: isSet(object.camResp)
        ? LinkCamResp.fromJSON(object.camResp)
        : undefined,
      addCamReq: isSet(object.addCamReq)
        ? LinkAddCamReq.fromJSON(object.addCamReq)
        : undefined,
      addCamResp: isSet(object.addCamResp)
        ? LinkAddCamResp.fromJSON(object.addCamResp)
        : undefined,
      delCamReq: isSet(object.delCamReq)
        ? LinkDelCamReq.fromJSON(object.delCamReq)
        : undefined,
      delCamResp: isSet(object.delCamResp)
        ? LinkDelCamResp.fromJSON(object.delCamResp)
        : undefined,
      setCamSchedReq: isSet(object.setCamSchedReq)
        ? LinkSetCamSchedReq.fromJSON(object.setCamSchedReq)
        : undefined,
      setCamSchedResp: isSet(object.setCamSchedResp)
        ? LinkSetCamSchedResp.fromJSON(object.setCamSchedResp)
        : undefined,
      getStreamListReq: isSet(object.getStreamListReq)
        ? LinkGetStreamListReq.fromJSON(object.getStreamListReq)
        : undefined,
      getStreamListResp: isSet(object.getStreamListResp)
        ? LinkGetStreamListResp.fromJSON(object.getStreamListResp)
        : undefined,
      diskListReq: isSet(object.diskListReq)
        ? LinkVidDiskListReq.fromJSON(object.diskListReq)
        : undefined,
      diskListResp: isSet(object.diskListResp)
        ? LinkVidDiskListResp.fromJSON(object.diskListResp)
        : undefined,
      sysDiskListReq: isSet(object.sysDiskListReq)
        ? LinkSysVidDiskListReq.fromJSON(object.sysDiskListReq)
        : undefined,
      sysDiskListResp: isSet(object.sysDiskListResp)
        ? LinkSysVidDiskListResp.fromJSON(object.sysDiskListResp)
        : undefined,
      addDiskReq: isSet(object.addDiskReq)
        ? LinkAddDiskReq.fromJSON(object.addDiskReq)
        : undefined,
      addDiskResp: isSet(object.addDiskResp)
        ? LinkAddDiskResp.fromJSON(object.addDiskResp)
        : undefined,
      delDiskReq: isSet(object.delDiskReq)
        ? LinkDelDiskReq.fromJSON(object.delDiskReq)
        : undefined,
      delDiskResp: isSet(object.delDiskResp)
        ? LinkDelDiskResp.fromJSON(object.delDiskResp)
        : undefined,
      diskLimitReq: isSet(object.diskLimitReq)
        ? LinkUpdateDiskLimitReq.fromJSON(object.diskLimitReq)
        : undefined,
      diskLimitResp: isSet(object.diskLimitResp)
        ? LinkUpdateDiskLimitResp.fromJSON(object.diskLimitResp)
        : undefined,
      licReq: isSet(object.licReq)
        ? LinkGetLicReq.fromJSON(object.licReq)
        : undefined,
      licResp: isSet(object.licResp)
        ? LinkGetLicResp.fromJSON(object.licResp)
        : undefined,
      verReq: isSet(object.verReq)
        ? LinkGetVerReq.fromJSON(object.verReq)
        : undefined,
      verResp: isSet(object.verResp)
        ? LinkGetVerResp.fromJSON(object.verResp)
        : undefined,
      confLicReq: isSet(object.confLicReq)
        ? LinkConfLicReq.fromJSON(object.confLicReq)
        : undefined,
      confLicResp: isSet(object.confLicResp)
        ? LinkConfLicResp.fromJSON(object.confLicResp)
        : undefined,
      addUserReq: isSet(object.addUserReq)
        ? LinkAddUserReq.fromJSON(object.addUserReq)
        : undefined,
      addUserResp: isSet(object.addUserResp)
        ? LinkAddUserResp.fromJSON(object.addUserResp)
        : undefined,
      hasRecReq: isSet(object.hasRecReq)
        ? LinkHasRecordReq.fromJSON(object.hasRecReq)
        : undefined,
      hasRecResp: isSet(object.hasRecResp)
        ? LinkHasRecordResp.fromJSON(object.hasRecResp)
        : undefined,
      searchRecReq: isSet(object.searchRecReq)
        ? LinkSearchRecordReq.fromJSON(object.searchRecReq)
        : undefined,
      searchRecResp: isSet(object.searchRecResp)
        ? LinkSearchRecordResp.fromJSON(object.searchRecResp)
        : undefined,
      startLiveCmd: isSet(object.startLiveCmd)
        ? LinkStartLiveCmd.fromJSON(object.startLiveCmd)
        : undefined,
      stopLiveCmd: isSet(object.stopLiveCmd)
        ? LinkStopLiveCmd.fromJSON(object.stopLiveCmd)
        : undefined,
      playBackCmd: isSet(object.playBackCmd)
        ? LinkPlayBackCmd.fromJSON(object.playBackCmd)
        : undefined,
      playPauseCmd: isSet(object.playPauseCmd)
        ? LinkPlayPauseCmd.fromJSON(object.playPauseCmd)
        : undefined,
      playResumeCmd: isSet(object.playResumeCmd)
        ? LinkPlayResumeCmd.fromJSON(object.playResumeCmd)
        : undefined,
      playSeekCmd: isSet(object.playSeekCmd)
        ? LinkPlaySeekCmd.fromJSON(object.playSeekCmd)
        : undefined,
      playStopCmd: isSet(object.playStopCmd)
        ? LinkPlayStopCmd.fromJSON(object.playStopCmd)
        : undefined,
      playSpeedCmd: isSet(object.playSpeedCmd)
        ? LinkPlaySpeedCmd.fromJSON(object.playSpeedCmd)
        : undefined,
      playNextFrameCmd: isSet(object.playNextFrameCmd)
        ? LinkPlayNextFrameCmd.fromJSON(object.playNextFrameCmd)
        : undefined,
      playPreFrameCmd: isSet(object.playPreFrameCmd)
        ? LinkPlayPreFrameCmd.fromJSON(object.playPreFrameCmd)
        : undefined,
      MiVideoData: isSet(object.MiVideoData)
        ? LinkMiVideoData.fromJSON(object.MiVideoData)
        : undefined,
      MistartLiveCmd: isSet(object.MistartLiveCmd)
        ? LinkMiStartLiveCmd.fromJSON(object.MistartLiveCmd)
        : undefined,
      MistopLiveCmd: isSet(object.MistopLiveCmd)
        ? LinkMiStopLiveCmd.fromJSON(object.MistopLiveCmd)
        : undefined,
      MiplayBackCmd: isSet(object.MiplayBackCmd)
        ? LinkMiPlayBackCmd.fromJSON(object.MiplayBackCmd)
        : undefined,
      MiplayPauseCmd: isSet(object.MiplayPauseCmd)
        ? LinkMiPlayPauseCmd.fromJSON(object.MiplayPauseCmd)
        : undefined,
      MiplayResumeCmd: isSet(object.MiplayResumeCmd)
        ? LinkMiPlayResumeCmd.fromJSON(object.MiplayResumeCmd)
        : undefined,
      MiplaySeekCmd: isSet(object.MiplaySeekCmd)
        ? LinkMiPlaySeekCmd.fromJSON(object.MiplaySeekCmd)
        : undefined,
      MiplayStopCmd: isSet(object.MiplayStopCmd)
        ? LinkMiPlayStopCmd.fromJSON(object.MiplayStopCmd)
        : undefined,
      MiplaySpeedCmd: isSet(object.MiplaySpeedCmd)
        ? LinkMiPlaySpeedCmd.fromJSON(object.MiplaySpeedCmd)
        : undefined,
      MiplayNextFrameCmd: isSet(object.MiplayNextFrameCmd)
        ? LinkMiPlayNextFrameCmd.fromJSON(object.MiplayNextFrameCmd)
        : undefined,
      MiplayPreFrameCmd: isSet(object.MiplayPreFrameCmd)
        ? LinkMiPlayPreFrameCmd.fromJSON(object.MiplayPreFrameCmd)
        : undefined,
      MichangeStreamCmd: isSet(object.MichangeStreamCmd)
        ? LinkMiChangeStreamCmd.fromJSON(object.MichangeStreamCmd)
        : undefined,
      ptzCmd: isSet(object.ptzCmd)
        ? LinkPtzCmd.fromJSON(object.ptzCmd)
        : undefined,
      camSearchStartReq: isSet(object.camSearchStartReq)
        ? LinkCamSearchStartReq.fromJSON(object.camSearchStartReq)
        : undefined,
      camSearchStartResp: isSet(object.camSearchStartResp)
        ? LinkCamSearchStartResp.fromJSON(object.camSearchStartResp)
        : undefined,
      camSearchStopReq: isSet(object.camSearchStopReq)
        ? LinkCamSearchStopReq.fromJSON(object.camSearchStopReq)
        : undefined,
      camSearchStopResp: isSet(object.camSearchStopResp)
        ? LinkCamSearchStopResp.fromJSON(object.camSearchStopResp)
        : undefined,
      regEventReq: isSet(object.regEventReq)
        ? LinkRegEventReq.fromJSON(object.regEventReq)
        : undefined,
      regEventResp: isSet(object.regEventResp)
        ? LinkRegEventResp.fromJSON(object.regEventResp)
        : undefined,
      unRegEventReq: isSet(object.unRegEventReq)
        ? LinkUnRegEventReq.fromJSON(object.unRegEventReq)
        : undefined,
      unRegEventResp: isSet(object.unRegEventResp)
        ? LinkUnRegEventResp.fromJSON(object.unRegEventResp)
        : undefined,
      eventSearchReq: isSet(object.eventSearchReq)
        ? LinkEventSearchReq.fromJSON(object.eventSearchReq)
        : undefined,
      eventSearchResp: isSet(object.eventSearchResp)
        ? LinkEventSearchResp.fromJSON(object.eventSearchResp)
        : undefined,
      handleEventReq: isSet(object.handleEventReq)
        ? LinkHandleEventReq.fromJSON(object.handleEventReq)
        : undefined,
      handleEventResp: isSet(object.handleEventResp)
        ? LinkHandleEventResp.fromJSON(object.handleEventResp)
        : undefined,
      camAddNotify: isSet(object.camAddNotify)
        ? LinkCamAddNotify.fromJSON(object.camAddNotify)
        : undefined,
      camIdNotify: isSet(object.camIdNotify)
        ? LinkCamIdNotify.fromJSON(object.camIdNotify)
        : undefined,
      camSearchedNotify: isSet(object.camSearchedNotify)
        ? LinkCamSearchedNotify.fromJSON(object.camSearchedNotify)
        : undefined,
      evnetNotify: isSet(object.evnetNotify)
        ? LinkEventNotify.fromJSON(object.evnetNotify)
        : undefined,
      regSocketNotifyReq: isSet(object.regSocketNotifyReq)
        ? LinkRegSocketNotifyReq.fromJSON(object.regSocketNotifyReq)
        : undefined,
      regSocketNotifyResp: isSet(object.regSocketNotifyResp)
        ? LinkRegSocketNotifyResp.fromJSON(object.regSocketNotifyResp)
        : undefined,
      socketCntReq: isSet(object.socketCntReq)
        ? LinkVidSocketCntReq.fromJSON(object.socketCntReq)
        : undefined,
      socketCntResp: isSet(object.socketCntResp)
        ? LinkVidSocketCntResp.fromJSON(object.socketCntResp)
        : undefined,
      socketListReq: isSet(object.socketListReq)
        ? LinkVidSocketListReq.fromJSON(object.socketListReq)
        : undefined,
      socketListResp: isSet(object.socketListResp)
        ? LinkVidSocketListResp.fromJSON(object.socketListResp)
        : undefined,
      socketAddNotify: isSet(object.socketAddNotify)
        ? LinkSocketAddNotify.fromJSON(object.socketAddNotify)
        : undefined,
      socketDelNotify: isSet(object.socketDelNotify)
        ? LinkSocketDelNotify.fromJSON(object.socketDelNotify)
        : undefined,
      socketEmptyNotify: isSet(object.socketEmptyNotify)
        ? LinkSocketEmptyNotify.fromJSON(object.socketEmptyNotify)
        : undefined,
      socketFullNotify: isSet(object.socketFullNotify)
        ? LinkSocketFullNotify.fromJSON(object.socketFullNotify)
        : undefined,
      socketSetSocketReq: isSet(object.socketSetSocketReq)
        ? LinkSocketSetSocketReq.fromJSON(object.socketSetSocketReq)
        : undefined,
      socketSetSocketResp: isSet(object.socketSetSocketResp)
        ? LinkSocketSetSocketResp.fromJSON(object.socketSetSocketResp)
        : undefined,
    };
  },

  toJSON(message: LinkCmd): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = linkCmdTypeToJSON(message.type);
    }
    if (message.loginReq !== undefined) {
      obj.loginReq = LinkLoginReq.toJSON(message.loginReq);
    }
    if (message.loginResp !== undefined) {
      obj.loginResp = LinkLoginResp.toJSON(message.loginResp);
    }
    if (message.keepaliveReq !== undefined) {
      obj.keepaliveReq = LinkKeepaliveReq.toJSON(message.keepaliveReq);
    }
    if (message.keepaliveResp !== undefined) {
      obj.keepaliveResp = LinkKeepaliveResp.toJSON(message.keepaliveResp);
    }
    if (message.regNotifyReq !== undefined) {
      obj.regNotifyReq = LinkRegNotifyReq.toJSON(message.regNotifyReq);
    }
    if (message.regNotifyResp !== undefined) {
      obj.regNotifyResp = LinkRegNotifyResp.toJSON(message.regNotifyResp);
    }
    if (message.setLogLevelReq !== undefined) {
      obj.setLogLevelReq = LinkSetLogLevelReq.toJSON(message.setLogLevelReq);
    }
    if (message.setLogLevelResp !== undefined) {
      obj.setLogLevelResp = LinkSetLogLevelResp.toJSON(message.setLogLevelResp);
    }
    if (message.camListReq !== undefined) {
      obj.camListReq = LinkListCamReq.toJSON(message.camListReq);
    }
    if (message.camListResp !== undefined) {
      obj.camListResp = LinkListCamResp.toJSON(message.camListResp);
    }
    if (message.camReq !== undefined) {
      obj.camReq = LinkCamReq.toJSON(message.camReq);
    }
    if (message.camResp !== undefined) {
      obj.camResp = LinkCamResp.toJSON(message.camResp);
    }
    if (message.addCamReq !== undefined) {
      obj.addCamReq = LinkAddCamReq.toJSON(message.addCamReq);
    }
    if (message.addCamResp !== undefined) {
      obj.addCamResp = LinkAddCamResp.toJSON(message.addCamResp);
    }
    if (message.delCamReq !== undefined) {
      obj.delCamReq = LinkDelCamReq.toJSON(message.delCamReq);
    }
    if (message.delCamResp !== undefined) {
      obj.delCamResp = LinkDelCamResp.toJSON(message.delCamResp);
    }
    if (message.setCamSchedReq !== undefined) {
      obj.setCamSchedReq = LinkSetCamSchedReq.toJSON(message.setCamSchedReq);
    }
    if (message.setCamSchedResp !== undefined) {
      obj.setCamSchedResp = LinkSetCamSchedResp.toJSON(message.setCamSchedResp);
    }
    if (message.getStreamListReq !== undefined) {
      obj.getStreamListReq = LinkGetStreamListReq.toJSON(
        message.getStreamListReq,
      );
    }
    if (message.getStreamListResp !== undefined) {
      obj.getStreamListResp = LinkGetStreamListResp.toJSON(
        message.getStreamListResp,
      );
    }
    if (message.diskListReq !== undefined) {
      obj.diskListReq = LinkVidDiskListReq.toJSON(message.diskListReq);
    }
    if (message.diskListResp !== undefined) {
      obj.diskListResp = LinkVidDiskListResp.toJSON(message.diskListResp);
    }
    if (message.sysDiskListReq !== undefined) {
      obj.sysDiskListReq = LinkSysVidDiskListReq.toJSON(message.sysDiskListReq);
    }
    if (message.sysDiskListResp !== undefined) {
      obj.sysDiskListResp = LinkSysVidDiskListResp.toJSON(
        message.sysDiskListResp,
      );
    }
    if (message.addDiskReq !== undefined) {
      obj.addDiskReq = LinkAddDiskReq.toJSON(message.addDiskReq);
    }
    if (message.addDiskResp !== undefined) {
      obj.addDiskResp = LinkAddDiskResp.toJSON(message.addDiskResp);
    }
    if (message.delDiskReq !== undefined) {
      obj.delDiskReq = LinkDelDiskReq.toJSON(message.delDiskReq);
    }
    if (message.delDiskResp !== undefined) {
      obj.delDiskResp = LinkDelDiskResp.toJSON(message.delDiskResp);
    }
    if (message.diskLimitReq !== undefined) {
      obj.diskLimitReq = LinkUpdateDiskLimitReq.toJSON(message.diskLimitReq);
    }
    if (message.diskLimitResp !== undefined) {
      obj.diskLimitResp = LinkUpdateDiskLimitResp.toJSON(message.diskLimitResp);
    }
    if (message.licReq !== undefined) {
      obj.licReq = LinkGetLicReq.toJSON(message.licReq);
    }
    if (message.licResp !== undefined) {
      obj.licResp = LinkGetLicResp.toJSON(message.licResp);
    }
    if (message.verReq !== undefined) {
      obj.verReq = LinkGetVerReq.toJSON(message.verReq);
    }
    if (message.verResp !== undefined) {
      obj.verResp = LinkGetVerResp.toJSON(message.verResp);
    }
    if (message.confLicReq !== undefined) {
      obj.confLicReq = LinkConfLicReq.toJSON(message.confLicReq);
    }
    if (message.confLicResp !== undefined) {
      obj.confLicResp = LinkConfLicResp.toJSON(message.confLicResp);
    }
    if (message.addUserReq !== undefined) {
      obj.addUserReq = LinkAddUserReq.toJSON(message.addUserReq);
    }
    if (message.addUserResp !== undefined) {
      obj.addUserResp = LinkAddUserResp.toJSON(message.addUserResp);
    }
    if (message.hasRecReq !== undefined) {
      obj.hasRecReq = LinkHasRecordReq.toJSON(message.hasRecReq);
    }
    if (message.hasRecResp !== undefined) {
      obj.hasRecResp = LinkHasRecordResp.toJSON(message.hasRecResp);
    }
    if (message.searchRecReq !== undefined) {
      obj.searchRecReq = LinkSearchRecordReq.toJSON(message.searchRecReq);
    }
    if (message.searchRecResp !== undefined) {
      obj.searchRecResp = LinkSearchRecordResp.toJSON(message.searchRecResp);
    }
    if (message.startLiveCmd !== undefined) {
      obj.startLiveCmd = LinkStartLiveCmd.toJSON(message.startLiveCmd);
    }
    if (message.stopLiveCmd !== undefined) {
      obj.stopLiveCmd = LinkStopLiveCmd.toJSON(message.stopLiveCmd);
    }
    if (message.playBackCmd !== undefined) {
      obj.playBackCmd = LinkPlayBackCmd.toJSON(message.playBackCmd);
    }
    if (message.playPauseCmd !== undefined) {
      obj.playPauseCmd = LinkPlayPauseCmd.toJSON(message.playPauseCmd);
    }
    if (message.playResumeCmd !== undefined) {
      obj.playResumeCmd = LinkPlayResumeCmd.toJSON(message.playResumeCmd);
    }
    if (message.playSeekCmd !== undefined) {
      obj.playSeekCmd = LinkPlaySeekCmd.toJSON(message.playSeekCmd);
    }
    if (message.playStopCmd !== undefined) {
      obj.playStopCmd = LinkPlayStopCmd.toJSON(message.playStopCmd);
    }
    if (message.playSpeedCmd !== undefined) {
      obj.playSpeedCmd = LinkPlaySpeedCmd.toJSON(message.playSpeedCmd);
    }
    if (message.playNextFrameCmd !== undefined) {
      obj.playNextFrameCmd = LinkPlayNextFrameCmd.toJSON(
        message.playNextFrameCmd,
      );
    }
    if (message.playPreFrameCmd !== undefined) {
      obj.playPreFrameCmd = LinkPlayPreFrameCmd.toJSON(message.playPreFrameCmd);
    }
    if (message.MiVideoData !== undefined) {
      obj.MiVideoData = LinkMiVideoData.toJSON(message.MiVideoData);
    }
    if (message.MistartLiveCmd !== undefined) {
      obj.MistartLiveCmd = LinkMiStartLiveCmd.toJSON(message.MistartLiveCmd);
    }
    if (message.MistopLiveCmd !== undefined) {
      obj.MistopLiveCmd = LinkMiStopLiveCmd.toJSON(message.MistopLiveCmd);
    }
    if (message.MiplayBackCmd !== undefined) {
      obj.MiplayBackCmd = LinkMiPlayBackCmd.toJSON(message.MiplayBackCmd);
    }
    if (message.MiplayPauseCmd !== undefined) {
      obj.MiplayPauseCmd = LinkMiPlayPauseCmd.toJSON(message.MiplayPauseCmd);
    }
    if (message.MiplayResumeCmd !== undefined) {
      obj.MiplayResumeCmd = LinkMiPlayResumeCmd.toJSON(message.MiplayResumeCmd);
    }
    if (message.MiplaySeekCmd !== undefined) {
      obj.MiplaySeekCmd = LinkMiPlaySeekCmd.toJSON(message.MiplaySeekCmd);
    }
    if (message.MiplayStopCmd !== undefined) {
      obj.MiplayStopCmd = LinkMiPlayStopCmd.toJSON(message.MiplayStopCmd);
    }
    if (message.MiplaySpeedCmd !== undefined) {
      obj.MiplaySpeedCmd = LinkMiPlaySpeedCmd.toJSON(message.MiplaySpeedCmd);
    }
    if (message.MiplayNextFrameCmd !== undefined) {
      obj.MiplayNextFrameCmd = LinkMiPlayNextFrameCmd.toJSON(
        message.MiplayNextFrameCmd,
      );
    }
    if (message.MiplayPreFrameCmd !== undefined) {
      obj.MiplayPreFrameCmd = LinkMiPlayPreFrameCmd.toJSON(
        message.MiplayPreFrameCmd,
      );
    }
    if (message.MichangeStreamCmd !== undefined) {
      obj.MichangeStreamCmd = LinkMiChangeStreamCmd.toJSON(
        message.MichangeStreamCmd,
      );
    }
    if (message.ptzCmd !== undefined) {
      obj.ptzCmd = LinkPtzCmd.toJSON(message.ptzCmd);
    }
    if (message.camSearchStartReq !== undefined) {
      obj.camSearchStartReq = LinkCamSearchStartReq.toJSON(
        message.camSearchStartReq,
      );
    }
    if (message.camSearchStartResp !== undefined) {
      obj.camSearchStartResp = LinkCamSearchStartResp.toJSON(
        message.camSearchStartResp,
      );
    }
    if (message.camSearchStopReq !== undefined) {
      obj.camSearchStopReq = LinkCamSearchStopReq.toJSON(
        message.camSearchStopReq,
      );
    }
    if (message.camSearchStopResp !== undefined) {
      obj.camSearchStopResp = LinkCamSearchStopResp.toJSON(
        message.camSearchStopResp,
      );
    }
    if (message.regEventReq !== undefined) {
      obj.regEventReq = LinkRegEventReq.toJSON(message.regEventReq);
    }
    if (message.regEventResp !== undefined) {
      obj.regEventResp = LinkRegEventResp.toJSON(message.regEventResp);
    }
    if (message.unRegEventReq !== undefined) {
      obj.unRegEventReq = LinkUnRegEventReq.toJSON(message.unRegEventReq);
    }
    if (message.unRegEventResp !== undefined) {
      obj.unRegEventResp = LinkUnRegEventResp.toJSON(message.unRegEventResp);
    }
    if (message.eventSearchReq !== undefined) {
      obj.eventSearchReq = LinkEventSearchReq.toJSON(message.eventSearchReq);
    }
    if (message.eventSearchResp !== undefined) {
      obj.eventSearchResp = LinkEventSearchResp.toJSON(message.eventSearchResp);
    }
    if (message.handleEventReq !== undefined) {
      obj.handleEventReq = LinkHandleEventReq.toJSON(message.handleEventReq);
    }
    if (message.handleEventResp !== undefined) {
      obj.handleEventResp = LinkHandleEventResp.toJSON(message.handleEventResp);
    }
    if (message.camAddNotify !== undefined) {
      obj.camAddNotify = LinkCamAddNotify.toJSON(message.camAddNotify);
    }
    if (message.camIdNotify !== undefined) {
      obj.camIdNotify = LinkCamIdNotify.toJSON(message.camIdNotify);
    }
    if (message.camSearchedNotify !== undefined) {
      obj.camSearchedNotify = LinkCamSearchedNotify.toJSON(
        message.camSearchedNotify,
      );
    }
    if (message.evnetNotify !== undefined) {
      obj.evnetNotify = LinkEventNotify.toJSON(message.evnetNotify);
    }
    if (message.regSocketNotifyReq !== undefined) {
      obj.regSocketNotifyReq = LinkRegSocketNotifyReq.toJSON(
        message.regSocketNotifyReq,
      );
    }
    if (message.regSocketNotifyResp !== undefined) {
      obj.regSocketNotifyResp = LinkRegSocketNotifyResp.toJSON(
        message.regSocketNotifyResp,
      );
    }
    if (message.socketCntReq !== undefined) {
      obj.socketCntReq = LinkVidSocketCntReq.toJSON(message.socketCntReq);
    }
    if (message.socketCntResp !== undefined) {
      obj.socketCntResp = LinkVidSocketCntResp.toJSON(message.socketCntResp);
    }
    if (message.socketListReq !== undefined) {
      obj.socketListReq = LinkVidSocketListReq.toJSON(message.socketListReq);
    }
    if (message.socketListResp !== undefined) {
      obj.socketListResp = LinkVidSocketListResp.toJSON(message.socketListResp);
    }
    if (message.socketAddNotify !== undefined) {
      obj.socketAddNotify = LinkSocketAddNotify.toJSON(message.socketAddNotify);
    }
    if (message.socketDelNotify !== undefined) {
      obj.socketDelNotify = LinkSocketDelNotify.toJSON(message.socketDelNotify);
    }
    if (message.socketEmptyNotify !== undefined) {
      obj.socketEmptyNotify = LinkSocketEmptyNotify.toJSON(
        message.socketEmptyNotify,
      );
    }
    if (message.socketFullNotify !== undefined) {
      obj.socketFullNotify = LinkSocketFullNotify.toJSON(
        message.socketFullNotify,
      );
    }
    if (message.socketSetSocketReq !== undefined) {
      obj.socketSetSocketReq = LinkSocketSetSocketReq.toJSON(
        message.socketSetSocketReq,
      );
    }
    if (message.socketSetSocketResp !== undefined) {
      obj.socketSetSocketResp = LinkSocketSetSocketResp.toJSON(
        message.socketSetSocketResp,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LinkCmd>, I>>(base?: I): LinkCmd {
    return LinkCmd.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LinkCmd>, I>>(object: I): LinkCmd {
    const message = createBaseLinkCmd();
    message.type = object.type ?? 0;
    message.loginReq =
      object.loginReq !== undefined && object.loginReq !== null
        ? LinkLoginReq.fromPartial(object.loginReq)
        : undefined;
    message.loginResp =
      object.loginResp !== undefined && object.loginResp !== null
        ? LinkLoginResp.fromPartial(object.loginResp)
        : undefined;
    message.keepaliveReq =
      object.keepaliveReq !== undefined && object.keepaliveReq !== null
        ? LinkKeepaliveReq.fromPartial(object.keepaliveReq)
        : undefined;
    message.keepaliveResp =
      object.keepaliveResp !== undefined && object.keepaliveResp !== null
        ? LinkKeepaliveResp.fromPartial(object.keepaliveResp)
        : undefined;
    message.regNotifyReq =
      object.regNotifyReq !== undefined && object.regNotifyReq !== null
        ? LinkRegNotifyReq.fromPartial(object.regNotifyReq)
        : undefined;
    message.regNotifyResp =
      object.regNotifyResp !== undefined && object.regNotifyResp !== null
        ? LinkRegNotifyResp.fromPartial(object.regNotifyResp)
        : undefined;
    message.setLogLevelReq =
      object.setLogLevelReq !== undefined && object.setLogLevelReq !== null
        ? LinkSetLogLevelReq.fromPartial(object.setLogLevelReq)
        : undefined;
    message.setLogLevelResp =
      object.setLogLevelResp !== undefined && object.setLogLevelResp !== null
        ? LinkSetLogLevelResp.fromPartial(object.setLogLevelResp)
        : undefined;
    message.camListReq =
      object.camListReq !== undefined && object.camListReq !== null
        ? LinkListCamReq.fromPartial(object.camListReq)
        : undefined;
    message.camListResp =
      object.camListResp !== undefined && object.camListResp !== null
        ? LinkListCamResp.fromPartial(object.camListResp)
        : undefined;
    message.camReq =
      object.camReq !== undefined && object.camReq !== null
        ? LinkCamReq.fromPartial(object.camReq)
        : undefined;
    message.camResp =
      object.camResp !== undefined && object.camResp !== null
        ? LinkCamResp.fromPartial(object.camResp)
        : undefined;
    message.addCamReq =
      object.addCamReq !== undefined && object.addCamReq !== null
        ? LinkAddCamReq.fromPartial(object.addCamReq)
        : undefined;
    message.addCamResp =
      object.addCamResp !== undefined && object.addCamResp !== null
        ? LinkAddCamResp.fromPartial(object.addCamResp)
        : undefined;
    message.delCamReq =
      object.delCamReq !== undefined && object.delCamReq !== null
        ? LinkDelCamReq.fromPartial(object.delCamReq)
        : undefined;
    message.delCamResp =
      object.delCamResp !== undefined && object.delCamResp !== null
        ? LinkDelCamResp.fromPartial(object.delCamResp)
        : undefined;
    message.setCamSchedReq =
      object.setCamSchedReq !== undefined && object.setCamSchedReq !== null
        ? LinkSetCamSchedReq.fromPartial(object.setCamSchedReq)
        : undefined;
    message.setCamSchedResp =
      object.setCamSchedResp !== undefined && object.setCamSchedResp !== null
        ? LinkSetCamSchedResp.fromPartial(object.setCamSchedResp)
        : undefined;
    message.getStreamListReq =
      object.getStreamListReq !== undefined && object.getStreamListReq !== null
        ? LinkGetStreamListReq.fromPartial(object.getStreamListReq)
        : undefined;
    message.getStreamListResp =
      object.getStreamListResp !== undefined &&
      object.getStreamListResp !== null
        ? LinkGetStreamListResp.fromPartial(object.getStreamListResp)
        : undefined;
    message.diskListReq =
      object.diskListReq !== undefined && object.diskListReq !== null
        ? LinkVidDiskListReq.fromPartial(object.diskListReq)
        : undefined;
    message.diskListResp =
      object.diskListResp !== undefined && object.diskListResp !== null
        ? LinkVidDiskListResp.fromPartial(object.diskListResp)
        : undefined;
    message.sysDiskListReq =
      object.sysDiskListReq !== undefined && object.sysDiskListReq !== null
        ? LinkSysVidDiskListReq.fromPartial(object.sysDiskListReq)
        : undefined;
    message.sysDiskListResp =
      object.sysDiskListResp !== undefined && object.sysDiskListResp !== null
        ? LinkSysVidDiskListResp.fromPartial(object.sysDiskListResp)
        : undefined;
    message.addDiskReq =
      object.addDiskReq !== undefined && object.addDiskReq !== null
        ? LinkAddDiskReq.fromPartial(object.addDiskReq)
        : undefined;
    message.addDiskResp =
      object.addDiskResp !== undefined && object.addDiskResp !== null
        ? LinkAddDiskResp.fromPartial(object.addDiskResp)
        : undefined;
    message.delDiskReq =
      object.delDiskReq !== undefined && object.delDiskReq !== null
        ? LinkDelDiskReq.fromPartial(object.delDiskReq)
        : undefined;
    message.delDiskResp =
      object.delDiskResp !== undefined && object.delDiskResp !== null
        ? LinkDelDiskResp.fromPartial(object.delDiskResp)
        : undefined;
    message.diskLimitReq =
      object.diskLimitReq !== undefined && object.diskLimitReq !== null
        ? LinkUpdateDiskLimitReq.fromPartial(object.diskLimitReq)
        : undefined;
    message.diskLimitResp =
      object.diskLimitResp !== undefined && object.diskLimitResp !== null
        ? LinkUpdateDiskLimitResp.fromPartial(object.diskLimitResp)
        : undefined;
    message.licReq =
      object.licReq !== undefined && object.licReq !== null
        ? LinkGetLicReq.fromPartial(object.licReq)
        : undefined;
    message.licResp =
      object.licResp !== undefined && object.licResp !== null
        ? LinkGetLicResp.fromPartial(object.licResp)
        : undefined;
    message.verReq =
      object.verReq !== undefined && object.verReq !== null
        ? LinkGetVerReq.fromPartial(object.verReq)
        : undefined;
    message.verResp =
      object.verResp !== undefined && object.verResp !== null
        ? LinkGetVerResp.fromPartial(object.verResp)
        : undefined;
    message.confLicReq =
      object.confLicReq !== undefined && object.confLicReq !== null
        ? LinkConfLicReq.fromPartial(object.confLicReq)
        : undefined;
    message.confLicResp =
      object.confLicResp !== undefined && object.confLicResp !== null
        ? LinkConfLicResp.fromPartial(object.confLicResp)
        : undefined;
    message.addUserReq =
      object.addUserReq !== undefined && object.addUserReq !== null
        ? LinkAddUserReq.fromPartial(object.addUserReq)
        : undefined;
    message.addUserResp =
      object.addUserResp !== undefined && object.addUserResp !== null
        ? LinkAddUserResp.fromPartial(object.addUserResp)
        : undefined;
    message.hasRecReq =
      object.hasRecReq !== undefined && object.hasRecReq !== null
        ? LinkHasRecordReq.fromPartial(object.hasRecReq)
        : undefined;
    message.hasRecResp =
      object.hasRecResp !== undefined && object.hasRecResp !== null
        ? LinkHasRecordResp.fromPartial(object.hasRecResp)
        : undefined;
    message.searchRecReq =
      object.searchRecReq !== undefined && object.searchRecReq !== null
        ? LinkSearchRecordReq.fromPartial(object.searchRecReq)
        : undefined;
    message.searchRecResp =
      object.searchRecResp !== undefined && object.searchRecResp !== null
        ? LinkSearchRecordResp.fromPartial(object.searchRecResp)
        : undefined;
    message.startLiveCmd =
      object.startLiveCmd !== undefined && object.startLiveCmd !== null
        ? LinkStartLiveCmd.fromPartial(object.startLiveCmd)
        : undefined;
    message.stopLiveCmd =
      object.stopLiveCmd !== undefined && object.stopLiveCmd !== null
        ? LinkStopLiveCmd.fromPartial(object.stopLiveCmd)
        : undefined;
    message.playBackCmd =
      object.playBackCmd !== undefined && object.playBackCmd !== null
        ? LinkPlayBackCmd.fromPartial(object.playBackCmd)
        : undefined;
    message.playPauseCmd =
      object.playPauseCmd !== undefined && object.playPauseCmd !== null
        ? LinkPlayPauseCmd.fromPartial(object.playPauseCmd)
        : undefined;
    message.playResumeCmd =
      object.playResumeCmd !== undefined && object.playResumeCmd !== null
        ? LinkPlayResumeCmd.fromPartial(object.playResumeCmd)
        : undefined;
    message.playSeekCmd =
      object.playSeekCmd !== undefined && object.playSeekCmd !== null
        ? LinkPlaySeekCmd.fromPartial(object.playSeekCmd)
        : undefined;
    message.playStopCmd =
      object.playStopCmd !== undefined && object.playStopCmd !== null
        ? LinkPlayStopCmd.fromPartial(object.playStopCmd)
        : undefined;
    message.playSpeedCmd =
      object.playSpeedCmd !== undefined && object.playSpeedCmd !== null
        ? LinkPlaySpeedCmd.fromPartial(object.playSpeedCmd)
        : undefined;
    message.playNextFrameCmd =
      object.playNextFrameCmd !== undefined && object.playNextFrameCmd !== null
        ? LinkPlayNextFrameCmd.fromPartial(object.playNextFrameCmd)
        : undefined;
    message.playPreFrameCmd =
      object.playPreFrameCmd !== undefined && object.playPreFrameCmd !== null
        ? LinkPlayPreFrameCmd.fromPartial(object.playPreFrameCmd)
        : undefined;
    message.MiVideoData =
      object.MiVideoData !== undefined && object.MiVideoData !== null
        ? LinkMiVideoData.fromPartial(object.MiVideoData)
        : undefined;
    message.MistartLiveCmd =
      object.MistartLiveCmd !== undefined && object.MistartLiveCmd !== null
        ? LinkMiStartLiveCmd.fromPartial(object.MistartLiveCmd)
        : undefined;
    message.MistopLiveCmd =
      object.MistopLiveCmd !== undefined && object.MistopLiveCmd !== null
        ? LinkMiStopLiveCmd.fromPartial(object.MistopLiveCmd)
        : undefined;
    message.MiplayBackCmd =
      object.MiplayBackCmd !== undefined && object.MiplayBackCmd !== null
        ? LinkMiPlayBackCmd.fromPartial(object.MiplayBackCmd)
        : undefined;
    message.MiplayPauseCmd =
      object.MiplayPauseCmd !== undefined && object.MiplayPauseCmd !== null
        ? LinkMiPlayPauseCmd.fromPartial(object.MiplayPauseCmd)
        : undefined;
    message.MiplayResumeCmd =
      object.MiplayResumeCmd !== undefined && object.MiplayResumeCmd !== null
        ? LinkMiPlayResumeCmd.fromPartial(object.MiplayResumeCmd)
        : undefined;
    message.MiplaySeekCmd =
      object.MiplaySeekCmd !== undefined && object.MiplaySeekCmd !== null
        ? LinkMiPlaySeekCmd.fromPartial(object.MiplaySeekCmd)
        : undefined;
    message.MiplayStopCmd =
      object.MiplayStopCmd !== undefined && object.MiplayStopCmd !== null
        ? LinkMiPlayStopCmd.fromPartial(object.MiplayStopCmd)
        : undefined;
    message.MiplaySpeedCmd =
      object.MiplaySpeedCmd !== undefined && object.MiplaySpeedCmd !== null
        ? LinkMiPlaySpeedCmd.fromPartial(object.MiplaySpeedCmd)
        : undefined;
    message.MiplayNextFrameCmd =
      object.MiplayNextFrameCmd !== undefined &&
      object.MiplayNextFrameCmd !== null
        ? LinkMiPlayNextFrameCmd.fromPartial(object.MiplayNextFrameCmd)
        : undefined;
    message.MiplayPreFrameCmd =
      object.MiplayPreFrameCmd !== undefined &&
      object.MiplayPreFrameCmd !== null
        ? LinkMiPlayPreFrameCmd.fromPartial(object.MiplayPreFrameCmd)
        : undefined;
    message.MichangeStreamCmd =
      object.MichangeStreamCmd !== undefined &&
      object.MichangeStreamCmd !== null
        ? LinkMiChangeStreamCmd.fromPartial(object.MichangeStreamCmd)
        : undefined;
    message.ptzCmd =
      object.ptzCmd !== undefined && object.ptzCmd !== null
        ? LinkPtzCmd.fromPartial(object.ptzCmd)
        : undefined;
    message.camSearchStartReq =
      object.camSearchStartReq !== undefined &&
      object.camSearchStartReq !== null
        ? LinkCamSearchStartReq.fromPartial(object.camSearchStartReq)
        : undefined;
    message.camSearchStartResp =
      object.camSearchStartResp !== undefined &&
      object.camSearchStartResp !== null
        ? LinkCamSearchStartResp.fromPartial(object.camSearchStartResp)
        : undefined;
    message.camSearchStopReq =
      object.camSearchStopReq !== undefined && object.camSearchStopReq !== null
        ? LinkCamSearchStopReq.fromPartial(object.camSearchStopReq)
        : undefined;
    message.camSearchStopResp =
      object.camSearchStopResp !== undefined &&
      object.camSearchStopResp !== null
        ? LinkCamSearchStopResp.fromPartial(object.camSearchStopResp)
        : undefined;
    message.regEventReq =
      object.regEventReq !== undefined && object.regEventReq !== null
        ? LinkRegEventReq.fromPartial(object.regEventReq)
        : undefined;
    message.regEventResp =
      object.regEventResp !== undefined && object.regEventResp !== null
        ? LinkRegEventResp.fromPartial(object.regEventResp)
        : undefined;
    message.unRegEventReq =
      object.unRegEventReq !== undefined && object.unRegEventReq !== null
        ? LinkUnRegEventReq.fromPartial(object.unRegEventReq)
        : undefined;
    message.unRegEventResp =
      object.unRegEventResp !== undefined && object.unRegEventResp !== null
        ? LinkUnRegEventResp.fromPartial(object.unRegEventResp)
        : undefined;
    message.eventSearchReq =
      object.eventSearchReq !== undefined && object.eventSearchReq !== null
        ? LinkEventSearchReq.fromPartial(object.eventSearchReq)
        : undefined;
    message.eventSearchResp =
      object.eventSearchResp !== undefined && object.eventSearchResp !== null
        ? LinkEventSearchResp.fromPartial(object.eventSearchResp)
        : undefined;
    message.handleEventReq =
      object.handleEventReq !== undefined && object.handleEventReq !== null
        ? LinkHandleEventReq.fromPartial(object.handleEventReq)
        : undefined;
    message.handleEventResp =
      object.handleEventResp !== undefined && object.handleEventResp !== null
        ? LinkHandleEventResp.fromPartial(object.handleEventResp)
        : undefined;
    message.camAddNotify =
      object.camAddNotify !== undefined && object.camAddNotify !== null
        ? LinkCamAddNotify.fromPartial(object.camAddNotify)
        : undefined;
    message.camIdNotify =
      object.camIdNotify !== undefined && object.camIdNotify !== null
        ? LinkCamIdNotify.fromPartial(object.camIdNotify)
        : undefined;
    message.camSearchedNotify =
      object.camSearchedNotify !== undefined &&
      object.camSearchedNotify !== null
        ? LinkCamSearchedNotify.fromPartial(object.camSearchedNotify)
        : undefined;
    message.evnetNotify =
      object.evnetNotify !== undefined && object.evnetNotify !== null
        ? LinkEventNotify.fromPartial(object.evnetNotify)
        : undefined;
    message.regSocketNotifyReq =
      object.regSocketNotifyReq !== undefined &&
      object.regSocketNotifyReq !== null
        ? LinkRegSocketNotifyReq.fromPartial(object.regSocketNotifyReq)
        : undefined;
    message.regSocketNotifyResp =
      object.regSocketNotifyResp !== undefined &&
      object.regSocketNotifyResp !== null
        ? LinkRegSocketNotifyResp.fromPartial(object.regSocketNotifyResp)
        : undefined;
    message.socketCntReq =
      object.socketCntReq !== undefined && object.socketCntReq !== null
        ? LinkVidSocketCntReq.fromPartial(object.socketCntReq)
        : undefined;
    message.socketCntResp =
      object.socketCntResp !== undefined && object.socketCntResp !== null
        ? LinkVidSocketCntResp.fromPartial(object.socketCntResp)
        : undefined;
    message.socketListReq =
      object.socketListReq !== undefined && object.socketListReq !== null
        ? LinkVidSocketListReq.fromPartial(object.socketListReq)
        : undefined;
    message.socketListResp =
      object.socketListResp !== undefined && object.socketListResp !== null
        ? LinkVidSocketListResp.fromPartial(object.socketListResp)
        : undefined;
    message.socketAddNotify =
      object.socketAddNotify !== undefined && object.socketAddNotify !== null
        ? LinkSocketAddNotify.fromPartial(object.socketAddNotify)
        : undefined;
    message.socketDelNotify =
      object.socketDelNotify !== undefined && object.socketDelNotify !== null
        ? LinkSocketDelNotify.fromPartial(object.socketDelNotify)
        : undefined;
    message.socketEmptyNotify =
      object.socketEmptyNotify !== undefined &&
      object.socketEmptyNotify !== null
        ? LinkSocketEmptyNotify.fromPartial(object.socketEmptyNotify)
        : undefined;
    message.socketFullNotify =
      object.socketFullNotify !== undefined && object.socketFullNotify !== null
        ? LinkSocketFullNotify.fromPartial(object.socketFullNotify)
        : undefined;
    message.socketSetSocketReq =
      object.socketSetSocketReq !== undefined &&
      object.socketSetSocketReq !== null
        ? LinkSocketSetSocketReq.fromPartial(object.socketSetSocketReq)
        : undefined;
    message.socketSetSocketResp =
      object.socketSetSocketResp !== undefined &&
      object.socketSetSocketResp !== null
        ? LinkSocketSetSocketResp.fromPartial(object.socketSetSocketResp)
        : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
