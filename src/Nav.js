import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <NLink to="/">회원가입</NLink>
      <NLink to="/login">로그인</NLink>
      <NLink to="/posts">게시판</NLink>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;

const NLink = styled(NavLink)`
  padding: 0px 15px;
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

export default Nav;
