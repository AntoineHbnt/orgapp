import { styled } from "../../../../Themes";

export const Container = styled("div", {
    position: 'absolute',
    zIndex: '999',
    bottom: '-$8',
    right: '0',
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    boxShadow: '$default',
    border: '3px solid #000',
    width: 'fit-content',
    height: 'min-content',
    padding: 'calc($4 - 3px) calc($8 - 3px)',
    backgroundColor: '$white',
    boxSizing: 'border-box',
    gap: '4px',
})

export const StyledSpan = styled("span", {
    fontSize: '$12',
    fontWeight: '700',
    lineHeight: '$14',
    color: '$black'
})