import React, { useState } from "react";
import { Container, Input, Label } from "./InputLabel.styles";

const InputLabel = ({ value, onChange, css }) => {
  const [isFocus, setIsFocus] = useState(false);

  const content = (
    isFocus ? (
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e)}
        onBlur={() => setIsFocus(false)}
        onKeyPress={(e) => e.key === "Enter" && setIsFocus(false)}
        autoFocus
      />
    ) : (
      <Label css={css} onClick={() => setIsFocus(true)}>
        {value}
      </Label>
    )
  );

  return <Container>{content}</Container>;
};

export default InputLabel;
