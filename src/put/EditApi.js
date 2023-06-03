import client from "../Client";

export const EditApi = async (postId, newData) => {
  try {
    const res = await client.put(`/post/${postId}`, newData);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
