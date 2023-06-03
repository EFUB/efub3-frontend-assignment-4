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
