import { Container, StyledSpan } from "./CheckListCount.styles";

export const CheckListCount = ({ checkList }) => {
  return (
    <Container>
      <StyledSpan>
          {`${checkList.done.length}/${checkList.done.length + checkList.todo.length}`}
      </StyledSpan>
    </Container>
  );
};
