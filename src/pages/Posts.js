import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import styled from "styled-components";

const Posts = () => {
  const [posts, setPosts] = useState();

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

  //게시물 get
  const getPost = async () => {
    try {
      const res = await client.get("/posts");
      console.log("readPost: ", res.data);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <h1>게시판</h1>
      <PostList>
        {posts ? (
          posts.map((post) => <Post key={post.postId} post={post} />)
        ) : (
          <div>loading</div>
        )}
      </PostList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostList = styled.div`
  width: 700px;
`;

export default Posts;
