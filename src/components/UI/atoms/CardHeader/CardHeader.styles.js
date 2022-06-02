import { styled } from "../../../../Themes";

export const Container = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    border: '3px solid #000'
})

export const Content = styled("div", {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
    padding: '$6',
    boxSizing: 'border-box',
})

export const Buttons = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    gap: '$4'
})