import { darkTheme, lightTheme } from "@/styles/globalsstyles";

export default function getTheme(colorTheme) {
  if (colorTheme === "lightTheme") {
    return lightTheme;
  } else {
    return darkTheme;
  }
}
