import { createGlobalStyle } from "styled-components";
import { Monoton, Poppins, Rammetto_One } from "next/font/google";

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

const monoton = Monoton({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const rametto = Rammetto_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

//Colors Themes
export const lightTheme = {
  title: "lightTheme",
  bgColorPrimary: "#171A1C",
  fontColorPrimary: "#f9f9f9",
  accentColorPrimary: "#637368",
  accentColorPrimary: "#a0a698",
};

export const darkTheme = {
  title: "darkTheme",
  bgColorPrimary: "#171A1C",
  fontColorPrimary: "#f9f9f9",
  accentColorPrimary: "#637368",
  accentColorSecondary: "#a0a698",
};
export const darkTheme2 = {
  title: "darkTheme",
  bgColorPrimary: "#171A1C",
  fontColorPrimary: "#f9f9f9",
  accentColorPrimary: "#637368",
  accentColorSecondary: "#a0a698",
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
    --fontHeadline: ${rametto.style.fontFamily};
    /* --fontHeadline: ${poppinsBold.style.fontFamily}; */

    //Fontsizes
    --fontSizeS: 1rem;
    --fontSizeM: 1.5rem;
    --fontSizeL: 2rem;

    //Colors
    --bgColorDark: #171A1C;
    --fontColorLight: #f9f9f9;

}

body {
    font-family: var(--fontRegular);
    color: ${({ theme }) => theme.fontColorPrimary};
}
`;
