import React from "react";
import styled from "styled-components";

const Post = ({ post }) => {
  return (
    <Container>
      <Title>{post.title}</Title>
      <Nickname>{post.nickname}</Nickname>
      <Date>{post.createdAt.substring(0, 10)}</Date>
    </Container>
  );
};

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
