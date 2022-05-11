import React from "react";



const Button = ({ label, type, icon, fontSize }) => {
  return (
    <StyledButton type={type}>
      {icon && icon}
      <StyledLabel css={fontSize ? { fontSize, lineHeight: fontSize } : {}}>{label}</StyledLabel>
    </StyledButton>
  );
};

export default Button;
