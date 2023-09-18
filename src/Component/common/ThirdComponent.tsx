import { BsPen } from "react-icons/bs";
import styled from "styled-components";

interface IFeature {
  LIcon: any;
  LText: string;
  color: string;
  left: string;
  right: string;
}

const ThirdComponent: React.FC<IFeature> = ({
  LIcon,
  LText,
  color,
  left,
  right,
}) => {
  return (
    <div>
      <Container left={left} right={right}>
        <Icon color={color}>
          <LIcon />
        </Icon>
        <section>
          <Ltxt>{LText}</Ltxt>
          <Stxt>Lorem ipsum dolor sit amet elit</Stxt>
        </section>
      </Container>
    </div>
  );
};

export default ThirdComponent;

const Stxt = styled.div`
  width: 100%;
  font-size: 13px;
`;

const Ltxt = styled.div`
  width: 100%;
  font-size: 24px;
  margin-bottom: 14px;
`;

const Icon = styled.div<{ color: string }>`
  height: 100%;
  width: 15%;
  margin-left: 20px;
  font-size: 27px;
  display: flex;
  align-items: center;
  color: ${({ color }) => color};
`;

const Container = styled.div<{ right: string; left: string }>`
  width: 290px;
  height: 130px;
  border-radius: 20px;
  box-shadow: 0px 0px 30px #e3e3f3ff;
  margin: 0px ${({ right }) => right}px 0px ${({ left }) => left}px;
  display: flex;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    margin: 0;
  }
`;