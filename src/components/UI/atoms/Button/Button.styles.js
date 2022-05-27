import { styled } from "../../../../Themes";

 

export const StyledButton = styled("button", {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.375rem",
  display: "flex",
  borderRadius: "$1",
  boxSizing: "border-box",
  width: "fit-content",
  height: "fit-content",
  padding: "12px 18px",
  backgroundColor: "$secondary",
  cursor: 'pointer',
  color: "$primary",
  border: '0px',

  "& > svg": {
    fill: "$primary",
  },

  variants: {
    style: {
      secondary: {
        backgroundColor: "$primary",
        color: "$secondary",
        "& > svg": {
          fill: "$secondary",
        },
      },
      tertiary: {
        outline: "3px solid $primary",
        outlineOffset: "-3px",
        "& > svg": {
          fill: "$primary",
        },
      },
    },
  },
});

export const StyledLabel = styled("span", {
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "$6",
  lineHeight: "$6",
});

