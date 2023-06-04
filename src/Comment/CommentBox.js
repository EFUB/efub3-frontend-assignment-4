import styled from "styled-components";
import axios from "axios";

const CommentBox = ({ commentId, id, contents, createdAt }) => {
  const token = localStorage.getItem("efubtoken");

  // Comment DELETE
  const deleteComment = async () => {
    try {
      const res = await axios.delete(
        `https://frontserver.efub.co.kr/comment/${commentId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Id>{id}</Id>
        <Btn onClick={deleteComment}>삭제하기</Btn>
      </Row>
      {contents}
      <Date>{createdAt}</Date>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid gray;
`;

const Btn = styled.button`
  background-color: black;
  color: #a5dc37;
  width: 5.5rem;
  height: 35px;
  border: 1px solid #a5dc37;
  border-radius: 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

const Id = styled.h3``;

const Date = styled.p`
  color: gray;
  font-size: small;
`;

export default CommentBox;
