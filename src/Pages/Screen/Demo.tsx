import styled from "styled-components";
import pc from "../../assets/video_bg.png";
import vidbg from "../../assets/bg-3.jpeg";

const Demo = () => {
  return (
    <div>
      <Container>
        <TopWrapper>
          <W>DEMO VIDEO</W>
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
            }}
          >
            <Line bcc="#e74f40ff">
              <Ball />
            </Line>
            <Line bcc="white"></Line>
          </div>
        </TopWrapper>
        <Wrapper>
          <Text>
            We ensure quality & support. People love us & we love them. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Wrapper>
        <Laptop>
          <Img src={pc} />
        </Laptop>
      </Container>
    </div>
  );
};

export default Demo;
const Img = styled.img`
  width: 70%;
`;

const Laptop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  text-align: center;
  font-weight: 500;
  color: #ffffff;
  width: 57%;
  font-size: 18px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
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
  align-items: center;
  margin: 15px 0px;
`;

const W = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  font-size: 34px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  text-align: center;

  span {
    color: #e74c3cff;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${vidbg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 40px 0 0 0;
  margin-bottom: 50px;
`;