import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
// import phone from "../../assets/1.jpg";
type iPhone = {
  Image: any;
};

const ScrnShotCom: React.FC<iPhone> = ({ Image }) => {
  return (
    <div>
      <Container>
        <Phone>
          <Img src={Image} />
        </Phone>
        <Wrapper>
          <Icon />
        </Wrapper>
      </Container>
    </div>
  );
};

export default ScrnShotCom;

const Icon = styled(BsPlusCircle)`
  &hover {
    transform: scale(1.2);
    color: #f1592f;
    z-index: 80;
  }
`;

const Img = styled.img`
  border-radius: 10px;
`;

const Phone = styled.div``;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.679);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  z-index: 66;
  position: absolute;
  color: white;
  top: 0;
  width: 280px;
  height: 490px;
  border-radius: 10px;
  opacity: 0;

  &:hover {
    transition: all 350ms;
    transform: scale(1.2);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 290px;
  height: 500px;
  background-color: #00000072;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;