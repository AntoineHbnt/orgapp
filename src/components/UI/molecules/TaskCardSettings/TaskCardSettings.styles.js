import { keyframes } from "@stitches/react";
import { styled } from "../../../../Themes";

export const Container = styled("div", {
    flexDirection: 'column',
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    boxSizing: 'border-box',
    border: '3px solid #000',
    marginTop: '-3px',
    backgroundColor: '$white',
    padding: '$4'
})

export const Title = styled("span", {
    fontSize: '$14',
    fontWeight: '700',
    lineHeight: '$18',
})