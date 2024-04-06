import styled from "styled-components";
import Image from "next/image";
import { HeadlineStyled, SecondHeadlineStyled } from "@/styles/styled";
import { breakpoints, headlineAnimations } from "@/styles/stylesConfig";
import { aboutParagraphs, techStack } from "@/lib/data";
import Icon from "./icons";

export default function AboutSection() {
  return (
    <AboutSectionStyled>
      <ImageStyled
        src="/images/bikepacking.jpg"
        alt="Photo of Lennart on a bikepacking trip"
        width={6000}
        height={4000}
      />
      <AboutMeHeadline
        variants={headlineAnimations}
        initial="initial"
        whileInView="whileInView"
      >
        About Me
      </AboutMeHeadline>

      <AboutTextContainer>
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index}>
            <LineStyled />
            {paragraph}
          </p>
        ))}
      </AboutTextContainer>
      <TechStackContainer>
        <SecondHeadlineStyled>My Tech-Stack / Skills</SecondHeadlineStyled>
        <ul>
          {techStack.map((tech, index) => (
            <li key={index}>
              <a href={tech.href} target="_blank">
                <Icon variant={tech.variant} size="3rem" />
                <span>{tech.name}</span>
              </a>
            </li>
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

const ImageStyled = styled(Image)`
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

const LineStyled = styled.span`
  display: inline-block;
  height: 0.3rem;
  min-width: 25%;
  background-color: ${({ theme }) => theme.accentColorPrimary};
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
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
