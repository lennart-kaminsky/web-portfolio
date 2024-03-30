import { createGlobalStyle } from "styled-components";
import { Poppins, Rubik } from "next/font/google";

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
  fontColorPrimary: "#F2EBD8",
  accentColorPrimary: "#E12106",
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
    --fontSizeXS: 0.9rem;
    --fontSizeS: 1rem;
    --fontSizeM: 1.4rem;
    --fontSizeL: 2rem;
    --fontSizeXL: 3.8rem;
    --fontSizeXXL: 6rem;
    --fontSizeXXXL: 7rem;
}

/* html , body , main {
    height: 100%;
} */

body {
    font-family: var(--fontRegular);
    background-color: ${({ theme }) => theme.bgColorPrimary};
    color: ${({ theme }) => theme.fontColorPrimary};
    transition: background-color 2s, color 2s;
}

section {
  padding: 3%;
}

svg {
  transition: fill 0.5s;
}

a {
text-decoration: none;
color: inherit;
}
`;
