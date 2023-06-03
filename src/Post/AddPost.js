import { useState } from "react";
import axios from "axios";
import EveryPostsComponent from "./EveryPosts";
import styled from "styled-components";

const PostPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const onUploadImg = (e) => {
    setFile(e.target.files[0]);
  };

  // post POST
  const onPosts = (e) => {
    e.preventDefault();

    if (!title || !content || !file) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const token = localStorage.getItem("efubtoken");

    const PostApi = async () => {
      try {
        const formData = new FormData();
        formData.append("image", file); // 이미지 첨부
        formData.append(
          "request",
          new Blob(
            [
              JSON.stringify({
                title: title,
                content: content,
              }),
            ],
            { type: "application/json" }
          )
        );
        const res = await axios.post(
          "https://frontserver.efub.co.kr/posts",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: token,
            },
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };

    PostApi();
    setTitle("");
    setContent("");
    setFile(null);
  };

  return (
    <>
      <Container>
        <h2>게시판</h2>
        <Input
          type="text"
          placeholder="제목"
          name="title"
          value={title}
          onChange={handleChange}
        ></Input>
        <Input2
          type="text"
          placeholder="내용"
          name="content"
          value={content}
          onChange={handleContentChange}
        ></Input2>
        <Input3 type="file" accept="image/*" onChange={onUploadImg}></Input3>
        <Btn onClick={onPosts}>업로드</Btn>
      </Container>
      <EveryPostsComponent />
    </>
  );
};

const Input3 = styled.input`
  margin-left: -15rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  padding-left: 20px;
  width: 30rem;
  height: 45px;
  border: none;
  background-color: black;
  color: white;
  font-size: 17px;
  outline: none;
  border: 1px solid #a5dc37;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Input2 = styled(Input)`
  height: 50px;
`;

const Btn = styled.button`
  margin-top: 10px;
  background-color: #a5dc37;
  width: 6rem;
  height: 35px;
  border: none;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 25rem;
`;

export default PostPosts;
