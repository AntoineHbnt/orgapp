import { styled } from "../../../../Themes";

export const Container = styled("div", {
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  padding: "$2",
  gap: "$3",
  width: "240px",
  height: "fit-content",
  backgroundColor: "$black60",
  borderRadius: "$1",
});

export const Header = styled("div", {
  display: "flex",
  alignItems: 'center',
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
});

export const Footer = styled("div", {
    width: '100%'
})

export const Button = styled("button", {
    display: 'flex',
    gap: '$1',
    borderRadius: '$2',
    alignItems: 'center',
    padding: '$1',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: ".1s ease-in",
    '& > svg': {
        fill: '$secondary',
    },
    '&:hover': {
        backgroundColor: '$black65',
    },
    '&:active': {
        backgroundColor: '$black70'
    }
})

export const ButtonLabel = styled("span", {
    fontWeight: '300',
    fontSize: '$6',
    lineHeight: '$5',
    color: '$secondary'
})

export const List = styled("div", {
    flexDirection: 'column',
    display: 'flex',
    gap: '$2'
})