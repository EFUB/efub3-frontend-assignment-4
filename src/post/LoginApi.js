import client from "../Client";
export const LoginApi = async (userName, password) => {
  try {
    const res = await client.post("/users/login", {
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
