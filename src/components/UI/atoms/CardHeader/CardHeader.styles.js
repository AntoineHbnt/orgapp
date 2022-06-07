import { styled } from "../../../../Themes";

export const Container = styled("div", {
  position: 'relative',
  display: "flex",
  width: "100%",
  flexDirection: "column",
  border: "3px solid #000",
  boxSizing: "border-box",
});

export const Content = styled("div", {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  display: "flex",
  padding: "$6",
});

export const Children = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$4",
});

export const buttonStyle = {
  "& > button": {
    aspectRatio: "1/1",
    display: "block",
    width: "fit-content",
    border: "0px",
    transition: "all .1s ease-in",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.05)",
    },
    "& > svg": {
      transform: "scale(1.5)",
    },
  },
};
