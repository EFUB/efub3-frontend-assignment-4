import { useEffect, useState } from "react";
import axios from "axios";
import {
  SignUpApi,
  LoginApi,
  JWTApi,
  PostApi,
  PostDetailApi,
  newPostApi,
  changePostApi,
  deletePostApi,
  heartApi,
} from "../axios/api";

//회원가입
export const SignUpForm = () => {
  useEffect(() => {
    SignUpApi("하핳", "12345678", "하하핳");
  }, []);

  const SignUp = () => {
    SignUpApi();
  };
  return <button onClick={SignUp}>회원가입</button>;
};

//로그인
export const LoginForm = () => {
  const login = () => {
    LoginApi("하핳", "12345678");
  };
  return <button onClick={login}>로그인</button>;
};

export const JWTForm = () => {
  const jwt = async () => {
    await JWTApi();
  };
  return <button onClick={jwt}>jwt</button>;
};

//전체 포스트 조회
export const Post = () => {
  const post = async () => {
    await PostApi();
  };
  return <button onClick={post}>전체 포스트 조회</button>;
};

//개별 포스트 조회
export const PostDetail = () => {
  const postdetail = async () => {
    await PostDetailApi();
  };
  return <button onClick={postdetail}>개별 포스트 조회</button>;
};

//새로운 포스트
export const NewPost = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onUploadImage = (e) => {
    setFile(e.target.files[0]);
  };

  const onUploadImageButtonClick = () => {
    const request = {
      title,
      content,
    };
    newPostApi(request, file);
  };
  return (
    <>
      <input
        type="text"
        placeholder="제목"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="내용"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <input type="file" accept="image/*" onChange={onUploadImage} />
      <button onClick={onUploadImageButtonClick}>이미지 업로드</button>
    </>
  );
};

//포스트 수정
export const ChangePost = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onUploadChangeImage = (e) => {
    setFile(e.target.files[0]);
  };

  const onUploadChangeImageButtonClick = () => {
    const request = {
      title,
      content,
    };
    changePostApi(request, file);
  };
  return (
    <>
      <input
        type="text"
        placeholder="제목"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="내용"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <input type="file" accept="image/*" onChange={onUploadChangeImage} />
      <button onClick={onUploadChangeImageButtonClick}>이미지 업로드</button>
    </>
  );
};

//포스트 삭제 : 해당 post
export const DeletePost = () => {
  const onDelete = () => {
    deletePostApi();
  };
  return <button onClick={onDelete}>삭제</button>;
};

//게시글 좋아요 기능
export const Heart = () => {
  const onLike = () => {
    heartApi();
  };
  return <button onClick={onLike}>좋아요</button>;
};
