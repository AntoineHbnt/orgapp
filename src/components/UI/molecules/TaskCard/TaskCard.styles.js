import { keyframes } from "@stitches/react";
import { styled } from "../../../../Themes";

const showCard = keyframes({
  "0%": {
    height: "0px",
    opacity: "0",
    transform: "scale(0)",
  },
  "75%": {
    opacity: "50%",
  },
  "100%": {
    height: "32px",
    opacity: "100%",
    transform: "scale(1)",
  },
});

export const Row = styled("div", {
  display: 'flex',
  flexDirection: 'row',
  gap: '$4'
})

export const Card = styled("div", {
  flexDirection: "column",
  animation: `.25s ease ${showCard}`,
  display: "flex",
  width: "100%",
  transitionDelay: ".25s",
  transition: ".25s ease-in-out",
  boxSizing: "border-box",
  "&:hover": {
    transform: "translate(3px)",
  },
  "& *": {
    cursor: "pointer",
  },
});

export const CardOption = styled("div", {
  flexDirection: "row",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
  height: "fit-content",
  position: "relative",
});


export const TagRow = styled("div", {
  display: "flex",
  width: "100%",
  gap: "0",
});

export const PictureContainer = styled("img", {
  width: "100%",
  height: "160px",
  backgroundColor: "$black25",
  borderRadius: "$1 $1 0px 0px",
  marginBottom: "-18px",
  boxSizing: "border-box",
  border: "3px solid #000",
  clip: "cover",
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

export const cardModalStyle = {
  zIndex: "20",
  cursor: "default",
  "&:hover": { transform: "translate(0)" },
};

export const settingsButtonStyle = {
  aspectRatio: "1/1",
  display: "block",
  width: "fit-content",
  border: "0px",
  transition: "all .1s ease-in",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  "& > svg": {
    transform: 'scale(1.5)'
  }
};
