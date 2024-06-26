import { useState } from "react";
import styled from "styled-components";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function Background() {
  const [circlePosition, setCirclePosition] = useState({ line: 0, bounce: 0 });

  const { scrollYProgress } = useScroll();

  const circleMotionValue = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useMotionValueEvent(circleMotionValue, "change", (latest) => {
    const rounded = Math.round(latest);

    function getBounceValue(value) {
      if (value < 50) {
        return value * 1;
      } else {
        return (100 - value) * 1;
      }
    }
    if (rounded !== circlePosition.line)
      setCirclePosition({ line: rounded, bounce: getBounceValue(rounded) });
  });

  return <BackgroundStyled $circlePosition={circlePosition} />;
}

const BackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  transition: background 1s;
  background: ${({ theme, $circlePosition }) =>
      `radial-gradient(circle at ${$circlePosition.bounce}% ${$circlePosition.line}%, ${theme.bgColorSecondary} 10%, transparent 50%)`},
    ${({ theme, $circlePosition }) =>
      `radial-gradient(circle at 130% ${110 - $circlePosition.line}%, ${
        theme.accentColorPrimary
      } 10%, transparent 30%)`},
    ${({ theme }) => theme.bgColorPrimary};

  @media screen and (orientation: landscape) {
    background: ${({ theme, $circlePosition }) =>
        `radial-gradient(circle at ${$circlePosition.line}% ${$circlePosition.bounce}%, ${theme.bgColorSecondary} 10%, transparent 30%)`},
      ${({ theme, $circlePosition }) =>
        `radial-gradient(circle at ${110 - $circlePosition.line}% 130%, ${
          theme.accentColorPrimary
        } 10%, transparent 40%)`},
      ${({ theme }) => theme.bgColorPrimary};
  }
`;
