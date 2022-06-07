import { styled } from "../../../../Themes";

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const Container = styled("div", {
  width: "240px",
  height: "calc(12px + 12px + var(--lineHeights-6))",
  position: 'relative',
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",
  padding: "12px 18px",
  border: "3px solid $black",
  borderRadius: "$1",
  transition: '.1s all ease',
  variants: {
    disabled: {
      true: {
        opacity: "50%",
      },
    },
    valid: {
      true: {
        borderColor: "$validate",
        color: "$validate",
        "& svg": {
          fill: "$validate",
        },
      },
    },
    error: {
      true: {
        borderColor: "$error",
        color: "$error",
        "& svg": {
          fill: "$error",
        },
      },
    },
  },
});

export const StyledInput = styled("input", {
  width: 'calc(100% - 24px)',
  outline: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  padding: '0',
  fontFamily: '$glory',
  fontWeight: "300",
  fontSize: "$6",
  lineHeight: "$6",
});

export const StyledError = styled("span", {
  fontWeight: "300",
  fontSize: "$6",
  lineHeight: "$6",
  color: "$error",
  paddingLeft: "12px",
});


export const Icon = styled("div", {
  position: 'absolute',
  right: '1rem'
})