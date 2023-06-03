import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/posts");
  };

  // User post(로그인)
  const onLogin = async (e) => {
    e.preventDefault();

    if (!id || !password) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const req = {
      userName: id,
      password: password,
    };

    const res = await axios.post(
      "https://frontserver.efub.co.kr/users/login",
      req
    );
    console.log(res);

    const token = res.data.accessToken;
    localStorage.setItem("efubtoken", token);

    // console.log(token);

    alert(res.data.message);
    handleNavigate();
  };

  return (
    <Container>
      <Sign>로그인</Sign>
      <Form>
        <div>
          <Title>아이디</Title>
          <Input
            type="text"
            placeholder="아이디"
            name="userName"
            value={id}
            onChange={handleIdChange}
            required
          ></Input>
        </div>
        <div>
          <Title>비밀번호</Title>
          <Input
            type="password"
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          ></Input>
        </div>

        <Btn onClick={onLogin}>로그인</Btn>
      </Form>
    </Container>
  );
};

const Title = styled.h3`
  font-size: 15px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sign = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 3rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 20rem;
  height: 45px;
  padding-left: 20px;
  border-radius: 40px;
  border: none;
`;

const Btn = styled.button`
  margin-top: 40px;
  background-color: #a5dc37;
  width: 21rem;
  height: 55px;
  border: none;
  border-radius: 40px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
`;

export default LoginForm;
