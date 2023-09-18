import styled from "styled-components";
import TemplateComponent from "../../Component/common/TemplateComponent";

const Template = () => {
  return (
    <div>
      <Container>
        <TemplateComponent />
      </Container>
    </div>
  );
};

export default Template;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;