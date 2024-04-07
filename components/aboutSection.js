import { useEffect, useRef } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { HeadlineStyled, SecondHeadlineStyled } from "@/styles/styled";
import { breakpoints, opacityAnimations } from "@/styles/stylesConfig";
import { aboutParagraphs, techStack } from "@/lib/data";
import Icon from "@/components/icons";

export default function AboutSection() {
  const techStackListRef = useRef(null);

  const teckStackInView = useInView(techStackListRef, {
    once: true,
    amount: 0.2,
  });

  const techListItemControls = useAnimationControls();

  useEffect(() => {
    if (teckStackInView) {
      techListItemControls.start((custom) => ({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, delay: custom * 0.2 },
      }));
    }
  }, [teckStackInView]);

  return (
    <AboutSectionStyled>
      <ImageStyled
        src="/images/bikepacking.jpg"
        alt="Photo of Lennart on a bikepacking trip"
        width={6000}
        height={4000}
        variants={opacityAnimations}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      />
      <AboutMeHeadline
        variants={opacityAnimations}
        initial="initial"
        whileInView="whileInView"
      >
        About Me
      </AboutMeHeadline>

      <AboutTextContainer>
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index}>
            <LineStyled
              $toLeft={index + 1}
              initial={{ scaleX: 0 }}
              whileInView={{
                scaleX: 1,
                transition: { duration: 0.8, ease: "backOut", delay: 0.1 },
              }}
              viewport={{ once: true }}
            />
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.3, delay: 0.8 },
              }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.span>
          </p>
        ))}
      </AboutTextContainer>
      <TechStackContainer>
        <SecondHeadlineStyled
          variants={opacityAnimations}
          initial="initial"
          whileInView="whileInView"
        >
          My Tech-Stack / Skills
        </SecondHeadlineStyled>
        <ul ref={techStackListRef}>
          {techStack.map((tech, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={techListItemControls}
              custom={index}
            >
              <a href={tech.href} target="_blank">
                <Icon variant={tech.variant} size="3rem" />
                <span>{tech.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </TechStackContainer>
    </AboutSectionStyled>
  );
}

const AboutSectionStyled = styled.section`
  display: grid;
  gap: 2rem;

  @media screen and (min-width: ${breakpoints.xl}) {
    grid-template-columns: 2fr 1fr;
  }
`;

const AboutMeHeadline = styled(HeadlineStyled)`
  color: ${({ theme }) => theme.accentColorPrimary};
  margin-top: -4rem;
  @media screen and (min-width: ${breakpoints.s}) {
    margin-top: -6rem;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    margin-top: -8rem;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    margin-top: 0;
    margin-bottom: -4rem;
    grid-row: 1;
    grid-column: 1 / span 2;
  }
`;

const ImageStyled = styled(motion(Image))`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media screen and (min-width: ${breakpoints.s}) {
    width: 70%;
    justify-self: end;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    width: 100%;
    justify-self: start;
  }
`;

const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: ${breakpoints.s};
  margin-top: -1rem;
  @media screen and (min-width: ${breakpoints.s}) {
    margin-top: -2rem;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    margin-top: 0;
    gap: 2rem;
    justify-content: end;
  }
`;

const LineStyled = styled(motion.span)`
  display: inline-block;
  height: 0.3rem;
  min-width: ${({ $toLeft }) => $toLeft && `${$toLeft * 10}%`};
  background-color: ${({ theme }) => theme.accentColorPrimary};
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
  transform-origin: left;
  @media screen and (min-width: ${breakpoints.xl}) {
    ${({ $toLeft }) =>
      $toLeft &&
      css`
        min-width: calc(25% + ${$toLeft * 10}%);
        margin-left: calc(${-$toLeft * 10 * 1.5}%);
      `}
  }
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 1rem;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    gap: 1.5rem;
  }
  li {
    display: flex;
    justify-content: center;
    height: 5rem;
    width: 6rem;
  }
  a {
    font-size: var(--fontSizeXS);
    color: ${({ theme }) => theme.accentColorPrimary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    transition: color 0.5s;
    @media (hover: hover) {
      &:hover {
        svg {
          fill: ${({ theme }) => theme.fontColorPrimary};
        }
        color: ${({ theme }) => theme.fontColorPrimary};
      }
    }
  }
  svg {
    fill: ${({ theme }) => theme.accentColorPrimary};
  }
  @media screen and (min-width: ${breakpoints.s}) {
    li {
      width: 8rem;
    }
    ul {
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  }
  @media screen and (min-width: ${breakpoints.m}) {
    gap: 3rem;
    padding-top: 2rem;
    ul {
      grid-template-columns: repeat(5, 1fr);
      row-gap: 3rem;
    }
    li {
      width: 10rem;
    }
  }
  @media screen and (min-width: ${breakpoints.l}) {
    li {
      width: 12rem;
    }
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    grid-column: span 2;
    ul {
      row-gap: 4rem;
    }
    li {
      width: 16rem;
    }
  }
`;
