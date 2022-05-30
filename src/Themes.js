import { createStitches } from "@stitches/react";

/* export const { styled, css } = createStitches({
  theme: {
    colors: {
      black85: "#262626",
      black70: "#494949",
      black65: "#555555",
      black60: "#666666",
      black50: "#808080",
      black25: "#B5B5B5",
      offWhite: "#F5F1EF",
      offWhiteHover: "#E9E4E2",
      validate: "#1FAD66",
      error: "#E05252",
      primary: "$black85",
      secondary: "$offWhite",
      background: "$offWhite",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
    },
    fontSizes: {
      1: "4rem",
      2: "3rem",
      3: "1.125rem",
      4: "1rem",
      5: "0.875rem",
      6: "0.75rem",
    },
    fonts: {
      glory: "Glory, sans-serif",
    },
    fontWeights: {},
    lineHeights: {
      1: "4rem",
      2: "3rem",
      3: "1.125rem",
      4: "1rem",
      5: "0.875rem",
      6: "0.75rem",
    },
    letterSpacings: {},
    sizes: {
      1: "4rem",
      2: "3rem",
      3: "1.125rem",
      4: "1rem",
      5: "0.875rem",
      6: "0.75rem",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '0.5rem',
      2: '0.25rem'
    },
    shadows: {},
    zIndices: {},
    transitions: {
      
    },
  },
}); */

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
