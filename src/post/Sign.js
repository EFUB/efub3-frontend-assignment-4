import client from "../Client";

export const SignApi = async (userName, password, nickname) => {
  try {
    const res = await client.post("/users/register", {
      userName: userName,
      password: password,
      nickname: nickname,
    });

    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem("efubtoken", token);
    return res;
  } catch (err) {
    console.log(err);
  }
};
