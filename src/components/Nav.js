import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  // const style = ({ isActive }) => {
  //   return isActive ? { fontWeight: "bold", color: "red" } : { color: "grey" };
  // };
  const defautStyle = {
    padding: "0px 15px",
    textDecoration: "none",
    fontSize: "20px",
    color: "black",
  };
  const style = ({ isActive }) =>
    isActive
      ? { ...defautStyle, fontWeight: "bold" }
      : { ...defautStyle, color: "grey" };
  return (
    <Container>
      <NavLink to="/" style={style}>
        회원가입
      </NavLink>
      <NavLink to="/login" style={style}>
        로그인
      </NavLink>
      <NavLink to="/posts" style={style}>
        게시판
      </NavLink>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border-bottom: 1px solid lightgrey;
`;

export default Nav;
