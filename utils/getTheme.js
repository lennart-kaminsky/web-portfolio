import { darkTheme, lightTheme } from "@/styles/globalsstyles";

export default function getTheme(colorTheme) {
  if (colorTheme === "darkTheme") {
    return darkTheme;
  } else {
    return lightTheme;
  }
}
