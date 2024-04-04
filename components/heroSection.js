import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import {
  breakpoints,
  buttonAnimations,
  fontSizes,
} from "@/styles/stylesConfig";
import Icon from "@/components/icons";
import { ButtonDarkMode } from "@/components/buttons";
import { HeadlineStyled } from "@/styles/styled";

const links = [
  {
    name: "GitHub",
    href: "https://github.com/lennart-kaminsky",
    icon: "gitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lennart-kaminsky/",
    icon: "linkedIn",
  },
  {
    name: "Mail",
    href: "/",
    icon: "mail",
  },
];

export default function HeroSection() {
  const [startOfLine, setStartOfLine] = useState({
    name: 0,
    hej: 0,
    textWidth: 0,
    textHeight: 0,
  });
  const nameRef = useRef(null);
  const hejRef = useRef(null);
  const textRef = useRef(null);
  const theme = useTheme();

  const isClient = typeof window === "object";

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handlePositionOfLine() {
      setStartOfLine({
        ...startOfLine,
        name: nameRef.current.offsetWidth,
        hej: hejRef.current.offsetWidth,
        textWidth: textRef.current.offsetWidth,
        textHeight: textRef.current.offsetHeight,
      });
    }
    if (nameRef.current) {
      handlePositionOfLine();
    }

    window.addEventListener("resize", handlePositionOfLine);

    return () => {
      window.removeEventListener("resize", handlePositionOfLine);
    };
  }, [nameRef, hejRef, textRef, isClient]);

  return (
    <HeroSectionStyled>
      <PhotoWrapper
        $startOfLine={startOfLine}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1.3,
          ease: "easeOut",
          type: "spring",
        }}
      >
        <IconLinksStyled>
          <ButtonDarkMode />
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              alt={link.name}
              target="_blank"
              variants={buttonAnimations}
              whileHover="hover"
              whileTap="tap"
            >
              <Icon
                variant={link.icon}
                size={fontSizes.l}
                color={theme.accentColorPrimary}
              />
            </motion.a>
          ))}
        </IconLinksStyled>
        <PhotoStyled
          src="/images/portrait.png"
          alt="Lennart Kaminsky"
          width={1000}
          height={1300}
          priority
        />
      </PhotoWrapper>

      {(startOfLine.name > 0 ||
        startOfLine.hej > 0 ||
        startOfLine.text > 0) && (
        <LineStyled
          $startOfLine={startOfLine}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1,
            duration: 1.3,
            ease: "easeOut",
            type: "spring",
          }}
        />
      )}
      <Wrapper
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
      >
        <HeroTextStyled>
          <span ref={hejRef}>Hej and welcome! I{"'"}m</span>
        </HeroTextStyled>
        <HeroHeadlineStyled>
          <span>
            <span ref={nameRef}>LENNART</span>
          </span>
          <span>KAMINSKY</span>
        </HeroHeadlineStyled>
        <HeroTextStyled>Junior Frontend Developer from Germany.</HeroTextStyled>
        <ScrollDownIconStyled
          variant="arrowDown"
          size={fontSizes.xl}
          color={theme.fontColorPrimary}
          initial={{ opacity: 0, y: -50, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: [0, 5, 0, -5, 0] }}
          transition={{
            delay: 2,
            type: "spring",
            rotate: { delay: 2.6, repeat: 3, duration: 0.2 },
          }}
        />
      </Wrapper>
    </HeroSectionStyled>
  );
}

const HeroSectionStyled = styled.section`
  //for weird auto scroll on chrome mobile on page load
  overflow-anchor: none;
  padding-bottom: 13%;

  height: 93vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(50px, 200px) auto;
  align-items: end;
  @media screen and (orientation: landscape) {
    height: auto;
    min-height: 100vh;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 3%;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  @media screen and (orientation: landscape) {
    grid-column: 1;
  }
`;

const PhotoWrapper = styled(Wrapper)`
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  @media screen and (orientation: landscape) {
    grid-column: span 2;
    justify-content: flex-end;
    margin-bottom: -2rem;
  }
`;

const IconLinksStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    @media (hover: hover) {
      &:hover {
        fill: ${({ theme }) => theme.fontColorPrimary};
      }
    }
  }
`;

const PhotoStyled = styled(Image)`
  width: 50%;
  height: auto;
  @media screen and (orientation: landscape) {
    height: auto;
    width: 30%;
    max-width: 400px;
  }
`;

const HeroHeadlineStyled = styled(HeadlineStyled)`
  color: ${({ theme }) => theme.accentColorPrimary};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.s}) and (min-height: 800px) {
    font-size: var(--fontSizeXXL);
    line-height: 5rem;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    font-size: var(--fontSizeXXL);
    line-height: 5rem;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: var(--fontSizeXXXL);
    line-height: 6rem;
  }
`;

const HeroTextStyled = styled.p`
  font-size: var(--fontSizeM);
  line-height: 1.7rem;
  max-width: 350px;
  @media screen and (min-width: ${breakpoints.s}) {
    max-width: none;
    min-width: 470px;
  }
`;

const LineStyled = styled(motion.div)`
  width: 0.5rem;
  height: calc(100% + 6rem);
  margin-block: -3.5rem;
  margin-left: ${({ $startOfLine }) => `${$startOfLine.name + 20}px`};
  background-color: ${({ theme }) => theme.accentColorPrimary};
  transform-origin: bottom;
  z-index: 1;
  @media screen and (orientation: landscape) {
    grid-row: 2;
    grid-column: 2;
    height: 0.5rem;
    width: 140%;
    margin-inline: ${({ $startOfLine }) =>
      `-${$startOfLine.textWidth - $startOfLine.hej - 10}px 40px`};
    margin-block: ${({ $startOfLine }) =>
      `0 ${$startOfLine.textHeight - 17}px`};
    transform-origin: left;
  }
`;

const ScrollDownIconStyled = styled(Icon)`
  position: absolute;
  bottom: 3vw;
  right: 3vw;
  @media screen and (orientation: landscape) and (min-width: ${breakpoints.xl}) {
    right: 8vw;
  }
`;
