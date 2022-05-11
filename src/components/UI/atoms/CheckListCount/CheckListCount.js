import { CheckBoxIcon } from "../icons/CheckBox";
import { Container, StyledSpan } from "./CheckListCount.styles";

export const CheckListCount = ({ checkList }) => {
  return (
    <Container css={{marginTop: '8px'}}>
      <CheckBoxIcon />
      <StyledSpan>
          {`${checkList.done.length}/${checkList.done.length + checkList.todo.length}`}
      </StyledSpan>
    </Container>
  );
};
