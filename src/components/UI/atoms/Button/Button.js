import React from "react";
import { StyledButton, StyledLabel } from "./Button.styles";



const Button = ({ label, style, icon, css, onClick, type }) => {
  return (
    <StyledButton type={type ? type : ""} style={style} css={css} onClick={onClick}>
      {icon && icon}
      <StyledLabel>{label}</StyledLabel>
    </StyledButton>
  );
};

export default Button;
