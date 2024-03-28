import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { fontSizes } from "@/styles/stylesConfig";
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
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.9 }}
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
