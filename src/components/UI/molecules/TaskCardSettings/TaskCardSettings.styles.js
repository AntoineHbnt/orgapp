import { styled } from "../../../../Themes";

export const Container = styled("div", {
  flexDirection: "column",
  display: "flex",
  width: "100%",
  height: "fit-content",
  boxSizing: "border-box",
  marginTop: "-3px",
  backgroundColor: "$white",
});

export const CardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  border: "3px solid #000",
  marginTop: "-3px",
  padding: "$4",
});

export const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "$4",
});

export const Category = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export const CategoryItemsList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  margin: "0",
  padding: "0",
  gap: "$8",
});

export const CategoryItem = styled("li", {
  listStyle: "none",
});



export const Title = styled("span", {
  fontSize: "$16",
  fontWeight: "700",
  lineHeight: "$18",
});

export const settingsButtonStyle = {
  aspectRatio: "1/1",
  display: "block",
  width: "fit-content",
  border: "0px",
  transition: "all .1s ease-in",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
};
