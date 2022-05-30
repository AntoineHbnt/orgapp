import { keyframes } from "@stitches/react";
import { styled } from "../../../../Themes";

const showList = keyframes({
  '0%':{
    width: '0px',
    opacity: '0',
    transform: 'scale(0)'
  },
  '75%':{
    opacity: '50%',
  },
  '100%':{
    width: '240px',
    opacity: '100%',
    transform: 'scale(1)'
  },
})

export const Container = styled("div", {
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "240px",
  height: "fit-content",
  backgroundColor: "$black60",
  boxSizing: "border-box",
  border: "3px solid #000",
  borderRadius: '$4',
  boxShadow: '$default',
  animation: `.25s ease ${showList}`
});

export const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "$1",
  padding: '$8 $16',
  boxSizing: 'border-box',
  borderBottom: "3px solid #000",
});

export const Footer = styled("div", {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: "100%",
  boxSizing: 'border-box',
  padding: '$8 $12'
});

export const Button = styled("button", {
  display: "flex",
  gap: "$1",
  borderRadius: "$2",
  alignItems: "center",
  padding: "$1",
  justifyContent: "center",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  transition: ".1s ease-in",
  "& > svg": {
    fill: "$secondary",
  },
  "&:hover": {
    backgroundColor: "$black65",
  },
  "&:active": {
    backgroundColor: "$black70",
  },
});

export const ButtonLabel = styled("span", {
  fontWeight: "300",
  fontSize: "$16",
  lineHeight: "$5",
  color: "$secondary",
});

export const List = styled("div", {
  flexDirection: "column",
  width: "100%",
  display: "flex",
  padding: "$12",
  boxSizing: "border-box",
  gap: "$8",
});
