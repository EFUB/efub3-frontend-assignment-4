import client from "../Client";
export const LoginApi = async (postId) => {
  try {
    const res = await client.post(`/hearts/${postId}`, {
      userName: userName,
      password: password,
    });
    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem("efubtoken", token);
    return res;
  } catch (err) {
    console.log(err);
  }
};
