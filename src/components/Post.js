import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Post = ({ post }) => {
  return (
    <NLink to={`/posts/${post.postId}`}>
      <Container>
        <Title>{post.title}</Title>
        <Nickname>{post.nickname}</Nickname>
        <Date>{post.createdAt.substring(0, 10)}</Date>
      </Container>
    </NLink>
  );
};

const NLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid lightgrey;
`;

const Title = styled.div`
  flex: 4;
`;

const Nickname = styled.div`
  flex: 1;
`;

const Date = styled.div`
  flex: 1;
`;

export default Post;
