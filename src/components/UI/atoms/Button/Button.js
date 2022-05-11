import React from "react";
import { StyledButton, StyledLabel } from "./Button.styles";



const Button = ({ label, type, icon, fontSize }) => {
  return (
    <StyledButton type={type}>
      {icon && icon}
      <StyledLabel css={fontSize ? { fontSize, lineHeight: fontSize } : {}}>{label}</StyledLabel>
    </StyledButton>
  );
};

export default Button;
