import styled from "styled-components";
import AppNewsCom from "../../Component/common/AppNewsCom";

const AppNews = () => {
  return (
    <div>
      <Container>
        <TopWrapper>
          <W>APP NEWS</W>
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
            We ensure quality & support. People love us & we love them. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Wrapper>
        <NewsHolder>
          <AppNewsCom />
        </NewsHolder>
        <Button>Load More Post</Button>
      </Container>
    </div>
  );
};

export default AppNews;
const Button = styled.button`
  border: none;
  border-radius: 40px;
  color: white;
  font-size: 18px;
  background-color: #e74c3cff;
  padding: 12px 17px;

  &:hover {
    transition: all 350ms;
    background-color: black;
    cursor: pointer;
  }
`;

const NewsHolder = styled.div`
  width: 100%;
  margin: 50px 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Text = styled.div`
  font-weight: 500;
  color: #9b9b9bff;
  width: 50%;
  text-align: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
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
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
`;