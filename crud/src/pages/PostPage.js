import { CreateNewPostApi } from "../api/CreateNewPostApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../client";

const PostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [detailPost, setDetailPost] = useState([]);

  const onUploadButtonClick = () => {
    const request = {
      title: title,
      content: content,
    };
    CreateNewPostApi(request);
  };

  const handleGetDetailPost = () => {
    getDetailPostApi();
  };

  const onModifyButtonClick = () => {
    modifyPostApi();
  };

  const onDeleteButtonClick = () => {
    deletePostApi();
  };

  const getPostApi = async () => {
    try {
      const res = await client.get("/posts");
      console.log(res.data);
      setPosts(res.data);
    } catch (e) {
      console.log(e, "getPost error");
    }
  };
  const getDetailPostApi = async () => {
    try {
      const res = await client.get("/posts/3");
      console.log(res.data);
      setDetailPost(res.data);
    } catch (e) {
      console.log(e, "getPost error");
    }
  };

  const modifyPostApi = async () => {
    try {
      const res = await client.put("/posts/10");
      console.log(res.data);
    } catch (e) {
      console.log(e, "getPost error");
    }
  };

  const deletePostApi = async () => {
    try {
      const res = await client.delete("/posts/10");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostApi();
  }, []);

  return (
    <div>
      <div className="postsWrapper">
        {posts.map((post) => (
          <Link
            to={`/posts/${post.postId}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="posts" key={post.createdAt}>
              {post.postId}
              {post.nickname}
              {post.title}
              <img width="200" height="200" src={post.image}></img>
              {post.content}
              {post.comments}
            </div>
          </Link>
        ))}
      </div>
      <button onClick={handleGetDetailPost}>상세보기</button>
      <input
        type="text"
        placeholder="제목 작성하기"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="내용 작성하기"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button onClick={onUploadButtonClick}>업로드</button>
      <button onClick={onModifyButtonClick}>수정하기</button>
      <button onClick={onDeleteButtonClick}>삭제하기</button>
    </div>
  );
};

export default PostPage;
