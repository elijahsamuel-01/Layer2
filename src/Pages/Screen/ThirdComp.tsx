import styled from "styled-components";
import ThirdComponent from "../../Component/common/ThirdComponent";
import phone from "../../assets/about-2.png";
import { BiGlobe, BiMicrophone, BiPen } from "react-icons/bi";
import { BsFlag, BsLightning, BsPaletteFill } from "react-icons/bs";

const ThirdComp = () => {
  return (
    <div>
      <Container>
        <TopWrapper>
          <W>AWESOME FEATURES</W>
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
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Wrapper>
        <Holder>
          <Left>
            <ThirdComponent
              LIcon={BiPen}
              LText="Creative Design"
              color="red"
              left=""
              right=""
            />
            <ThirdComponent
              LIcon={BsFlag}
              LText="Easy to Customize"
              color="lightblue"
              left="80"
              right="0"
            />
            <ThirdComponent
              LIcon={BsLightning}
              LText="Bootstrap 3"
              color="orange"
              left=""
              right=""
            />
          </Left>
          <Middle>
            <Img src={phone} />
          </Middle>
          <Right>
            <ThirdComponent
              LIcon={BsPaletteFill}
              LText="Different Colours"
              color="purple"
              left=""
              right=""
            />
            <ThirdComponent
              LIcon={BiGlobe}
              LText="Seo friendly"
              color="cyan"
              left="0"
              right="80"
            />
            <ThirdComponent
              LIcon={BiMicrophone}
              LText="24/7 SUPPORT"
              color="#fe9776ff"
              left=""
              right=""
            />
          </Right>
        </Holder>
      </Container>
    </div>
  );
};

export default ThirdComp;

const Img = styled.img`
  @media (max-width: 321px) {
    width: 98%;
  }
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  align-items: center;
`;
const Middle = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Left = styled.div`
  height: 100%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Holder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  color: #9b9b9bff;
  height: 100%;
  width: 50%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
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
  flex-direction: column;
`;

const Line = styled.div<{ bcc: string }>`
  width: 50px;
  height: 1px;
  background-color: ${({ bcc }) => bcc};
  display: flex;
  margin: 15px 0px;
  align-items: center;
`;

const W = styled.div`
  height: 100%;
  width: 100%;
  font-size: 36px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  text-align: center;

  span {
    color: #e74c3cff;
    margin-left: 11px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 90%;
  background: linear-gradient(to right, #e9f0ffff, #fcfaffff, #f8e9ffff);
  padding: 50px 0px 50px 0px;
`;