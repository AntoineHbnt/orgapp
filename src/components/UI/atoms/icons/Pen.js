import React from "react";
import { styled } from "../../../../Themes";

const StyledSvg = styled("svg", {
  aspectRatio: "1/1",
  width: "8px",
});

const PenIcon = () => {
  return (
    <StyledSvg>
      <path d="M8 6.54669H0V8.00003H8V6.54669Z" fill="black" />
      <path
        d="M6.54677 0L7.4801 1.02667L3.7201 5.12H2.77344V4.09333L6.54677 0Z"
        fill="#000"
      />
    </StyledSvg>
  );
};

export default PenIcon;
