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
} from "../axios/api";

// export const SignUpForm = () => {
//   useEffect(() => {
//     SignUpApi("하핳", "12345678", "하하핳");
//   }, []);
//   return <div>회원가입</div>;
// };

export const LoginForm = () => {
  useEffect(() => {
    LoginApi("하핳", "12345678");
  }, []);
  return <div>로그인</div>;
};

export const JWTForm = () => {
  useEffect(() => {
    JWTApi();
  }, []);
  return <div>JWT</div>;
};

//전체 포스트 조회
// export const Post = () => {
//   const [post, setPost] = useState([]);
//   useEffect(() => {
//     const datata = PostApi();
//     console.log("datatata", datata);
//   }, []);
//   return <div>PostApi</div>;
// };

export const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const datata = PostApi();
    console.log(datata);
  });

  // useEffect(() => {
  //   console.log("post", post);
  // }, [post]);

  return <div>all posts</div>;
};

export const PostDetail = () => {
  useEffect(() => {
    PostDetailApi();
  }, []);
  return <div>PostDetailApi</div>;
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

//포스트 삭제
export const DeletePost = () => {
  const onDelete = () => {
    deletePostApi();
  };
  return <button onClick={onDelete}>삭제</button>;
};

//
