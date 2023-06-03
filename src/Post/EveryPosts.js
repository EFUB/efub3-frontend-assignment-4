import axios from "axios";
import Post from "./Post";
import { useEffect, useState } from "react";
import styled from "styled-components";

const EveryPostsComponent = () => {
  const [posts, setPosts] = useState([]);

  // post GET(전체)
  const postsApi = async () => {
    const res = await axios.get("https://frontserver.efub.co.kr/posts");
    const data = res.data;

    setPosts(data);
  };

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  useEffect(() => {
    postsApi();
  }, [posts]);

  return (
    <>
      <Container>
        <H3>No</H3>
        <H31>제목</H31>
        <H3>글쓴이</H3>
        <H3>작성시간</H3>
        <H3>좋아요</H3>
      </Container>
      {posts.length > 0 &&
        sortedPosts.map((el, i) => (
          <Post
            num={sortedPosts.length - i}
            key={el.postId}
            id={el.postId}
            nickname={el.nickname}
            title={el.title}
            content={el.content}
            img={el.image !== null ? el.image : null}
            createDate={el.createdAt}
          />
        ))}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding-left: 10px;
  padding-right: 10px;
`;

const H3 = styled.h3`
  font-size: 15px;
  flex-grow: 1;
  align-items: center;
`;

const H31 = styled(H3)`
  flex-grow: 4;
  margin-left: 12rem;
`;

export default EveryPostsComponent;
