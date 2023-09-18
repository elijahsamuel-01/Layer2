import styled from "styled-components";
import { BiDownload } from "react-icons/bi";

interface iCard {
  text: string;
  number: number;
  ICON: any;
  right: string;
  left: string;
}

const CountCom: React.FC<iCard> = ({
  text,
  number,
  ICON,
  right,
  left,
}) => {
  return (
    <div>
      <Container>
        <Icon left={left} right={right}>
          <ICON />
        </Icon>
        <Text>{text}</Text>
        <Numbers>{number}+</Numbers>
      </Container>
    </div>
  );
};

export default CountCom;
const Numbers = styled.div`
  font-size: 60px;
  font-family: cursive;
  font-weight: 600;
  color: #fb4c2d;
`;

const Text = styled.div`
  margin: 10px;
  font-size: 29px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Icon = styled.div<{ left: string; right: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${({ left }) => left},
    ${({ right }) => right}
  );
  font-size: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 300px;
  height: 300px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;