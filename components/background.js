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

  console.log(circlePosition.line, circlePosition.bounce);
  return <BackgroundStyled $circlePosition={circlePosition} />;
}

const BackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: background 2s;
  background: ${({ theme, $circlePosition }) =>
      `radial-gradient(circle at ${$circlePosition.bounce}% ${$circlePosition.line}%, ${theme.bgColorSecondary} 10%, transparent 50%)`},
    ${({ theme, $circlePosition }) =>
      `radial-gradient(circle at 130% ${110 - $circlePosition.line}%, ${
        theme.accentColorPrimary
      } 10%, transparent 30%)`},
    /* url("data:image/svg+xml, %3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='6' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1' /%3E%3C/svg%3E"), */
      ${({ theme }) => theme.bgColorPrimary};

  @media screen and (orientation: landscape) {
    background: ${({ theme, $circlePosition }) =>
        `radial-gradient(circle at ${$circlePosition.line}% ${$circlePosition.bounce}%, ${theme.bgColorSecondary} 10%, transparent 30%)`},
      ${({ theme, $circlePosition }) =>
        `radial-gradient(circle at ${110 - $circlePosition.line}% 130%, ${
          theme.accentColorPrimary
        } 10%, transparent 40%)`},
      /* url("data:image/svg+xml, %3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='6' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1' /%3E%3C/svg%3E"), */
        ${({ theme }) => theme.bgColorPrimary};
  }
`;
