import { BsBootstrap } from "react-icons/bs";
import styled from "styled-components";
import bg from "../Asset/bg3.jpg";

interface iStuff {
  Icon: any;
  text: string;
}

const TableComponent: React.FC<iStuff> = ({ Icon, text }) => {
  return (
    <div>
      <Container>
        <Circle>
          <Icon />
        </Circle>
        <Border>
          <Text>
            <Large>{text}</Large>
            <Small>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit est
              is.
            </Small>
          </Text>
        </Border>
      </Container>
    </div>
  );
};

export default TableComponent;

const Small = styled.div`
  width: 101%;
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 15px;
  margin-top: 30px;

  height: 70px;
`;

const Large = styled.div`
  margin-top: 33px;
  font-size: 27px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  width: 301px;
  height: 160px;
`;

const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #e74c3cff;
  z-index: 1;
  position: absolute;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;

  &:hover {
    animation: rotate 500ms;
    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

const Border = styled.div`
  border: 1px solid #e74c3cff;
  border-bottom: none;
  width: 300px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 300px;
  height: 150px;
  background-color: transparent;
  position: relative;
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;
