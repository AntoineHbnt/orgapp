import { styled } from "../../../../Themes";

export const Container = styled("div", {
  width: "100%",
  height: "32px",
  border: "3px solid $black",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 $8 ",
});

export const RowButton = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    gap: '0',
    alignItems: 'center'
})

export const Label = styled("label", {
  fontSize: "$14",
  fontWeight: 700,
});

export const FileInput = styled("input", {
  display: "none",
});
