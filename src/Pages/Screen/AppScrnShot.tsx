import styled from "styled-components";
import ScrnShotCom from "../../Component/common/ScrnShotCom.";
import phone from "../../assets/1 (1).jpg";
import phone2 from "../../assets/2 (1).jpg";
import phone3 from "../../assets/3 (1).jpg";
import phone4 from "../../assets/4 (1).jpg";

const AppScrnShot = () => {
  return (
    <div>
      <Container>
        <TopWrapper>
          <W>APP SCREENSHOTS</W>
        </TopWrapper>
        <div
          style={{
            display: "flex",
          }}
        >
          <Line bcc="#e74f40ff">
            <Ball />
          </Line>
          <Line bcc="grey"></Line>
        </div>
        <Wrapper>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore aliqua. Lorem ipsum
            dolor sit amet
          </Text>
        </Wrapper>
        <ScrnHolder>
          <ScrnShotCom Image={phone} />
          <ScrnShotCom Image={phone2} />
          <ScrnShotCom Image={phone3} />
          <ScrnShotCom Image={phone4} />
        </ScrnHolder>
      </Container>
    </div>
  );
};

export default AppScrnShot;

const ScrnHolder = styled.div`
  width: 100%;
  margin: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Text = styled.div`
  width: 70%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  font-weight: 500;
  color: #9b9b9bff;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e74f40ff;
`;

const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Line = styled.div<{ bcc: string }>`
  width: 50px;
  height: 1px;
  background-color: ${({ bcc }) => bcc};
  display: flex;
  align-items: center;
  margin: 15px 0px;
`;

const W = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: 400;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  background: linear-gradient(to right, #ffe8f8ff, #fffafaff, #ffefe8ff);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
`;