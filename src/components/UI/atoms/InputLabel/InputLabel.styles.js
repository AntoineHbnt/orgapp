import { styled } from "../../../../Themes";

export const Container = styled("div", {
  display: "flex",
  flex: "1",
});

export const Input = styled("input", {
  height: "$3",
  width: "100%",
  padding: "$1",
  transition: ".1s ease-in-out",
  "&:focus": {
    outline: 'none',
  }
});

export const Label = styled("span", {
  cursor: "pointer",
  width: "100%",
  lineHeight: "$3",
  fontWeight: "400",
  fontSize: "$4",
  color: "$secondary",
  padding: "$1",
});
