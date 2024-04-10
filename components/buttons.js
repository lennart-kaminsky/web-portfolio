import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { buttonAnimations, fontSizes } from "@/styles/stylesConfig";
import { darkTheme, lightTheme } from "@/styles/globalsstyles";
import { useLocalStorageStore } from "@/stores";
import Icon from "@/components/icons";

export function ButtonDarkMode({ size = fontSizes.l }) {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useLocalStorageStore();

  return (
    <ButtonDarkModeStyled
      type="button"
      onClick={() => toggleDarkMode()}
      $darkMode={darkMode}
      variants={buttonAnimations}
      whileHover="hover"
      whileTap="tap"
    >
      <Icon
        variant={darkMode ? "lightMode" : "darkMode"}
        size={size}
        color={theme.fontColorPrimary}
      />
    </ButtonDarkModeStyled>
  );
}

const ButtonDarkModeStyled = styled(motion.button)`
  all: unset;
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      svg,
      svg:hover {
        fill: ${({ $darkMode }) =>
          $darkMode
            ? lightTheme.accentColorPrimary
            : darkTheme.accentColorPrimary};
      }
    }
  }
`;
