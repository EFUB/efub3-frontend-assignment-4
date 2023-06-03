import { useState } from "react";
import "./App.css";
import { PostApi3, PostApi, CreateNewPostApi } from "./post";
import { RegisterApi, LoginApi, TestApi } from "./user.js";

function App() {
  const registerUser = async () => {
    await RegisterApi();
  };
  const loginUser = async () => {
    await LoginApi();
  };
  const testUser = async () => {
    await TestApi();
  };
  const getPost3 = async () => {
    await PostApi3();
  };
  const getPosts = async () => {
    await PostApi();
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const onUploadImage = (e) => {
    setImage(e.target.files[0]);
  };
  const onUploadImageButtonClick = (e) => {
    e.preventDefault();
    const request = {
      title: title,
      content: content,
    };
    CreateNewPostApi(request, image);
  };

  return (
    <div>
      <div>
        <button onClick={registerUser}>회원가입</button>
        <button onClick={loginUser}>로그인</button>
        <button onClick={testUser}>JWT 테스트</button>
        <button onClick={getPost3}>게시글 3번 조회</button>
        <button onClick={getPosts}>게시글 전체 조회</button>
      </div>
      <form onSubmit={onUploadImageButtonClick}>
        <input
          type="text"
          placeholder="제목 작성하기"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="내용 작성하기"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="file" accept="image.*" onChange={onUploadImage} />
        <button label="이미지업로드">업로드</button>
      </form>
    </div>
  );
}

export default App;
