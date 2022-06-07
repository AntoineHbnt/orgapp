import { styled } from "../../../../Themes";

export const Container = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '3px solid $black'
})

export const Color = styled("button", {
    height: '$16',
    width:'$32',
    flex: '1',
    border: '0',
    "&:not(:first-child)": {
        borderLeft: '3px solid $black'
    }
})

