import { styled } from "../../../../Themes";

export const TagItem = styled("div", {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    border: "3px solid #000",
    fontWeight: "700",
    fontSize: "$12",
  
    "&:not(:first-child)": {
      marginTop: "-3px",
    },
  });

  export const Row = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "$4",
  });

  export const ButtonRow = styled("div", {
    display: 'flex',
    flexDirection: 'row',
  })

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