import React from "react";
import { styled } from "../../../Themes";
import { getIcon } from "./icons/IconManager";

const StyledButton = styled("div", {
  width: "min-content",
  height: "min-content",
  boxSizing: 'border-box',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 18px",
  gap: "0.375rem",
  backgroundColor: "$secondary",
  borderRadius: "8px",
  color: "$primary",
  variants: {
    type: {
      secondary: {
        backgroundColor: "$primary",
        color: "$secondary",
      },
      tertiary: {
        outline: "3px solid $primary",
        outlineOffset: "-3px"
      },
    },
  },
});

const StyledLabel = styled("span", {
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "0.75rem",
  lineHeight: "0.75rem",
});

const Button = ({ type, icon }) => {
  return (
    <StyledButton type={type}>
      {icon && getIcon(icon, type)}
      <StyledLabel>Lorem</StyledLabel>
    </StyledButton>
  );
};

export default Button;
