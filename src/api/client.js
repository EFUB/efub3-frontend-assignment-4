//axios instance 생성
import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "https://frontserver.efub.co.kr";
client.defaults.withCredentials = true;

const token = localStorage.getItem("efubtoken");
client.defaults.headers.common["Authorization"] = token ? token : null;
console.log(
  "현재 설정된 토큰: ",
  client.defaults.headers.common["Authorization"]
);

export default client;
