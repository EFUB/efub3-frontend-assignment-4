import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

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

  //로그인
  const login = async (userName, password) => {
    try {
      const res = await client.post("/users/login", {
        userName: userName,
        password: password,
      });

      console.log("login: ", res);
      const token = res.data.accessToken;
      localStorage.setItem("efubtoken", token);
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

  const onLogin = () => {
    login(userName, password);
  };

  return (
    <Root>
      <h1>로그인</h1>
      <Form>
        <div>이름</div>
        <input type="text" value={userName} onChange={onUserNameChange} />
        <div>비밀번호</div>
        <input type="password" value={password} onChange={onPasswordChange} />
        <Button onClick={onLogin}>회원가입</Button>
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

export default Login;
