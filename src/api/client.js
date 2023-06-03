import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "https://frontserver.efub.co.kr";
client.defaults.withCredentials = true;

const token = localStorage.getItem("efubtoken");

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default client;