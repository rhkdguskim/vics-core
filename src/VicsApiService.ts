import axios from "axios";
import * as CryptoJS from 'crypto-js';

interface getCameraImgRequestDto {
  host: string;
  port: string;
  username: string;
  password: string;
  cam_id: string;
  width: number;
  height: number;
}

export const getCameraImage = async (
  payload: getCameraImgRequestDto,
): Promise<string | null> => {
  const { host, port, username, password, cam_id, width, height } = payload;

  try {
    const response = await axios.get(
      `http://${host}:${port}/vapi/GetImage?strid=${cam_id}&width=${width}&height=${height}`,
      {
        responseType: "arraybuffer",
      },
    );

    const base64 = Buffer.from(response.data, "binary").toString("base64");
    return `data:image/jpeg;base64,${base64}`;
  } catch (e) {
    const error = e as any;
    if (error.response && error.response.status === 401) {
      const wwwAuthenticateHeader = error.response.headers["www-authenticate"];
      const realmMatch = wwwAuthenticateHeader.match(/realm="([^"]*)"/);
      const nonceMatch = wwwAuthenticateHeader.match(/nonce="([^"]*)"/);

      if (realmMatch && nonceMatch) {
        const ha1 = CryptoJS.MD5(`${username}:${realmMatch[1]}:${password}`).toString();
        const ha2 = CryptoJS.MD5(
          `GET:/vapi/GetImage?strid=${cam_id}&width=${width}&height=${height}`
        ).toString();
        const nc = "00000001";
        const cnonce = CryptoJS.lib.WordArray.random(16).toString(); // 임의의 cnonce 생성
        const responseDigest = CryptoJS.MD5(
          `${ha1}:${nonceMatch[1]}:${nc}:${cnonce}:auth:${ha2}`
        ).toString();

        const authResponse = await axios.get(
          `http://${host}:${port}/vapi/GetImage?strid=${cam_id}&width=${width}&height=${height}`,
          {
            headers: {
              Authorization: `Digest username="${username}", realm="${realmMatch[1]}", nonce="${nonceMatch[1]}", uri="/vapi/GetImage?strid=${cam_id}&width=${width}&height=${height}", response="${responseDigest}", qop=auth, nc=${nc}, cnonce="${cnonce}"`,
            },
            responseType: "arraybuffer",
          },
        );
        if (authResponse.data.toString("utf8").includes("Can't Get the Image!")) {
          return null;
        }
        const base64AuthResponse = Buffer.from(authResponse.data, "binary").toString("base64");
        return `data:image/jpeg;base64,${base64AuthResponse}`;
      }
    }
    return null;
  }
};