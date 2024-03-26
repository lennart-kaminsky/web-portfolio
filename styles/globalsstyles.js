import { createGlobalStyle } from "styled-components";
import { Poppins, Rubik } from "next/font/google";
import { breakpoints } from "./stylesConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});

const rubikBold = Rubik({
  subsets: ["latin"],
  weight: "900",
  style: "normal",
});

//Colors Themes
export const lightTheme = {
  title: "lightTheme",
  bgColorPrimary: "#F2EBD8",
  fontColorPrimary: "#0A0809",
  accentColorPrimary: "#E12106",
};

export const darkTheme = {
  title: "darkTheme",
  bgColorPrimary: "#171A1C",
  fontColorPrimary: "#f9f9f9",
  accentColorPrimary: "#637368",
};

export default createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
    //Fonts
    --fontRegular: ${poppins.style.fontFamily};
    --fontBold: ${poppinsBold.style.fontFamily};
    --fontHeadline: ${rubikBold.style.fontFamily};

    //Fontsizes
    --fontSizeS: 1rem;
    --fontSizeM: 1.4rem;
    --fontSizeL: 2rem;
    --fontSizeXL: 3.8rem;
    --fontSizeXXL: 6rem;
    --fontSizeXXXL: 7.5rem;
    --fontSizeXXXXL: 10rem;
}

body {
    font-family: var(--fontRegular);
    background-color: ${({ theme }) => theme.bgColorPrimary};
    color: ${({ theme }) => theme.fontColorPrimary};
}

section {
  padding: var(--fontSizeS);
  @media screen and (min-width: ${breakpoints.m}) {
    padding: var(--fontSizeL);
  }
  @media screen and (min-width: ${breakpoints.l}) {
    padding: var(--fontSizeXL);
  }
}
`;
