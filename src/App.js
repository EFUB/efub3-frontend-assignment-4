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
