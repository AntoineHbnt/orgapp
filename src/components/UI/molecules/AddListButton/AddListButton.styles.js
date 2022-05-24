import { keyframes } from "@stitches/react";
import { styled } from "../../../../Themes";



export const Container = styled("form", {
  flexDirection: "column",
  display: "flex",
  overflow: 'hidden',
  width: "240px",
  height: 'fit-content',
  boxSizing: "border-box",
  backgroundColor: "$primary",
  borderRadius: "$1",
  padding: "$2",
  gap: "$2",
 });

export const InputContainer = styled("div", {
  flexDirection: "row",
  height: "32px",
  display: "flex",
  alignItems: "center",
});

export const ButtonRow = styled("div", {
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
});
