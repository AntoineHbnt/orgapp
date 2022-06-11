import React from "react";
import { StyledButton, StyledLabel } from "./Button.styles";



const Button = ({ label, icon, css, onClick, type }) => {
  return (
    <StyledButton type={type ? type : ""} css={css} onClick={onClick}>
      {icon && icon}
      {label && <StyledLabel>{label}</StyledLabel>}
    </StyledButton>
  );
};

export default Button;
