import React from "react";
import { Color, Container } from "./ColorPicker.styles";

const ColorPicker = ({tagId, setColor }) => {
  const colors = [
    "$yellow",
    "$orange",
    "$red",
    "$purple",
    "$blue",
    "$green",
    "$white",
  ];

  const handlePick = (color) =>{
      setColor(color);
  }

  return (
    <Container>
      {colors.map((color, i) => {
        return <Color
            key={`${tagId}-c${i}`}
          css={{ backgroundColor: color }}
          onClick={() => handlePick(color)}
        />;
      })}
    </Container>
  );
};

export default ColorPicker;
