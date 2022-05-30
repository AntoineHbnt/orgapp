import { keyframes } from "@stitches/react";
import { styled } from "../../../../Themes";

export const showForm = keyframes({
  "0%": {
    width: "112px",
    height: "22px",
  },
  "30%": {
    width: "100%",
  },
  "100%": {
    height: "96px",
  },
});

const showButton = keyframes({
  "0%": {
    width: "100%",
    height: "96px",
  },
  "30%": {
    height: "22px",
  },
  "100%": {
    width: "114px",
  },
});

export const Container = styled("div", {
  border: "3px solid #000",
  boxSizing: "border-box",
  transitionDelay: "100ms",
  transition: "all .1s ease-in-out",
  height: "fit-content",
  width: "100%",
  overflow: "hidden",

  "&.button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "fit-content",
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
});

export const Form = styled("form", {
  flexDirection: "column",
  display: "flex",
  width: "100%",
  gap: "$8",
});

export const TextContainer = styled("div", {
  borderRadius: "$1",
  backgroundColor: "$secondary",
  padding: "$8",
});

export const TextArea = styled("textarea", {
  maxWidth: "100%",
  minWidth: "100%",
  boxSizing: "border-box",
  fontSize: "$5",
  backgroundColor: "transparent",
  border: "none",
  "&:focus": {
    outline: "none",
  },
});

export const Row = styled("div", {
  flexDirection: "row",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 -3px -3px -3px",
});

export const ButtonLabel = styled("span", {
  fontWeight: "300",
  fontSize: "$6",
  lineHeight: "$5",
  color: "$secondary",
});
