import styled from "styled-components";
import CountCom from "../../Component/common/CountCom";
import { BiDownload, BiLike } from "react-icons/bi";
import { BsAward, BsPerson } from "react-icons/bs";

const CountSection = () => {
  return (
    <div>
      <Container>
        <CountCom
          ICON={BiDownload}
          text="Downloads"
          number={1550}
          left="#e22d68ff"
          right="#b410c0ff"
        />
        <CountCom
          ICON={BiLike}
          text="Likes"
          number={5200}
          left="#562ff2ff"
          right="#890defff"
        />
        <CountCom
          ICON={BsAward}
          text="Awards Won"
          number={400}
          left="#1976ebff"
          right="#1976ebff"
        />
        <CountCom
          ICON={BsPerson}
          text="Author Working"
          number={34}
          left="#fa9934ff"
          right="#f0258fff"
        />
      </Container>
    </div>
  );
};

export default CountSection;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0px;
`;