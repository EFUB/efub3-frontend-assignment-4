import client from "./Client";

export const post = async () => {
  try {
    const res = await client.get("/post/3", {
      // userId: userId,
      // userName: userName,
      // password: password,
      // nickname: nickname,
    });
    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem("efubtoken", token);
    return res;
  } catch (err) {
    console.log(err);
  }
};
