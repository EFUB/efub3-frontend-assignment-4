import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const AddComment = ({ id }) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const token = localStorage.getItem("efubtoken");

  // Comment POST
  const handleAddComment = async () => {
    if (!comment) {
      alert("내용을 입력해주세요.");
      return;
    }
    try {
      const res = await axios.post(
        "https://frontserver.efub.co.kr/comment",
        {
          postId: id,
          contents: comment,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(res);
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Input
        value={comment}
        placeholder="댓글을 달아보세요."
        onChange={handleChange}
      ></Input>
      <Btn onClick={handleAddComment}>등록</Btn>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 50px;
  display: flex;
`;

const Input = styled.input`
  height: 50px;
  width: 93%;
  font-size: 18px;
  background-color: black;
  border: none;
  outline: none;
  border-bottom: 1px solid gray;
  color: white;
  margin-right: 20px;
`;

const Btn = styled.button`
  margin-top: 10px;
  background-color: #a5dc37;
  width: 6rem;
  height: 40px;
  border: none;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  align-self: flex-end;
`;

export default AddComment;
