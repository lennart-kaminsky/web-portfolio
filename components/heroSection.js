import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { motion } from "framer-motion";
import { breakpoints, fontSizes } from "@/styles/stylesConfig";
import Icon from "@/components/icons";

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

  console.log(startOfLine);
  return (
    <HeroSectionStyled>
      <PhotoWrapper $startOfLine={startOfLine}>
        <IconLinksStyled>
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              alt={link.name}
              target="_blank"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.8 }}
            >
              <Icon
                variant={link.icon}
                size="2.5rem"
                color={theme.accentColorPrimary}
              />
            </motion.a>
          ))}
        </IconLinksStyled>
        <PhotoStyled
          src="/images/portrait400px.png"
          alt="Lennart Kaminsky"
          width={400}
          height={520}
          priority
        />
      </PhotoWrapper>

      {(startOfLine.name > 0 ||
        startOfLine.hej > 0 ||
        startOfLine.text > 0) && <LineStyled $startOfLine={startOfLine} />}
      <Wrapper ref={textRef}>
        <HeroTextStyled>
          <span ref={hejRef}>Hej and welcome! I{"'"}m</span>
        </HeroTextStyled>

        <HeadlineStyled>
          <span>
            <span ref={nameRef}>LENNART</span>
          </span>
          <span>KAMINSKY</span>
        </HeadlineStyled>
        <HeroTextStyled>Junior Frontend Developer from Germany.</HeroTextStyled>
        <ScrollDownIconStyled
          variant="arrowDown"
          size={fontSizes.xl}
          color={theme.fontColorPrimary}
        />
      </Wrapper>
    </HeroSectionStyled>
  );
}

const HeroSectionStyled = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (orientation: landscape) and (min-width: ${breakpoints.s}) {
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhotoWrapper = styled(Wrapper)`
  @media screen and (orientation: landscape) and (min-width: ${breakpoints.s}) {
    position: absolute;
    bottom: ${({ $startOfLine }) => `${$startOfLine.textHeight - 20}px`};
    width: 100%;
  }
`;

const IconLinksStyled = styled.div`
  align-self: flex-end;
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
  width: 52%;
  min-width: 200px;
  height: auto;
  align-self: flex-end;
`;

const HeadlineStyled = styled.h1`
  font-family: var(--fontHeadline);
  font-size: var(--fontSizeXL);
  color: ${({ theme }) => theme.accentColorPrimary};
  display: flex;
  flex-direction: column;
  line-height: 3.4rem;
  @media screen and (min-width: ${breakpoints.s}) {
    font-size: var(--fontSizeXXL);
    line-height: 5rem;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    font-size: var(--fontSizeXXL);
    line-height: 5rem;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    font-size: var(--fontSizeXXXL);
    line-height: 7rem;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: var(--fontSizeXXXXL);
    line-height: 9rem;
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

const LineStyled = styled.div`
  width: 0.5rem;
  height: 100%;
  max-height: 250px;
  margin-block: -2rem -3.5rem;
  margin-left: ${({ $startOfLine }) => `${$startOfLine.name + 20}px`};
  background-color: ${({ theme }) => theme.accentColorPrimary};
  @media screen and (orientation: landscape) and (min-width: ${breakpoints.s}) {
    height: 0.5rem;
    max-height: none;
    width: 100%;
    margin-inline: ${({ $startOfLine }) =>
      `-${$startOfLine.textWidth - $startOfLine.hej - 10}px 40px`};
    margin-block: ${({ $startOfLine }) =>
      `0 ${$startOfLine.textHeight - 15}px`};
    z-index: 1;
  }
`;

const ScrollDownIconStyled = styled(Icon)`
  align-self: flex-end;
  @media screen and (min-width: ${breakpoints.s}) {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    bottom: var(--fontSizeL);
    right: var(--fontSizeL);
  }
  @media screen and (min-width: ${breakpoints.l}) {
    bottom: var(--fontSizeXL);
    right: var(--fontSizeXL);
  }
`;
