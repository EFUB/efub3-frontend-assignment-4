import client from "../client.js";
import axios from "axios";

export const LoginApi = async (userName, password) => {
  try {
    const res = await client.post("/ffusers/login", {
      userName: userName,
      password: password,
    });

    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem("efubtoken", token);
    console.log(res.data.acessToken);
  } catch (err) {
    console.log(err);
  }
};
