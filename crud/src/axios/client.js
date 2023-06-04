import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "https://frontserver.efub.co.kr/";
client.defaults.withCredentials = true;

const token = localStorage.getItem("efubtoken");
console.log("현재토큰", token);
//헤더에 자동으로 토큰
// client.defaults.headers.common["Authorization"] = token ? `${token}` : null;
client.defaults.headers.common[
  "Authorization"
] = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NyIsImlhdCI6MTY4NTY2MTgxNSwiZXhwIjoxNjg1NzQ4MjE1fQ.MN-TucK8DVwkT-9v9u0EwKjZ1aO_OaqqlapijDSW5Sw`;
console.log("현재설정토큰", client.defaults.headers.common["Authorization"]);

export default client;
