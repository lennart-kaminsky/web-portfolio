import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { motion, useInView, useAnimationControls } from "framer-motion";
import {
  breakpoints,
  buttonAnimations,
  fontSizes,
} from "@/styles/stylesConfig";

export default function ProjectCard({ project, index }) {
  const [cardHeight, setCardHeight] = useState(0);
  const cardRef = useRef(null);
  const cardIsInView = useInView(cardRef, {
    amount: 1,
    margin: "0% 0% -10% 0%",
    once: true,
  });
  const cardCoverRef = useRef(null);

  const theme = useTheme();

  const coverControls = useAnimationControls();
  const titleControls = useAnimationControls();
  const linkControls = useAnimationControls();
  const lineControls = useAnimationControls();

  const even = index % 2 === 0;

  useEffect(() => {
    if (cardCoverRef.current) {
      setCardHeight(cardCoverRef.current.offsetHeight + 60);
    } else {
      setCardHeight(0);
    }
  }, [cardCoverRef.current]);

  useEffect(() => {
    if (cardIsInView) {
      coverControls.start({
        scaleY: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      titleControls.start({
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
        color: theme.fontColorPrimary,
      });
      linkControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "backInOut", delay: 0.6 },
      });
      lineControls.start({
        scale: 1,
        transition: {
          duration: 1.3,
          ease: "easeOut",
          delay: 0.6,
          type: "spring",
        },
      });
    }
  }, [cardIsInView]);

  useEffect(() => {
    titleControls.set({
      color: theme.fontColorPrimary,
    });
  }, [theme]);

  return (
    <ProjectCardStyled ref={cardRef} $even={even}>
      <HeadlineImageContainer>
        {/* cardheight > 200 bc otherwise it will be set to a low number bc it refreshes twice */}
        {cardHeight > 200 && (
          <motion.h2 initial={{ y: cardHeight / 2 }} animate={titleControls}>
            {project.title}
          </motion.h2>
        )}
        <ImageWrapperStyled>
          <ProjectImageStyled
            src={project.image.url}
            width={project.image.width}
            height={project.image.height}
            alt={project.title}
          />
          <ProjectCoverStyled
            ref={cardCoverRef}
            $even={index % 2 === 0}
            initial={{ scaleY: 1 }}
            animate={coverControls}
          />
        </ImageWrapperStyled>
      </HeadlineImageContainer>
      <ProjectDetailsStyled
        $even={even}
        initial={{ opacity: 0, x: -100 }}
        animate={linkControls}
      >
        <ProjectAboutHeadline>About</ProjectAboutHeadline>
        <p>{project.description}</p>
        <ProjectToolsHeadline>Technologies & Tools</ProjectToolsHeadline>
        <ul>
          {project.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
        <ProjectLinksContainerStyled
          $even={even}
          // initial={{ opacity: 0, x: -100 }}
          // animate={linkControls}
        >
          {project.hrefs.map((href) => (
            <motion.a
              key={href.title}
              href={href.url}
              target="_blank"
              variants={buttonAnimations}
              whileTap="tap"
            >
              {`View ${href.title}`}
            </motion.a>
          ))}
        </ProjectLinksContainerStyled>
        <LineStyled
          $even={even}
          initial={{ scale: 0 }}
          animate={lineControls}
        />
      </ProjectDetailsStyled>
    </ProjectCardStyled>
  );
}

const ProjectCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h2 {
    font-size: var(--fontSizeM);
    font-family: var(--fontHeadline);
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.bgColorPrimary};
    text-transform: uppercase;
    z-index: 1;
  }

  @media screen and (min-width: ${breakpoints.m}) {
    grid-column: ${({ $even }) => ($even ? "1 / span 2" : "2 / span 2")};
    padding-inline: 3%;
    flex-direction: ${({ $even }) => ($even ? "row" : "row-reverse")};
    justify-content: space-between;
    align-items: flex-end;
  }
`;

const HeadlineImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media screen and (min-width: ${breakpoints.m}) {
    width: 60%;
  }
`;

const ImageWrapperStyled = styled.div`
  position: relative;
`;

const ProjectImageStyled = styled(Image)`
  width: 100%;
  height: auto;
`;

const ProjectDetailsStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  p,
  ul {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    gap: 1rem;
    width: 35%;
    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
    }
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    p {
      display: block;
    }
  }
`;

const ProjectHeadline = styled.h3`
  display: none;
  font-size: var(--fontSizeS);
  font-family: var(--fontBold);
  letter-spacing: 0.1rem;
  margin-top: 1rem;
`;
const ProjectAboutHeadline = styled(ProjectHeadline)`
  @media screen and (min-width: ${breakpoints.xl}) {
    display: block;
  }
`;

const ProjectToolsHeadline = styled(ProjectHeadline)`
  @media screen and (min-width: ${breakpoints.m}) {
    display: block;
  }
`;

const ProjectLinksContainerStyled = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  a {
    width: 6.5rem;
    background-color: ${({ theme }) => theme.fontColorPrimary};
    color: ${({ theme }) => theme.bgColorPrimary};
    font-size: var(--fontSizeXS);
    text-align: center;
    padding-block: 0.2rem;
    border: 1px solid ${({ theme }) => theme.fontColorPrimary};
    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.bgColorPrimary};
        border: 1px solid ${({ theme }) => theme.fontColorPrimary};
        color: ${({ theme }) => theme.fontColorPrimary};
      }
    }
  }
  @media screen and (min-width: ${breakpoints.m}) {
    justify-content: ${({ $even }) => ($even ? "flex-end" : "flex-start")};
    margin-top: 1rem;
  }
`;

const ProjectCoverStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, $even }) =>
    $even ? theme.accentColorPrimary : theme.fontColorPrimary};
  transform-origin: top;
`;

const LineStyled = styled(motion.div)`
  @media screen and (min-width: ${breakpoints.m}) {
    width: 140%;
    height: 0.5rem;
    z-index: 1;
    margin-bottom: 2rem;
    align-self: ${({ $even }) => ($even ? "flex-end" : "flex-start")};
    background-color: ${({ theme }) => theme.accentColorPrimary};
    transform-origin: ${({ $even }) => ($even ? "left" : "right")};
  }
`;
