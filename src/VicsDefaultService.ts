import { VICSDataResponse, VICSDataRequest } from "./types";
import {
  linkCmdTypeFromJSON,
  LinkCmdType,
  linkCmdTypeToJSON,
} from "./types/linkproto";
import { LinkKeepaliveReq, LinkLoginReq } from "./types/linksystem";
import * as CryptoJS from "crypto-js";
import { LINKPROTO, MILINKUSERSTREAM } from "./const";
import EventEmiiter from "./util/EventEmitter.js";

const DEFAULT_RECONNECT_TIME = 5000;
const KEEP_ALIVE = 10000;
const NONCE = "nonce";
export interface VicsConfig {
  ip: string;
  port: string;
  user_id: string;
  password: string;
  reconnect_time?: number;
}

export interface VicsOption {
  path: string;
}

export abstract class VicsDefaultService extends EventEmiiter {
  private timerId: number | null = null;
  private logintry: number;
  private connected: boolean;
  private logined: boolean;
  private disconnected: boolean;
  private ws: WebSocket | undefined;
  private option: VicsOption;

  public config: VicsConfig;

  public Disconnect() {
    this.disconnected = true;

    if (this.ws && this.connected) this.ws.close();

    console.debug("Vics Instance Disconnected");
  }

  constructor(config: VicsConfig, option: VicsOption) {
    super();
    this.config = config;
    this.option = option;
    this.logined = false;
    this.logintry = 0;
    this.connected = false;
    this.disconnected = false;
    this.init();
  }

  private init() {
    this.ws = new WebSocket(
      `ws://${this.config.ip}:${this.config.port}/${this.option.path}`,
    );

    this.ws.binaryType = "arraybuffer";
    this.logined = false;
    this.connected = false;
    this.disconnected = false;
    this.ws.onopen = () => {
      this.connected = true;
      this.login(this.config.user_id, this.config.password, NONCE);
      super.dispatchEvent(new CustomEvent("onOnline"));

      // Session 유지를 위한 Keep Alive
      // 스트리밍 서비스에는 Keep Alive가 필요없음
      if (this.option.path == LINKPROTO) {
        this.timerId = setInterval(() => {
          this.keepAlive();
        }, KEEP_ALIVE) as unknown as number;
      }
    };

    this.ws.onclose = () => {
      this.connected = false;
      super.dispatchEvent(new CustomEvent("onOffline"));

      if (this.timerId) {
        clearTimeout(this.timerId);
      }

      setTimeout(() => {
        if (!this.disconnected) {
          this.init();
        }
      }, this.config.reconnect_time || DEFAULT_RECONNECT_TIME);
    };

    this.ws.onerror = (error) => {
      console.error(error);
    };

    this.ws.onmessage = (event) => {
      if (this.option.path === MILINKUSERSTREAM && this.logined) {
        super.dispatchEvent(
          new CustomEvent<Uint8Array>("onVideoData", {
            detail: new Uint8Array(event.data),
          }),
        );
      } else {
        try {
          const data: VICSDataResponse = JSON.parse(event.data as any);
          data.type = linkCmdTypeFromJSON(data.type);
          switch (data.type) {
            case LinkCmdType.LINK_CMD_LOGIN_RESP: {
              this.processloginresp(
                data,
                this.config.user_id,
                this.config.password,
              );
              break;
            }
            case LinkCmdType.LINK_CMD_KEEPALIVE_RESP: {
              break;
            }
            default:
              super.dispatchEvent(
                new CustomEvent("onMessage", { detail: data }),
              );
              break;
          }
        } catch (e) {
          console.error(e);
        }
      }
    };
  }

  public isConnected(): boolean {
    return this.connected;
  }

  private login(userName: string, passwd: string, nonce: string) {
    const hashedPasswd = CryptoJS.MD5(nonce + passwd).toString(
      CryptoJS.enc.Hex,
    );
    const loginReq: LinkLoginReq = {
      strUserName: userName,
      strPasswd: hashedPasswd,
    };
    const msg: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_LOGIN_REQ,
      loginReq,
    };

    this.sendMessage(msg);
  }

  private processloginresp(cmd: any, user: string, password: string) {
    if (cmd.loginResp.bRetNonce && this.logintry < 5) {
      this.login(user, password, cmd.loginResp.strNonce);
    } else {
      this.logintry++;
      if (cmd.loginResp.bRet) {
        this.logined = true;
        this.logintry = 0;
        super.dispatchEvent(new CustomEvent("onProcessLogin"));
      }
    }
  }

  private keepAlive() {
    const keepaliveReq: LinkKeepaliveReq = {
      nKeepalive: KEEP_ALIVE,
    };

    const request: VICSDataRequest = {
      type: LinkCmdType.LINK_CMD_KEEPALIVE_REQ,
      keepaliveReq,
    };

    this.sendMessage(request);
  }

  protected sendMessage(msg: VICSDataRequest) {
    const { type, ...rest } = msg;

    const data = {
      type: linkCmdTypeToJSON(type),
      ...rest,
    };

    this.ws?.send(JSON.stringify(data));
  }
}
