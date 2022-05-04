import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      black85: "#262626",
      black50: "#666666",
      black25: "#808080",
      offWhite: "#F5F1EF",
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
  },
});
