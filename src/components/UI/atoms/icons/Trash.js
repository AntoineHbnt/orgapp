import React from "react";
import { styled } from "../../../../Themes";

const StyledSvg = styled("svg", {
  aspectRatio: "1/1",
  width: "8px",
});

const TrashIcon = ({css}) => {

  return (
    <StyledSvg className="trashIcon" css={css}>
      <path
        className="trash"
        d="M0 1.5V3H0.5V8H6.5V3H7V1.5H0ZM3 7H2V2.5H3V7ZM5 7H4V2.5H5V7Z"
        fill="black"
      />
      <path className="lid" d="M6 0H1V1H6V0Z" fill="black" />
    </StyledSvg>
  );
};

export default TrashIcon;
