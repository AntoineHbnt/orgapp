import { styled } from "../../../../Themes";

const StyledSvg = styled("svg", {
  width: "8px",
  height: "8px",
});

export const UncheckedIcon = ({css}) => {
  return (
    <StyledSvg css={css}>
      <path
        d="M7.05005 1.31995V7.31995H1.05005V1.31995H7.05005ZM8.05005 0.319946H0.0500488V8.31995H8.05005V0.319946Z"
        fill="black"
      />
    </StyledSvg>
  );
};
