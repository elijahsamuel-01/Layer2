import styled from "styled-components";
import logo from "../../assets/logo.png";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import blogo from "../../assets/logo-dark.png";
import { BiMenu, BiSearch } from "react-icons/bi";

const Header = () => {
  const [header, setHeader] = useState(false);

  const switchHeader = () => {
    if (window.pageYOffset > 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", switchHeader);

  return (
    <div>
      {header ? (
        <Container bxs="20" bg="white">
          <Wrapper>
            <Menu>
              <BiMenu />
            </Menu>
            <LogoWrap>
              <Logo src={blogo} />
            </LogoWrap>
            <Search>
              <BiSearch />
            </Search>
            <NavWrap>
              <Nav clr="black">HOME</Nav>
              <Nav clr="black">FEATURES</Nav>
              <Nav clr="black">HOW IT WORKS</Nav>
              <Nav clr="black">SCREENSHOTS</Nav>
              <Nav clr="black">TEAM</Nav>
              <Nav clr="black">NEWS</Nav>
              <Nav clr="black">EXTRAS+</Nav>
              <Nav>
                <Icon />
              </Nav>
            </NavWrap>
          </Wrapper>
        </Container>
      ) : (
        <Container bxs="" bg="">
          <Wrapper>
            <Menu>
              <BiMenu />
            </Menu>
            <LogoWrap>
              <Logo src={logo} />
            </LogoWrap>
            <Search>
              <BiSearch />
            </Search>
            <NavWrap>
              <Nav clr="white">HOME</Nav>
              <Nav clr="white">FEATURES</Nav>
              <Nav clr="white">HOW IT WORKS</Nav>
              <Nav clr="white">SCREENSHOTS</Nav>
              <Nav clr="white">TEAM</Nav>
              <Nav clr="white">NEWS</Nav>
              <Nav clr="white">EXTRAS+</Nav>
              <Nav>
                <Icon />
              </Nav>
            </NavWrap>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Search = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    height: 15%;
    color: #000000;
    font-size: 30px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 375px) {
  }
  @media screen and (max-width: 425px) {
  }
`;

const Menu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: black;
    font-size: 30px;
    height: 15%;
    display: flex;
    align-items: center;
  }
`;

const Icon = styled(IoMdMail)`
  color: #e74c3cff;
  font-size: 25px;
  margin-top: 5px;
`;

const Nav = styled.div<{ clr?: string }>`
  font-size: 18px;
  font-weight: 600;
  color: ${({ clr }) => clr};

  &:hover {
    color: #e74c3cff;
    cursor: pointer;
  }
`;

const NavWrap = styled.div`
  width: 60%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 100%;
  @media screen and (max-width: 375px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 320px) {
    flex-wrap: wrap;
    width:  78px;
    height: 35px;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }
`;

const Container = styled.div<{ bg: string; bxs: string }>`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  z-index: 100;
  justify-content: center;
  position: fixed;
  box-shadow: 0px 0px ${({ bxs }) => bxs}px #ebebebff;
  background-color: ${({ bg }) => bg};
`;
