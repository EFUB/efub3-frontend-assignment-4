import client from "../client.js";

export const RegisterApi = async (userName, password, nickname) => {
  try {
    const res = await client.post("/users/register", {
      userName: userName,
      password: password,
      nickname: nickname,
    });

    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem("efubtoken", token);
    console.log(res.data.acessToken);
  } catch (err) {
    console.log(err);
  }
};
