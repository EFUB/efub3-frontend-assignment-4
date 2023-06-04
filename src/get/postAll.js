import client from "../Client";

export const postAll = async () => {
  try {
    const res = await client.get("/posts");
    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem("efubtoken", token);
    return res;
  } catch (err) {
    console.log(err);
  }
};
