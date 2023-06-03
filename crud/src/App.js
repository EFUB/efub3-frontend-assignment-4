import logo from "./logo.svg";
import "./App.css";
import {
  SignUpForm,
  LoginForm,
  JWTForm,
  PostDetail,
  Post,
  NewPost,
  ChangePost,
  DeletePost,
  Heart,
} from "./components/form";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>POST [USER] 회원가입</div>
      <SignUpForm />
      <br />
      <div>POST [USER] 로그인</div>
      <LoginForm />
      <br />
      <div>GET [USER] JWT 테스트</div>
      <JWTForm />
      <br />
      <div>GET [POST] 게시글 상세 조회</div>
      <Post />
      <br />
      <div>GET [POST] 게시글 전체 조회</div>
      <PostDetail />
      <br />
      <div>POST [POST] 게시글 등록</div>
      <NewPost />
      <br />
      <div>PUT [POST] 게시글 수정</div>
      <ChangePost />
      <br />
      <div>DELETE [POST] 게시글 삭제</div>
      <DeletePost />
      <br />
      <div>POST [HEART] 게시글 좋아요</div>
      <Heart />
    </div>
  );
}

export default App;
