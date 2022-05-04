import { StyledSvg } from "./IconManager";

export const AddCrossIcon = ({type}) => {
  return (
    <StyledSvg type={type}>
      <path d="M4.75 0H3.25V8H4.75V0Z" />
      <path d="M8 4.75V3.25L0 3.25V4.75H8Z" />
    </StyledSvg>
  );
};
