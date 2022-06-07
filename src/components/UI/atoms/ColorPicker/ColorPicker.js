import React from "react";
import { Color, Container } from "./ColorPicker.styles";

const ColorPicker = ({ setColor, css }) => {
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
    <Container css={css}>
      {colors.map((color, i) => {
        return <Color
            key={`c${i}`}
          css={{ backgroundColor: color }}
          onClick={() => handlePick(color)}
        />;
      })}
    </Container>
  );
};

export default ColorPicker;
