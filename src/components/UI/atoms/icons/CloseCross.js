import { styled } from "../../../../Themes";

const StyledSvg = styled("svg", {
  width: "8px",
  height: "8px",
});

export const CloseCrossIcon = () => {
  return (
    <StyledSvg>
      <path
        d="M3.89 3.18L6.37 5.66L5.66 6.36L3.19 3.89L0.71 6.36L0 5.66L2.48 3.18L0 0.71L0.71 0L3.19 2.48L5.66 0L6.37 0.71L3.89 3.18Z"
        fill="black"
      />
    </StyledSvg>
  );
};
