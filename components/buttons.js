import styled, { useTheme } from "styled-components";
import { motion, useAnimationControls } from "framer-motion";
import { fontSizes } from "@/styles/stylesConfig";
import { darkTheme, lightTheme } from "@/styles/globalsstyles";
import useSettingsStore from "@/stores/settingsStore";
import Icon from "@/components/icons";

export function ButtonDarkMode() {
  const theme = useTheme();
  const { darkMode, toggleDarkMode } = useSettingsStore();

  const slideCurtain = useAnimationControls();

  async function setDarkMode() {
    await slideCurtain.start({
      x: "0%",
      transition: { duration: 0.7, ease: "easeInOut" },
    });
    toggleDarkMode();
    slideCurtain.start({
      x: ["0%", "120%", "120%", "-120%", "-120%"],
      opacity: [1, 1, 0, 0, 1],
      transition: {
        delay: 0.2,
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.5, 0.7, 0.99, 1],
      },
    });
  }

  return (
    <>
      <ButtonDarkModeStyled
        type="button"
        onClick={() => setDarkMode()}
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
      <CurtainStyled
        initial={{ x: "-120%" }}
        animate={slideCurtain}
        $darkMode={darkMode}
      />
    </>
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

const CurtainStyled = styled(motion.div)`
  position: absolute;
  background: ${darkTheme.bgColorPrimary};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
`;
