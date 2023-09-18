import { BiLogoAndroid, BiLogoApple } from "react-icons/bi";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <BtnHolder>
          <Button left="1" right="1">
            Download Now{" "}
            <I>
              <BiLogoApple />
            </I>
          </Button>
          <Button left="" right="">
            <I>
              <BiLogoAndroid />
            </I>{" "}
            Download Now
          </Button>
        </BtnHolder>

        <Logos>
          <Icon>
            <FaFacebook />
          </Icon>
          <Icon>
            <FaTwitter />
          </Icon>
          <Icon>
            <BsInstagram />
          </Icon>
          <Icon>
            <BsPinterest />
          </Icon>
          <Icon>
            <IoMdMail />
          </Icon>
        </Logos>
        <p>Copyrights © 2023 Layer. Designed by Zozothemes</p>
      </Container>
    </div>
  );
};

export default Footer;

const I = styled.div`
  font-size: 24px;
  margin-top: 4px;
`;

const Icon = styled.div`
  background-color: #2a2a2a;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  &:hover {
    background-color: #ff5638;
    transition: all 350ms;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 321px) {
    width: 40px;
    height: 40px;
  }
`;

const Logos = styled.div`
  gap: 20px;
  display: flex;
  margin: 30px 0;
`;

const Button = styled.button<{ left: string; right: string }>`
  border: none;
  border-radius: 40px;
  color: white;
  font-size: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to right,
    ${({ left }) => (left ? "#ff5100ff" : "#4837f3ff")},
    ${({ right }) => (right ? "#fe9000ff" : "#9903edff")}
  );
  padding: 12px 17px;

  &:hover {
    transition: all 350ms;
    background-color: black;
    cursor: pointer;
  }
`;

const BtnHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 30%;
  border-bottom: 1px solid grey;
  gap: 30px;
  padding-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 425px) {
    gap: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  width: 100%;
  background-color: black;
  flex-wrap: wrap;
  flex-direction: column;
  p {
    color: white;
    text-align: center;
  }
`;