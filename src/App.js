import axios from "axios";
import { useEffect, useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import Detail from "./pages/Detail";
import PostForm from "./pages/PostForm";

function App() {
  //axios instance 생성
  const client = axios.create();
  client.defaults.baseURL = "https://frontserver.efub.co.kr";
  client.defaults.withCredentials = true;

  const token = localStorage.getItem("efubtoken");
  client.defaults.headers.common["Authorization"] = token ? token : null;
  console.log(
    "현재 설정된 토큰: ",
    client.defaults.headers.common["Authorization"]
  );

  // useEffect(() => {
  //   login("jeongmin11", "987654321");
  //   readPost();

  //   const request = { title: "jeongmin's first post", content: "blablablabla" };
  //   const formData = new FormData();
  //   formData.append("image", "/image.png");
  //   formData.append(
  //     "request",
  //     new Blob([JSON.stringify(request)], { type: "application/json" })
  //   );

  //   writePost();
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Detail />} />
          <Route path="/post-form" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
