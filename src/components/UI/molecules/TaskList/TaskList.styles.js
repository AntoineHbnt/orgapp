import { keyframes } from "@stitches/react";
import { styled } from "../../../../Themes";

const showList = keyframes({
  "0%": {
    width: "0px",
    opacity: "0",
    transform: "scale(0)",
  },
  "75%": {
    opacity: "50%",
  },
  "100%": {
    width: "240px",
    opacity: "100%",
    transform: "scale(1)",
  },
});

export const Container = styled("div", {
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "240px",
  height: "fit-content",
  borderRadius: "$4",
  boxShadow: "$default",
  boxSizing: "border-box",
  animation: `.25s ease ${showList}`,
});

export const Content = styled("div", {
  width: "100%",
  maxHeight: "70vh",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  border: "3px solid $black",
  marginTop: "-3px",
  marginBottom: "-3px",
  boxSizing: "border-box",
  "&::-webkit-scrollbar": {
    display: "none",
  },

  scrollbarWidth: "none",
});

export const Footer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  boxSizing: "border-box",
  border: "3px solid $black",
  padding: "$8 $12",
});

export const List = styled("div", {
  flexDirection: "column",
  width: "100%",
  display: "flex",
  padding: "$12",
  boxSizing: "border-box",
  gap: "$8",
});

//SETTING MODAL

const showModalBackground = keyframes({
  "0%": {
    opacity: "0",
  },
  "100%": {
    opacity: "100%",
  },
});



export const ModalBackground = styled("div", {
  position: "fixed",
  zIndex: "10",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  animation: `.1s ease-in ${showModalBackground}`,
  backgroundColor: "rgba(0,0,0,0.45)",
});
