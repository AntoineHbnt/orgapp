import { styled } from "../../../../Themes";

export const StyledButton = styled("button", {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.375rem",
  display: "flex",
  boxSizing: "border-box",
  width: "fit-content",
  height: "fit-content",
  backgroundColor: "$secondary",
  cursor: "pointer",
  color: "$primary",
  border: "3px solid #000",

  "& > svg": {
    fill: "$primary",
  },
});

export const StyledLabel = styled("span", {
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "$6",
  lineHeight: "$6",
});
