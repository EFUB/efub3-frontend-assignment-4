import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import client from "../api/client";

const Detail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();

  //게시글 상세 get
  const getPost = async () => {
    try {
      const res = await client.get(`/posts/${postId}`);
      console.log("readPost: ", res.data);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Root>
      {post ? (
        <Container>
          <Header>
            <Title>{post.title}</Title>
            <Nickname>{post.nickname}</Nickname>
            <Date>{post.createdAt.substring(0, 10)}</Date>
          </Header>

          <Body>
            <Content>{post.content}</Content>
            <Image src={post.image} />
          </Body>

          <Comments>
            {post.comments.map((comment) => (
              <Comment>
                <div>{comment.commentAuthorNickname}</div>
                <div>{comment.contents}</div>
              </Comment>
            ))}
          </Comments>
        </Container>
      ) : (
        <div>loading</div>
      )}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 700px;
`;

const Header = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 10px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 30px;
`;

const Nickname = styled.div``;

const Date = styled.div``;

const Body = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  width: 300px;
`;

const Comments = styled.div`
  border-top: 1px solid lightgrey;
`;

const Comment = styled.div`
  border-bottom: 1px solid lightgrey;
  padding: 5px;
`;

export default Detail;
