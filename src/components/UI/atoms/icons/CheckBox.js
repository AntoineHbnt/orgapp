import { styled } from "../../../../Themes";

const StyledSvg = styled("svg", {
  width: "8.5px",
  height: "8.5px",
});

export const CheckBoxIcon = () => {
  return (
    <StyledSvg>
      <path
        d="M0.666667 1.16667C0.1 1.73333 0 2.26667 0 4.5C0 6.73333 0.1 7.26667 0.666667 7.83333C1.23333 8.4 1.76667 8.5 4 8.5C7.63333 8.5 8 8.13333 8 4.5C8 2.26667 7.9 1.73333 7.33333 1.16667C6.76667 0.6 6.23333 0.5 4 0.5C1.76667 0.5 1.23333 0.6 0.666667 1.16667ZM6.93333 1.56667C7.46667 2.1 7.46667 6.9 6.93333 7.43333C6.7 7.66667 5.53333 7.83333 4 7.83333C2.46667 7.83333 1.3 7.66667 1.06667 7.43333C0.533333 6.9 0.533333 2.1 1.06667 1.56667C1.6 1.03333 6.4 1.03333 6.93333 1.56667Z"
        fill="#808080"
      />
      <path
        d="M4.43331 4.23333C3.56665 5.1 3.29998 5.2 2.86665 4.86667C2.13331 4.23333 1.93331 5 2.66665 5.66667C3.33331 6.26667 3.39998 6.26667 4.66665 5C5.93331 3.73333 6.29998 3.16667 5.73331 3.16667C5.59998 3.16667 4.99998 3.63333 4.43331 4.23333Z"
        fill="#808080"
      />
    </StyledSvg>
  );
};