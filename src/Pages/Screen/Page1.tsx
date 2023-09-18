import styled from "styled-components";
import lady from "../../assets/about-4.png";
import WelcomeComponent from "../../Component/common/WelcomeCom";
import { BsWindowDesktop, BsGear, BsMic } from "react-icons/bs";

const Welcome = () => {
  return (
    <div>
      <Container>
        <TopWrapper>
          <W>
            WELCOME TO <span> LAYER</span>
          </W>
          <div style={{ display: "flex" }}>
            <Line bcc="#e74f40ff">
              <Ball />
            </Line>
            <Line bcc="grey"></Line>
          </div>
        </TopWrapper>
        <Wrapper>
          <Text>
            We ensure quality & support. People love us & we love them. Lorem
            ipsum dolor sit <br /> amet, consectetur adipiscing elit.
          </Text>
        </Wrapper>
        <CWrap>
          <Left>
            <WelcomeComponent
              Licon={BsWindowDesktop}
              Ltext="BOOTSTRAP 3.2"
              Stext="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua."
              left="#912cebff"
              right="#c812daff"
            />
            <WelcomeComponent
              Licon={BsGear}
              Ltext="CREATIVE DESIGN"
              Stext="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua."
              left="#ff5e3cff"
              right="#ff9b33ff"
            />
            <WelcomeComponent
              Licon={BsMic}
              Ltext="EASY TO USE"
              Stext="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua."
              left="#f0356dff"
              right="#fb6650ff"
            />
          </Left>
          <Right>
            <Img src={lady} />
          </Right>
        </CWrap>
      </Container>
    </div>
  );
};

export default Welcome;
const CWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Img = styled.img`
  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 80px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    padding-right: 20px;
  }
`;

const Text = styled.div`
  text-align: center;
  font-weight: 500;
  color: #9b9b9bff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ball = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e74f40ff;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Line = styled.div<{ bcc: string }>`
  width: 50px;
  height: 1px;
  background-color: ${({ bcc }) => bcc};
  margin-top: 23px;
  display: flex;
  align-items: center;
  margin: 8px 0px;
`;

const W = styled.div`
  height: 100%;
  width: 100%;
  font-size: 36px;
  font-weight: 400;
  display: flex;
  justify-content: center;
    @media screen and (max-width: 320px) {
  font-size: 22px;
  }
  span {
    color: #e74c3cff;
    /* margin-left: 11px; */
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  // padding: 30px 0px 0px 0px;
`;
