import React from "react";
import { styled } from "../../../../Themes";

const StyledButton = styled("div", {
  width: "fit-content",
  height: "fit-content",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 18px",
  gap: "0.375rem",
  backgroundColor: "$secondary",
  borderRadius: "8px",
  color: "$primary",

  "& > svg": {
    fill: "$primary",
  },

  variants: {
    type: {
      secondary: {
        backgroundColor: "$primary",
        color: "$secondary",
        "& > svg": {
          fill: "$secondary",
        },
      },
      tertiary: {
        outline: "3px solid $primary",
        outlineOffset: "-3px",
        "& > svg": {
          fill: "$primary",
        },
      },
    },
  },
});

const StyledLabel = styled("span", {
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "$6",
  lineHeight: "$6",
});

const Button = ({ label, type, icon, fontSize }) => {
  return (
    <StyledButton type={type}>
      {icon && icon}
      <StyledLabel css={fontSize ? { fontSize, lineHeight: fontSize } : {}}>{label}</StyledLabel>
    </StyledButton>
  );
};

export default Button;
