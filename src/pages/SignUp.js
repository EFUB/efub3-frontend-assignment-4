import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

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

  //회원가입
  const register = async (userName, password, nickname) => {
    try {
      const res = await client.post("/users/register", {
        userName: userName,
        password: password,
        nickname: nickname,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const onSignUp = () => {
    register(userName, password, nickname);
  };

  return (
    <div>
      <h1>회원가입</h1>
      <Form>
        <div>이름</div>
        <input type="text" value={userName} onChange={onUserNameChange}></input>
        <div>비밀번호</div>
        <input
          type="password"
          value={password}
          onChange={onPasswordChange}
        ></input>
        <div>닉네임</div>
        <input type="text" value={nickname} onChange={onNicknameChange}></input>
        <Button onClick={onSignUp}>회원가입</Button>
      </Form>
    </div>
  );
};

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
