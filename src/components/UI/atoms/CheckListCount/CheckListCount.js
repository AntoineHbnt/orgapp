import { useEffect, useState } from "react";
import { Container, StyledSpan } from "./CheckListCount.styles";

export const CheckListCount = ({ checkList }) => {
  const [countDone, setCountDone] = useState(
    checkList.checkboxList.filter((elem) => elem.state === "done").length
  );
  const [color, setColor] = useState("$red");

  useEffect(() => {
    setCountDone(
      checkList.checkboxList.filter((elem) => elem.state === "done").length
    );
  }, [checkList]);

  useEffect(() => {
    if (countDone > 0 && countDone < checkList.checkboxList.length)
      setColor("$orange");
    if (countDone === 0) setColor("$red");
    if (countDone === checkList.checkboxList.length) setColor("$green");
  }, [countDone]);

  return (
    <Container css={{ background: color }}>
      <StyledSpan>{`${countDone}/${checkList.checkboxList.length}`}</StyledSpan>
    </Container>
  );
};
