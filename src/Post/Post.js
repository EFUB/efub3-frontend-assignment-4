import styled from "styled-components";
import { Link } from "react-router-dom";
import HeartNum from "../Heart/HeartNum";

const Post = ({ num, id, nickname, title, createDate }) => {
  return (
    <Link
      to={`/posts/${id}`}
      style={{ color: "white", textDecoration: "none" }}
    >
      <Container>
        <Title>{num}</Title>
        <Title1>{title}</Title1>
        <P>{nickname}</P>
        <P>{createDate.slice(0, 10)}</P>
        <P>
          <HeartNum id={id} />
        </P>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  padding-top: 14px;
  padding-bottom: 12px;
  justify-content: space-between;
  border-bottom: 0.5px solid gray;
  padding-left: 10px;
  padding-right: 10px;
`;

const Title = styled.h3`
  font-size: 15px;
  margin: 0;
  flex-grow: 1;
  align-items: center;
`;

const P = styled.p`
  margin: 0;
  color: gray;
  font-size: 14px;
  flex-grow: 1;
  align-items: center;
  width: 5rem;
`;

const Title1 = styled(Title)`
  flex-grow: 4;
  width: 10rem;
  margin-left: 14rem;
`;

export default Post;
