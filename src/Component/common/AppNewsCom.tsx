import styled from "styled-components";
import { FaImage } from "react-icons/fa";
import { FaAngleRight, FaShare, FaVideo } from "react-icons/fa6";
import { BsEyeFill } from "react-icons/bs";
import { BiComment, BiRightArrow } from "react-icons/bi";

const AppNewsCom = () => {
  return (
    <div>
      <Holder>
        <Container>
          <IconHolder>
            <Icon>
              <FaImage />
            </Icon>
          </IconHolder>
          <OtherHolder>
            <Icons>
              <Share>
                <FaShare />
                <Text> 569 Shares</Text>{" "}
              </Share>
              <View>
                <BsEyeFill />
                <Text> 3,153 Views</Text>
              </View>
              <Comment>
                <BiComment />
                <Text>21 Comments</Text>{" "}
              </Comment>
            </Icons>
            <LargeText>A Sample Image Blog Heading Goes Here</LargeText>
            <SmallText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit est is.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit est is
            </SmallText>
            <More>
              Read More <FaAngleRight />
            </More>
          </OtherHolder>
        </Container>

        <Container>
          <IconHolder>
            <Icon>
              <FaVideo />
            </Icon>
          </IconHolder>
          <OtherHolder>
            <Icons>
              <Share>
                <FaShare />
                <Text> 569 Shares</Text>{" "}
              </Share>
              <View>
                <BsEyeFill />
                <Text> 3,153 Views</Text>
              </View>
              <Comment>
                <BiComment />
                <Text>21 Comments</Text>{" "}
              </Comment>
            </Icons>
            <LargeText>A Sample Video Blog Heading Goes Here</LargeText>
            <SmallText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit est is.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit est is
            </SmallText>
            <More>
              Read More <FaAngleRight />
            </More>
          </OtherHolder>
        </Container>
      </Holder>
    </div>
  );
};

export default AppNewsCom;

const Holder = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 855px) {
    gap: 30px;
    justify-content: center;
  }
`;

const Text = styled.div`
  color: grey;
  font-family: sans-serif;
`;

const More = styled.div`
  color: #ff5133;
  display: flex;
  align-items: center;
  gap: 7px;
`;

const SmallText = styled.div`
  font-size: 15px;
  font-family: sans-serif;
  color: grey;
  font-weight: 200;
  margin: 10px 0;
  line-height: 25px;
`;
const LargeText = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 500;
  margin-top: 10px;
  @media (max-width: 885px) {
    font-size: calc(20px - 3px);
  }
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 5px;
  color: red;
`;
const View = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 5px;
  color: red;
`;

const Share = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  gap: 5px;
  color: red;
`;

const Icons = styled.div`
  width: 84%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 885px) {
    width: 93%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }
`;

const OtherHolder = styled.div`
  @media (max-width: 885px) {
    width: 95%;
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(to right, violet, blue);
  font-size: 30px;
  color: white;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const IconHolder = styled.div`
  @media (max-width: 885px) {
    width: 95%;
  }
`;

const Container = styled.div`
  max-width: 570px;
  min-height: 180px;
  display: flex;
  gap: 20px;

  @media (max-width: 885px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 320px) {
    min-width: 200px;
  }
`;