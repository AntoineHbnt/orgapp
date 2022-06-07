import { styled } from "../../../../Themes";

export const Container = styled("div", {
  position: "absolute",
  display: "flex",
  padding: "$16",
  flexDirection: "column",
  top: "calc(100% + 3px)",
  left: "-3px",
  zIndex: 999,
  gap: '$8',
  width: "calc(100% + 6px)",
  height: "fit-content",
  background: "$white",
  marginTop: "-3px",
  boxSizing: "border-box",
  border: "3px solid $black",
});

export const Element = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const Title = styled("span", {
  fontSize: "$16",
  fontWeight: "700",
  lineHeight: "$18",
});

export const ColorPreview = styled("div", {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems:'center',
  width: '100%',
  height: '34px',
  border: '3px solid #000',
  boxSizing: 'border-box',
  marginBottom: '-3px'
});
