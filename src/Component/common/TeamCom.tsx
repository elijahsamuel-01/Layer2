import styled from "styled-components";
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import member from "../../assets/3.png";

interface iTeam {
  image: any;
  name: string;
  role: string;
}

const TeamCom: React.FC<iTeam> = ({ image, name, role }) => {
  return (
    <div>
      <Container>
        <ImageHolder>
          <Img src={image} />
          <Media>
            <Icons>
              <Icon>
                <FaFacebook />
              </Icon>
              <Icon>
                <BsTwitter />
              </Icon>
              <Icon>
                <BsInstagram />
              </Icon>
              <Icon>
                <BsLinkedin />
              </Icon>
            </Icons>
          </Media>
        </ImageHolder>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Container>
    </div>
  );
};
export default TeamCom;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Media = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3d12d98c;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 20px;
  top: 0;
  opacity: 0;

  &:hover {
    opacity: 1;
    transition: all 450ms;
  }
`;

const Role = styled.div`
  font-size: 18px;
  font-family: sans-serif;
`;

const Name = styled.div`
  font-size: 27px;
  font-family: sans-serif;
  margin: 7px 0;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
const Icon = styled.div`
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff4a2b;
  font-size: 24px;
  animation: 2s infinite linear rotate;
  &:hover + ${Media} {
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  }
`;

const ImageHolder = styled.div`
  border-radius: 30px;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  width: 250px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;