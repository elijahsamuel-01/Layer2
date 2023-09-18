import styled from "styled-components";
import bg from "../../assets/bg-2.jpeg";
import TableComponent from "../../Component/common/TableComponent";
import { BsBootstrap, BsTv } from "react-icons/bs";
import { BiLogoHtml5, BiRocket } from "react-icons/bi";
import phone from "../../assets/about-3.png";

const Additional = () => {
  return (
    <div>
      <Container>
        <Hold>
          <TopWrapper>
            <W>
              ADDITIONAL <span> FEATURES</span>
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
          <Table>
            <TableComponent Icon={BsBootstrap} text="BOOTSTRAP 3.0" />
            <TableComponent Icon={BiLogoHtml5} text="HTML5 & CSS3" />
            <TableComponent Icon={BsTv} text="RESPONSIVE" />
            <TableComponent Icon={BiRocket} text="UNLIMITED SUPPORT" />
          </Table>
          <ImgHolder>
            <Img src={phone} />
          </ImgHolder>
        </Hold>
      </Container>
    </div>
  );
};

export default Additional;

const ImgHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Img = styled.img`
  @media (max-width: 885px) {
    width: 90%;
  }
`;

const Table = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  flex-wrap: wrap;
`;

const Hold = styled.div`
  padding: 50px 0px 00px 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  flex-wrap: wrap;

  @media screen and (max-width: 885px) {
    padding: 50px 0px 80px 0px;
    height: 100%;
    flex-wrap: wrap;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  color: white;
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
  flex-direction: column;
`;

const Line = styled.div<{ bcc: string }>`
  width: 50px;
  height: 1px;
  background-color: ${({ bcc }) => bcc};
  margin-top: 23px;
  display: flex;
  align-items: center;
`;

const W = styled.div`
  height: 100%;
  width: 100%;
  font-size: 36px;
  font-weight: 400;
  display: flex;
  color: white;
  justify-content: center;

  @media screen and (max-width: 500px) {
    font-size: 29px;
  }

  span {
    color: #e74c3cff;
    margin-left: 11px;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${bg});
  background-attachment: fixed;
  position: relative;

  @media screen and (max-width: 885px) {
    height: 100%;
    flex-wrap: wrap;
  }
`;