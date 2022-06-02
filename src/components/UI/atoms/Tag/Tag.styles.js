import { styled } from "../../../../Themes";

export const Container = styled("div",{
    minWidth: '$32',
    height: '$18',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: '700',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    border: '3px solid #000',
    marginBottom: '-3px',
    zIndex: '0',
    padding: '0 $4',

    "&:not(:first-child)": {
        marginLeft: '-3px'
      }
})