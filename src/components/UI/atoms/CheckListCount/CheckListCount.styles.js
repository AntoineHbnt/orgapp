import { styled } from "../../../../Themes";

export const Container = styled("div", {
    width: '$32',
    height: '$18',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.5rem',
    fontWeight: '700',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    border: '3px solid $black',
    marginBottom: '-3px',
})

export const StyledSpan = styled("span", {
    fontSize: '0.5rem',
    fontWeight: '700',
    color: '$black'
})