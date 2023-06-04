import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import client from "../api/client";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  //회원가입
  const register = async (userName, password, nickname) => {
    try {
      const res = await client.post("/users/register", {
        userName: userName,
        password: password,
        nickname: nickname,
      });
      console.log(res);
      if (res.status === 201) navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const onSignUp = async () => {
    await register(userName, password, nickname);
  };

  return (
    <Root>
      <h1>회원가입</h1>
      <Form>
        <div>이름</div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div>비밀번호</div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>닉네임</div>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button onClick={onSignUp}>회원가입</Button>
      </Form>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100px;
  margin-left: auto;
`;

export default SignUp;
