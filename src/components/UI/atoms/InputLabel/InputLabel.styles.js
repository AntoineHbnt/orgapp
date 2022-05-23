import { styled } from "../../../../Themes";

export const Container = styled("div", {
  width: '100%',
  boxSizing: "border-box",
  flex: "1",
});

export const Input = styled("input", {
  height: '100%',
  width: "100%",
  boxSizing: "border-box",
  padding: "$1",
  transition: ".1s ease-in-out",
  "&:focus": {
    outline: "none",
  },
});

export const Label = styled("span", {
  cursor: "pointer",
  width: "100%",
  height: '100%',
  fontWeight: "400",
  boxSizing: "border-box",
  fontSize: "$4",
  color: "$secondary",
  padding: "$1",
});
