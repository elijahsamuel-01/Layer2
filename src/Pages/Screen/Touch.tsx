import styled from "styled-components";
import bg from "../../assets/contact-bg.jpeg";

const Touch = () => {
  return (
    <div>
      <Bg>
        <Container>
          <InputHold>
            <Wrap>
              <Txt>Get In Touch</Txt>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <TextArea placeholder="Your message" />
              <Button>Send Now</Button>
            </Wrap>
          </InputHold>
          <Hold>
            <TopWrapper>
              <W>GETTING BEST FEATURES EVER</W>
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
                eiusmod tempor incididunt ut labore et dolore aliqua. Lorem
                ipsum dolor sit amet.
              </Text>
            </Wrapper>
            <Button>Contact Us</Button>
          </Hold>
        </Container>
      </Bg>
    </div>
  );
};

export default Touch;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bg});
  background-size: cover;
`;

const Hold = styled.div`
  width: 300px;
`;

const Text = styled.div`
  font-weight: 500;
  color: #9b9b9bff;
  width: 100%;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Wrapper = styled.div``;

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
`;

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

const TextArea = styled.textarea`
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 95%;
  height: 40px;
  outline: grey 1px solid;
  border: none;
  border-radius: 7px;
  padding-left: 20px;
  margin-bottom: 15px;
`;

const Txt = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  font-family: sans-serif;
`;

const Wrap = styled.div`
  width: 80%;
  height: 87%;
  background-color: #ffffff;
`;

const InputHold = styled.div`
  width: 400px;
  height: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: rgb(255, 255, 255);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff5f;
  gap: 30px;
  padding: 50px 0;
  flex-wrap: wrap;
`;