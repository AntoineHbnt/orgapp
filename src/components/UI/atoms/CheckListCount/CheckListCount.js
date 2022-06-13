import { useEffect, useState } from "react";
import { Container, StyledSpan } from "./CheckListCount.styles";

export const CheckListCount = ({ checkList }) => {
  const [countTodo, setCountTodo] = useState(checkList.checkboxList.length);
  const [countDone, setCountDone] = useState(
    checkList.checkboxList.filter((elem) => elem.state === "done").length
  );

  useEffect(() => {
    setCountTodo(checkList.checkboxList.length);
    setCountDone(
      checkList.checkboxList.filter((elem) => elem.state === "done").length
    );
  }, [checkList]);

  return (
    countTodo > 0 && (
      <Container>
        <StyledSpan>{`${countDone}/${countTodo}`}</StyledSpan>
      </Container>
    )
  );
};
