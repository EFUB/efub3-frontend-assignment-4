import client from "../client.js";
import React, { useState, useEffect } from "react";

export const CreateNewPostApi = async (request) => {
  try {
    const formData = new FormData();
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );
    const res = await client.post("/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
