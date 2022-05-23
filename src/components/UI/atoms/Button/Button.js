import React from "react";
import { StyledButton, StyledLabel } from "./Button.styles";



const Button = ({ label, type, icon, css, onClick }) => {
  return (
    <StyledButton type={type} css={css} onClick={onClick}>
      {icon && icon}
      <StyledLabel>{label}</StyledLabel>
    </StyledButton>
  );
};

export default Button;
