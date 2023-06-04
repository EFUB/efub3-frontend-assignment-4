import client from "../Client";

export const Submit = async (request, image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );

    const res = await client.post("/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);

    // const token = res.data.accessToken;
    // localStorage.setItem("efubtoken", token);
    return res;
  } catch (err) {
    console.log(err);
  }
};
