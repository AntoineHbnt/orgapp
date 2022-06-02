import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      yellow: "#FFF500",
      orange: "#FFB443",
      red: "#FF5E5E",
      purple: "#DD7DFF",
      blue: "#39DBFF",
      green: "#00FF75",
      black: "#000",
      white: "#fff",
    },
    space: {
      4: "4px",
      6: "6px",
      8: "8px",
      12: "12px",
      16: "16px",
      32: "32px",
    },
    fontSizes: {
      64: "4rem",
      48: "3rem",
      18: "1.125rem",
      16: "1rem",
      14: "0.875rem",
      12: "0.75rem",
    },
    fonts: {
      glory: "Glory, sans-serif",
    },
    fontWeights: {},
    lineHeights: {
      64: "4rem",
      48: "3rem",
      18: "1.125rem",
      16: "1rem",
      14: "0.875rem",
      12: "0.75rem",
    },
    letterSpacings: {},
    sizes: {
      64: "4rem",
      48: "3rem",
      32: "2rem",
      18: "1.125rem",
      16: "1rem",
      14: "0.875rem",
      12: "0.75rem",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      8: "0.5rem",
      4: "0.25rem",
    },
    shadows: {
      default: "4px 4px 0px #000000",
      active: "2px 2px 0px #000000",
    },
    zIndices: {},
    transitions: {},
  },
});
