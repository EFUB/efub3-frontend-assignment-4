import client from "../Client";
import React, { useState, useEffect } from "react";

export const postDetail = async (postkey) => {
  try {
    const res = await client.get(`/posts/${postkey}`);
    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem("efubtoken", token);

    return res;
  } catch (err) {
    console.log(err);
  }
};
