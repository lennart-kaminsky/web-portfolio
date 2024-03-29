import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { buttonAnimations, fontSizes } from "@/styles/stylesConfig";
import { darkTheme, lightTheme } from "@/styles/globalsstyles";
import useSettingsStore from "@/stores/settingsStore";
import Icon from "@/components/icons";

export function ButtonDarkMode() {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useSettingsStore();

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
        size={fontSizes.l}
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
