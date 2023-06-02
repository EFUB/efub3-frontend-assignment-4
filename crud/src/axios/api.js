import client from "./client";
import axios from "axios";
import { useState } from "react";

export const LoginApi = async (userName, password) => {
  try {
    const res = await client.post("/users/login", {
      userName,
      password,
    });
    const token = res.data.accessToken;
    localStorage.setItem("efubToken", token);
    console.log(res.data.accessToken);
  } catch (err) {
    console.log(err);
  }
};

export const SignUpApi = async (userName, password, nickname) => {
  try {
    const res = await client.post("/users/register", {
      userName,
      password,
      nickname,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const JWTApi = async () => {
  try {
    const res = await client.get("users/test");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const PostDetailApi = async () => {
  try {
    const res = await client.get("/posts/3");
  } catch (error) {
    console.log(error);
  }
};

export const PostApi = async () => {
  try {
    const res = await client.get("/posts");
  } catch (error) {
    console.log(error);
  }
};

export const newPostApi = async (request, image) => {
  console.log(request, image);
  try {
    const formData = new FormData();
    formData.append("image", image); //이미지 첨부
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );
    const res = await client.post("/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const changePostApi = async (request, image) => {
  console.log(request, image);
  try {
    const formData = new FormData();
    formData.append("image", image); //이미지 첨부
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );
    const res = await client.put("/posts/46", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const deletePostApi = async () => {
  try {
    const res = await client.delete("/posts/46");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
