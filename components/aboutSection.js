import styled from "styled-components";
import Image from "next/image";
import { HeadlineStyled } from "@/styles/styled";
import { breakpoints, headlineAnimations } from "@/styles/stylesConfig";
import { aboutParagraphs } from "@/lib/data";

export default function AboutSection() {
  return (
    <AboutSectionStyled>
      <ImageStyled
        src="/images/bikepacking.jpg"
        alt="Photo of Lennart on a bikepacking trip"
        width={6000}
        height={4000}
      />
      <HeadlineTextContainer>
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
      </HeadlineTextContainer>
    </AboutSectionStyled>
  );
}

const AboutSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: ${breakpoints.xl}) {
    flex-direction: row;
  }
`;

const HeadlineTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -4rem;
  @media screen and (min-width: ${breakpoints.s}) {
    margin-top: -6rem;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    margin-top: -8rem;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    margin-top: 0;
    width: 50%;
  }
`;

const ImageStyled = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media screen and (min-width: ${breakpoints.s}) {
    width: 70%;
    align-self: flex-end;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    flex-grow: 1;
    width: auto;
    max-height: 450px;
    align-self: center;
  }
`;

const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: ${breakpoints.s};
`;

const AboutMeHeadline = styled(HeadlineStyled)`
  color: ${({ theme }) => theme.accentColorPrimary};
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
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
