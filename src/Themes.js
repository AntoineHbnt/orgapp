import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
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
});
