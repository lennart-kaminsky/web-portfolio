import { createGlobalStyle } from "styled-components";
import { Poppins, Rubik } from "next/font/google";
import { breakpoints } from "@/styles/stylesConfig";

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
  bgColorSecondary: "#BCB3E0",
  fontColorPrimary: "#0A0809",
  accentColorPrimary: "#E12106",
};

export const darkTheme = {
  title: "darkTheme",
  bgColorPrimary: "#11161D",
  bgColorSecondary: "#2A4030",
  fontColorPrimary: "#FAFAFA",
  accentColorPrimary: "#CA7D21",
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
    --fontSizeXXS: 0.6rem;
    --fontSizeXS: 0.9rem;
    --fontSizeS: 1rem;
    --fontSizeM: 1.4rem;
    --fontSizeL: 2rem;
    --fontSizeXL: 3.8rem;
    --fontSizeXXL: 6rem;
    --fontSizeXXXL: 7rem;
}

html {
  scroll-behavior: smooth;
}

body {
    font-family: var(--fontRegular);
    color: ${({ theme }) => theme.fontColorPrimary};
    transition: color 1s;
}

main {
  padding-bottom: 5rem;
}

section {
  padding: 3%;
  padding-block: 4rem;
  @media screen and (min-width: ${breakpoints.s}) {
    padding-block: 5rem;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    padding-block: 6rem;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    padding-block: 8rem;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    padding-block: 9rem;
    padding-inline: 6%;
  }
}

svg {
  transition: fill 0.5s;
}

a {
text-decoration: none;
color: inherit;
}

ul {
  list-style: none;
}
`;
