import { styled } from "../../../../Themes";

const StyledSvg = styled("svg", {
  width: "8px",
  height: "8px",
});

export const CheckedIcon = ({css}) => {
  return (
    <StyledSvg css={css}>
      <path
        d="M7 1.31995V7.31995H1V1.31995H7ZM8 0.319946H0V8.31995H8V0.319946Z"
        fill="black"
      />
      <path
        d="M6.44995 3.11002L2.86995 6.68002L1.44995 5.27002L2.15995 4.56002L2.86995 5.27002L5.73995 2.40002L6.44995 3.11002Z"
        fill="black"
      />
    </StyledSvg>
  );
};
