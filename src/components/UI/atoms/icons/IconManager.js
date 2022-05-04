import { styled } from "../../../../Themes";
import { AddCrossIcon } from "./AddCross";
import { DotMenuIcon } from "./DotMenu";
import { ShareIcon } from "./Share";

export const StyledSvg = styled("svg", {
  width: "0.5rem",
  height: "0.5rem",
  fill: "$primary",
  variants: {
    type: {
      secondary: {
        fill: "$secondary",
      },
    },
  },
});

export const getIcon = (icon, type) => {
  switch(icon){
    case "share": 
      return (<ShareIcon type={type}/>);
    case "dotMenu":
      return (<DotMenuIcon type={type}/>);
    case "addCross":
      return (<AddCrossIcon type={type}/>);
  }
}