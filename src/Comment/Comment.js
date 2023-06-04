import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentBox from "./CommentBox";
import AddComment from "./AddComment";
import styled from "styled-components";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const params = useParams();
  const postId = params.id;

  // Comment GET
  const postsApi = async () => {
    try {
      const res = await axios.get(
        `https://frontserver.efub.co.kr/comment/${postId}`
      );
      const data = res.data;
      // console.log(res.data);

      setComments(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    postsApi();
  }, [comments]);

  const sortedComments = [...comments].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      <Title>댓글</Title>
      <AddComment id={postId} />
      {sortedComments.map((el) => (
        <CommentBox
          key={el.commentId}
          postId={postId}
          commentId={el.commentId}
          id={el.commentAuthorNickname}
          contents={el.contents}
          createdAt={el.createdAt}
        />
      ))}
    </>
  );
};

const Title = styled.h2`
  margin-top: 3rem;
  font-size: 20px;
  padding-bottom: 10px;
`;

export default Comment;
