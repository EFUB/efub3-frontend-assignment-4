import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "https://frontserver.efub.co.kr";
client.defaults.withCredentials = true;

const token = localStorage.getItem("efubtoken");
console.log("현재 토큰", token);

// client.defaults.headers.common["Authorization"] = token ? `${token}` : null;
client.defaults.headers.common["Authorization"] =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4IiwiaWF0IjoxNjg1Nzk2NTY5LCJleHAiOjE2ODU4ODI5Njl9.Zi5vFSTHI5eWuWgjuQDuqsd5Qf-8y7oBEaQeGx7Ox_Q";

console.log(
  "현재 설정된 토큰",
  client.defaults.headers.common["Authorization"]
);

export default client;
