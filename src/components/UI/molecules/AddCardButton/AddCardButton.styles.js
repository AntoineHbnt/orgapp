import { styled } from "../../../../Themes";

export const Form = styled("form", {
  flexDirection: "column",
  display: "flex",
  width: "100%",
  gap: "$2",
  boxSizing: "border-box",
});

export const TextContainer = styled("div", {
  borderRadius: "$1",
  backgroundColor: "$secondary",
  padding: "$1",
});

export const TextArea = styled("textarea", {
  maxWidth: "100%",
  minWidth: "100%",
  boxSizing: "border-box",
  fontSize: "$5",
  backgroundColor: 'transparent',
  border: 'none',
  "&:focus": {
      outline: 'none'
  }
});

export const Row = styled("div", {
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
});

export const ButtonLabel = styled("span", {
  fontWeight: "300",
  fontSize: "$6",
  lineHeight: "$5",
  color: "$secondary",
});
