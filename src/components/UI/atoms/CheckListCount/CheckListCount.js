import { CheckBoxIcon } from "../icons/CheckBox";
import { Container, StyledSpan } from "./CheckListCount.styles";

export const CheckListCount = ({ done, total }) => {
  return (
    <Container>
      <CheckBoxIcon />
      <StyledSpan>
          {`${done}/${total}`}
      </StyledSpan>
    </Container>
  );
};
