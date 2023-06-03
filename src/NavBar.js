import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "./images/logo.png";

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/posts">
        <LogoIcon src={logoImg} />
      </Link>
      <MenuContainer>
        <A>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            회원가입
          </Link>
        </A>
        <A>
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            로그인
          </Link>
        </A>
      </MenuContainer>
    </NavBarContainer>
  );
};

const LogoIcon = styled.img`
  width: 100px;
`;

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const A = styled.p`
  padding-right: 25px;
  font-size: 17px;
`;

export default NavBar;
