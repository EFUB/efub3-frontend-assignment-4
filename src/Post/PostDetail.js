import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Comment from "../Comment/Comment";
import { ReactComponent as ProfileIcon } from "../images/profile.svg";

const PostDetail = () => {
  const [posts, setPosts] = useState({}); //[]이 아니라 {}로 설정해야함
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);

  const params = useParams();
  const postId = params.id;

  const navigate = useNavigate();

  const token = localStorage.getItem("efubtoken");

  // post GET(개별)
  const postsApi = async () => {
    const res = await axios.get(
      `https://frontserver.efub.co.kr/posts/${postId}`
    );
    const data = res.data;
    console.log(res.data);

    setPosts(data);
  };

  useEffect(() => {
    postsApi();
  }, []);

  const handleNavigate = () => {
    navigate("/posts");
  };

  // post DELETE
  const deletePost = async () => {
    const res = await axios.delete(
      `https://frontserver.efub.co.kr/posts/${posts.postId}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log(res);
    alert("게시글이 삭제되었습니다.");
    handleNavigate();
  };

  const handleEdit = () => {
    setIsEditing(true);
    setUpdatedTitle(posts.title);
    setUpdatedContent(posts.content);
  };

  const handleTitleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setUpdatedContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setUpdatedImage(e.target.files[0]);
  };

  // post PUT
  const updatePost = async () => {
    if (!updatedTitle || !updatedContent || !updatedImage) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", updatedImage); // 이미지 첨부
      formData.append(
        "request",
        new Blob(
          [
            JSON.stringify({
              title: updatedTitle,
              content: updatedContent,
            }),
          ],
          { type: "application/json" }
        )
      );

      const res = await axios.put(
        `https://frontserver.efub.co.kr/posts/${postId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      console.log(res);
      alert("게시글이 업데이트되었습니다.");

      setIsEditing(false);
      postsApi();
    } catch (error) {
      console.error(error);
    }
  };

  if (Object.keys(posts).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Profile />
        <Box>
          <Column>
            <Name>{posts.nickname}</Name>
            <Date>{posts.createdAt}</Date>
          </Column>
          {isEditing ? (
            <BtnContainer>
              <Btn onClick={updatePost}>저장</Btn>
              <Btn onClick={() => setIsEditing(false)}>취소</Btn>
            </BtnContainer>
          ) : (
            <BtnContainer>
              <Btn onClick={deletePost}>삭제하기</Btn>
              <Btn onClick={handleEdit}>수정하기</Btn>
            </BtnContainer>
          )}
        </Box>
      </Row>
      {isEditing ? (
        <>
          <InputField
            type="text"
            value={updatedTitle}
            onChange={handleTitleChange}
          />
          <TextArea
            value={updatedContent}
            onChange={handleContentChange}
          ></TextArea>
          <ImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </>
      ) : (
        <>
          <h2 style={{ marginTop: 0 }}>{posts.title}</h2>
          <p>{posts.content}</p>
          <img src={posts.image} style={{ width: "30vw" }}></img>
        </>
      )}
      <Comment />
    </Container>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-self: end;
`;

const Btn = styled.button`
  background-color: black;
  color: #a5dc37;
  width: 6rem;
  height: 35px;
  border: 1px solid #a5dc37;
  border-radius: 40px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled(ProfileIcon)`
  width: 50px;
  margin-right: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  margin-top: 3rem;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 20px;
`;

const Date = styled.p`
  color: gray;
  margin: 0;
  font-size: 15px;
`;

const InputField = styled.input`
  width: 100%;
  margin-bottom: 10px;
  height: 30px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;

const ImageInput = styled.input`
  margin-bottom: 10px;
`;

export default PostDetail;
