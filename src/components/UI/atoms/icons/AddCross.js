import { styled } from "../../../../Themes";

const StyledSvg = styled("svg", {
  width: "8px",
  height: "8px",
});

export const AddCrossIcon = () => {
  return (
    <StyledSvg>
      <path d="M4.75 0H3.25V8H4.75V0Z" />
      <path d="M8 4.75V3.25L0 3.25V4.75H8Z" />
    </StyledSvg>
  );
};
