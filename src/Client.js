import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "https://frontserver.efub.co.kr/";
client.defaults.withCredential = true;

const token = localStorage.getItem("efubtoken");
console.log("현재 토큰", token);

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"]
);

export default client;

// Axios를 사용하여 HTTP 요청을 보낼 때 기본 설정을 구성하고,
// 인증 토큰을 요청 헤더에 자동으로 추가하는 역할
