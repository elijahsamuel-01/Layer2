import styled from "styled-components";

const SubscribePage = () => {
  return (
    <div>
      <Container>
        <Wrap>
          <TopWrapper>
            <W>SUBSCRIBE TO OUR UPDATES</W>
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
              Subscribe to our email newsletter for useful tips and resources.
            </Text>
          </Wrapper>
        </Wrap>
        <Hold>
          <Input placeholder="Enter your email address" />
          <Sub>Subscribe</Sub>
        </Hold>
      </Container>
    </div>
  );
};

export default SubscribePage;

const Sub = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 25 px;
  font-family: sans-serif;
  border-radius: 0px 5px 5px 0;
  background-color: #e74c3cff;
`;

const Input = styled.input`
  outline: 1px solid #e74c3cff;
  width: 200px;
  height: 46px;
  border: none;
  border-radius: 5px 0px 0px 5px;
  padding-left: 20px;
`;

const Hold = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 320px) {
    width: 97%;
  }
`;

const Wrap = styled.div`
  @media (max-width: 885px) {
    width: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Text = styled.div`
  font-weight: 500;
  color: #9b9b9bff;
  width: 100%;
  @media (max-width: 885px) {
    justify-content: center;
    display: flex;
    width: 95%;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 885px) {
    width: 100%;
    align-items: center;
  }
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
  font-family: sans-serif;
  text-align: center;
  @media (max-width: 885px) {
    width: 100%;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #e9f0ffff, #f7e8ffff);
  padding: 30px 0;
  display: flex;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
  @media (max-width: 885px) {
    gap: 50px;
  }
`;