import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  // User post(회원가입)
  const onSignUp = async (e) => {
    e.preventDefault();

    if (!id || !password || !name) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const req = {
      userName: id,
      password: password,
      nickname: name,
    };

    try {
      const res = await axios.post(
        "https://frontserver.efub.co.kr/users/register",
        req
      );
      console.log(res);
      alert(res.data);
      handleNavigate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Sign>회원가입</Sign>
      <Form>
        <div>
          <Title>아이디</Title>
          <Input
            type="text"
            placeholder="아이디"
            name="userName"
            value={id}
            onChange={handleIdChange}
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
          ></Input>
        </div>
        <div>
          <Title>닉네임</Title>
          <Input
            type="text"
            placeholder="닉네임"
            name="nickname"
            value={name}
            onChange={handleNameChange}
          ></Input>
        </div>
        <Btn onClick={onSignUp}>회원가입</Btn>
      </Form>
    </Container>
  );
};

const Title = styled.h3`
  font-size: 15px;
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

export default SignUpForm;
