import { useState } from "react";
import { SignApi } from "./Sign";
import { LoginApi } from "./LoginApi";

const CreatePage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [id1, setId1] = useState("");
  const [password1, setPassword1] = useState("");

  const Sign = async (e) => {
    e.preventDefault();
    const res = await SignApi(id, password, nickname);
    console.log(res);
    setId("");
    setPassword("");
    setNickname("");
  };

  const Login = async (e) => {
    e.preventDefault();
    const res = await LoginApi(id1, password1);
    console.log(res);
    setId1("");
    setPassword1("");
  };

  // const post = async (postId) => {
  //   const res = await client.get(`/posts/${postId}`);
  //   return res;
  // };

  return (
    <div>
      <div>
        <form onSubmit={Login}>
          <input
            type="text"
            placeholder="ID"
            value={id1}
            onChange={(e) => setId1(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <button>로그인하기</button>
        </form>
      </div>
      <form onSubmit={Sign}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          placeholder="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <button>회원가입하기</button>
      </form>
    </div>
  );
};

export default CreatePage;
