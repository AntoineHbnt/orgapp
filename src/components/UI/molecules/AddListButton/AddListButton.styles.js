import { keyframes } from "@stitches/react";
import { styled } from "../../../../Themes";

export const showForm = keyframes({
  "0%": {
    width: "240px",
    height: "38px",
  },
  "100%": {
    height: "80px",
  },
});

const showButton = keyframes({
  "0%": {
    width: "240px",
    height: "80px",
  },
  "100%": {
    height: "38px",
  },
});

export const Container = styled("div", {
  border: "3px solid #000",
  borderRadius: '$4',
  boxSizing: "border-box",
  transitionDelay: "100ms",
  transition: "all .1s ease-in-out",
  height: "fit-content",
  width: "240px",
  overflow: "hidden",

  "&.button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: `.25s linear ${showButton}`,
    "& > button": {
      opacity: "100%",
      transition: "opacity 10s ease",
    },
  },

  "&.button:hover": {
    transform: "translate(-4px,-4px)",
    boxShadow: "$default",
  },

  "&.button:active": {
    transform: "translate(-2px, -2px)",
    boxShadow: "$active",
  },

  "&.form": {
    animation: `.25s linear ${showForm}`,
  },
})

export const Form = styled("form", {
  flexDirection: "column",
  display: "flex",
  overflow: 'hidden',
  height: 'fit-content',
  boxSizing: "border-box",
  borderRadius: "$1",
  gap: "$2",
 });

export const InputContainer = styled("div", {
  flexDirection: "row",
  height: "32px",
  display: "flex",
  padding: '$4 $16', 
  alignItems: "center",
  borderBottom: '3px solid $black'
});

export const ButtonRow = styled("div", {
  flexDirection: "row",
  display: "flex",
  padding: '$8', 
  justifyContent: "space-between",
});
