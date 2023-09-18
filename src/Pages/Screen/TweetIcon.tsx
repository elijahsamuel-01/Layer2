import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

const TwitterIcon = () => {
  return (
    <div>
      <Container>
        <Up></Up>
        <Icon>
          <FaTwitter />
        </Icon>
        <Down></Down>
      </Container>
    </div>
  );
};

export default TwitterIcon;

const Icon = styled.div`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 40px;
  color: white;
  background: linear-gradient(to right, #004fe6ff, #04c4f0ff);
  border-radius: 50%;
  position: absolute;
`;

const Down = styled.div`
  width: 100%;
  height: 50%;
  background: black;
`;
const Up = styled.div`
  width: 100%;
  height: 50%;
  background: white;
`;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;