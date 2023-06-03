import { LoginApi } from "../api/LoginApi";
import { useState } from "react";
import PostPage from "../pages/PostPage";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handeleLoginButtonClick = () => {
    const request = {
      userName: userName,
      password: password,
    };
    LoginApi(userName, password);
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

      <button onClick={handeleLoginButtonClick}>로그인</button>
    </div>
  );
};

export default LoginPage;
