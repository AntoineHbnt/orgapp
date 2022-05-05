import { styled } from "../../../../Themes";

const StyledSvg = styled("svg", {
  width: "12px",
  height: "12px",
});

export const GoogleIcon = () => {
  return (
    <StyledSvg>
      <path d="M11.745 6.13501C11.7729 6.95411 11.6285 7.76995 11.321 8.52965C11.0135 9.28936 10.5498 9.97598 9.95996 10.545C8.87464 11.5186 7.45747 12.0393 5.99996 12C4.88862 11.9987 3.79947 11.6888 2.85395 11.1048C1.90842 10.5208 1.14368 9.68566 0.644962 8.6925C0.220846 7.85968 -0.000244141 6.93835 -0.000244141 6.00376C-0.000244141 5.06917 0.220846 4.14782 0.644962 3.315C1.14264 2.32044 1.90694 1.48377 2.85254 0.8984C3.79814 0.313026 4.88784 0.00198919 5.99996 4.34549e-06C7.4877 -0.0165431 8.9237 0.545482 10.005 1.5675L8.29496 3.2775C7.67798 2.68752 6.85352 2.3642 5.99996 2.3775C5.0522 2.399 4.15027 2.78965 3.48626 3.46627C2.82225 4.14289 2.44862 5.052 2.44496 6C2.44135 6.39041 2.50477 6.77855 2.63246 7.1475C2.80476 7.67329 3.09569 8.1524 3.48275 8.54777C3.86982 8.94314 4.34263 9.24419 4.86464 9.42761C5.38665 9.61104 5.94384 9.67194 6.49314 9.60559C7.04245 9.53925 7.56913 9.34744 8.03246 9.045C8.34148 8.84262 8.60687 8.58042 8.81297 8.27385C9.01906 7.96729 9.16169 7.62257 9.23246 7.26001H5.99996V5.01001H11.6325C11.7003 5.38136 11.7379 5.75759 11.745 6.13501V6.13501Z" />
    </StyledSvg>
  );
};