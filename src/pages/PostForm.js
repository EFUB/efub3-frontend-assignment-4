import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import client from "../api/client";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  //게시글 등록
  const writePost = async (request, image) => {
    try {
      const formData = new FormData();
      formData.append("image", image); // 이미지 첨부

      // JSON 객체를 Blob 타입으로 변환, 원본은 application/json임을 명시
      formData.append(
        "request",
        new Blob([JSON.stringify(request)], { type: "application/json" })
      );

      // 서버 요청
      const res = await client.post("/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const onUpload = async () => {
    const request = { title: title, content: content };
    const res = await writePost(request, image);
    if (res.status === 201) navigate("/posts");
  };
  return (
    <Root>
      <Container>
        <h1>게시글 작성</h1>
        <Form>
          <Title
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Content
            type="text"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Image
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Button onClick={onUpload}>게시글 등록</Button>
        </Form>
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.input`
  height: 30px;
  border: none;
  outline: 1px solid lightgrey;
  margin: 20px 0px;
  padding: 5px 10px;
  font-size: 18px;
`;

const Content = styled.textarea`
  height: 700px;
  border: none;
  outline: 1px solid lightgrey;
  padding: 10px 10px;
  font-size: 14px;
  resize: none;
`;

const Image = styled.input`
  margin-top: 20px;
  font-size: 14px;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100px;
  margin-left: auto;
`;

export default PostForm;
