import client from "../Client";

export const EditApi = async (postId, newData) => {
  try {
    const res = await client.put(`/posts/${postId}`, newData);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
