import styled from "styled-components";
import React from "react";

interface iComponent {
  left: string;
  right: string;
  Ltext: string;
  Stext: string;
  Licon: any;
}

const WelcomeComponent: React.FC<iComponent> = ({
  left,
  right,
  Ltext,
  Stext,
  Licon,
}) => {
  return (
    <div>
      <Container>
        <Icon left={left} right={right}>
          <Licon />
        </Icon>
        <TxtHold>
          <Large>{Ltext}</Large>
          <Small>{Stext}</Small>
        </TxtHold>
      </Container>
    </div>
  );
};

export default WelcomeComponent;

const Small = styled.div`
  font-size: 15px;
  font-weight: 400;
  text-align: right;
`;

const Large = styled.div`
  font-size: 20px;
  text-align: right;
  font-weight: 700;
  margin: 14px 0;
`;

const TxtHold = styled.div`
  width: 70%;
  margin-right: 40px;
`;

const Icon = styled.div<{ right: string; left: string }>`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: linear-gradient(
    to right,
    ${({ left }) => left},
    ${({ right }) => right}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  color: white;
  margin-top: 13px;

  &:hover {
    transform: scale(1.3);
    transition: all 350ms;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 170px;
  // padding-right: 40px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;
