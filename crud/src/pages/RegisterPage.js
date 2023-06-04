import { RegisterApi } from "../api/RegisterApi";
import { useState } from "react";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handeleRegisterButtonClick = () => {
    const request = {
      userName: userName,
      password: password,
      nickname: nickname,
    };
    RegisterApi(userName, password, nickname);
  };
  return (
    <div>
      <input
        type="input"
        placeholder="user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="input"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        type="input"
        placeholder="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      ></input>
      <button onClick={handeleRegisterButtonClick}>회원가입</button>
    </div>
  );
};

export default RegisterPage;
