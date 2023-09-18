import styled from "styled-components";
import big from "../../assets/big-screen.png";
import small from "../../assets/small-screen.png";
import HOWComponent from "../../Component/common/HOWComponent";
import { BiBell, BiHeart, BiMessage, BiStar } from "react-icons/bi";


const FourthComponent = () => {
  return (
    <div>
      <Container>
        <Phone>
          <mark>
            <Img src={big} />
          </mark>
        </Phone>
        <Info>
          <TopWrapper>
            <W>HOW IT WORKS</W>
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
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore aliqua.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </Text>
          </Wrapper>

          <Benefits>
            <B>Benefits Of App</B>
            <Components>
              <div style={{ margin: "0", display: "flex", flexWrap: "wrap" }}>
                <HOWComponent
                  Licon={BiBell}
                  Ltext="Notifications"
                  Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                  left="#bc5bddff"
                  right="#ed56bcff"
                />
                <HOWComponent
                  Licon={BiMessage}
                  Ltext="24/7 Support"
                  Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                  left="#f1386aff"
                  right="#fb6351ff"
                />
              </div>
              <div style={{ margin: "0", display: "flex", flexWrap: "wrap" }}>
                <HOWComponent
                  Licon={BiStar}
                  Ltext="Favourites"
                  Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                  left="#8584e8ff"
                  right="#61c2e5ff"
                />
                <HOWComponent
                  Licon={BiHeart}
                  Ltext="Wishlist"
                  Stext="Lorem ipsum dolor sit amet, sed do consectetur adipisicing elit."
                  left="#bc5bddff"
                  right="#ed56bcff"
                />
              </div>
            </Components>
            <Button>Learn More</Button>
          </Benefits>
        </Info>
      </Container>
    </div>
  );
};

export default FourthComponent;

const B = styled.h1`
  margin: 20px 0 0 0;
  font-weight: 400;
`;

const Div = styled.div``;

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

const Components = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
`;

const Benefits = styled.div`
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
`;

const Img = styled.img``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 60%;

  @media (max-width: 500px) {
    width: 97%;
    justify-content: center;
  }
`;

const Text = styled.div`
  font-weight: 500;
  color: #9b9b9bff;
  width: 70%;

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

const Phone = styled.div`
  width: 36%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  mark {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    background-image: url(${small});
    background-repeat: no-repeat;
    object-fit: contain;
    background-position: center;
    background-color: transparent;

    @media (max-width: 500px) {
      justify-content: center;
      background-position: left;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 70px 0px 70px 0px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`;