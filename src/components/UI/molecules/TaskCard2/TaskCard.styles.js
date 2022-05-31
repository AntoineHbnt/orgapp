import { keyframes } from "@stitches/react";
import { styled } from "../../../../Themes";

const showCard = keyframes({
  '0%':{
    height: '0px',
    opacity: '0',
    transform: 'scale(0)'
  },
  '75%':{
    opacity: '50%',
  },
  '100%':{
    height: '32px',
    opacity: '100%',
    transform: 'scale(1)'
  },

})

export const Card = styled("div", {
  flexDirection: "column",
  animation: `.25s ease ${showCard}`,
  display: "flex",
  width: "100%",
  transition: ".1s ease-in-out",
  boxSizing: "border-box",
  "&:hover": {
    backgroundColor: "$offWhiteHover",
  },
  "& *": {
    cursor: "pointer",
  },
});

export const CardContent = styled("div", {
  position: "relative",
  flexDirection: "column",
  display: "flex",
});

export const CardOption = styled("div", {
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'flex-end',
  height: 'fit-content',
  position: 'relative'
})

export const CardLabel = styled("label", {
  display: 'flex',
  alignItems: 'center',
  color: '$primary',
  height: '$32',
  boxSizing: 'border-box',
  fontSize: "$14",
  fontWeight: '700',
  padding: "6px",
  zIndex: '1',
  backgroundColor: '$white',
  border: '3px solid #000',
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
  marginBottom: '-17px',
  boxSizing: 'border-box',
  border: '3px solid #000',
  clip: 'cover',
});
