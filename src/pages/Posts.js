import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

  //전체 전체게시글 get
  const getPosts = async () => {
    try {
      const res = await client.get("/posts");
      console.log("readPost: ", res.data);
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Root>
      <Container>
        <h1>게시판</h1>
        <Button to="/post-form">글쓰기</Button>
        <PostList>
          {posts ? (
            posts.map((post) => <Post key={post.postId} post={post} />)
          ) : (
            <div>loading</div>
          )}
        </PostList>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

const Button = styled(NavLink)`
  margin: 20px;
  margin-left: auto;
  color: black;
  text-decoration: none;
  border-radius: 10px;
  outline: 1px solid lightgrey;
  padding: 7px 10px;
`;

const PostList = styled.div``;

export default Posts;
