import { styled } from "../../../../Themes";

export const Card = styled("div", {
    flexDirection: 'column',
    display: 'flex',
    borderRadius: '$1',
    width: '240px',
    backgroundColor: '$secondary',
})

export const CardContent = styled("div", {
    flexDirection: 'column',
    display: 'flex',
    padding: '$2',
})

export const CardLabel = styled("label", {
    fontSize: '$5',
})

export const TagRow = styled("div", {
    display: 'flex',
    width: '100%',
    gap:'4px',
    marginBottom: '4px',
})

export const PictureContainer = styled("img", {
    width: '100%',
    height: '160px',
    backgroundColor: '$black25',
    borderRadius: '$1 $1 0px 0px'
})