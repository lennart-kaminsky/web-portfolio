import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { motion, useInView, useAnimationControls } from "framer-motion";

export default function ProjectCard({ project, index }) {
  const [cardHeight, setCardHeight] = useState(0);
  const cardRef = useRef(null);
  const cardIsInView = useInView(cardRef, {
    amount: 1,
    margin: "0% 0% -10% 0%",
    once: true,
  });

  const theme = useTheme();

  const coverControls = useAnimationControls();
  const titleControls = useAnimationControls();
  const linkControls = useAnimationControls();

  useEffect(() => {
    if (cardRef.current) {
      setCardHeight(cardRef.current.offsetHeight);
    } else {
      setCardHeight(0);
    }
  }, [cardRef.current]);

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
    }
  }, [cardIsInView]);

  useEffect(() => {
    titleControls.set({
      color: theme.fontColorPrimary,
    });
  }, [theme]);

  return (
    <ProjectCardStyled ref={cardRef}>
      {cardHeight > 0 && (
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
          $even={index % 2 === 0}
          initial={{ scaleY: 1 }}
          animate={coverControls}
        />
      </ImageWrapperStyled>
      <ProjectLinksContainerStyled
        initial={{ opacity: 0, x: -100 }}
        animate={linkControls}
      >
        <a href={project.live} target="_blank">
          View live
        </a>
        <a href={project.github} target="_blank">
          View Code
        </a>
      </ProjectLinksContainerStyled>
    </ProjectCardStyled>
  );
}

const ProjectCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: var(--fontSizeM);
    font-family: var(--fontHeadline);
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.bgColorPrimary};
    text-align: center;
    text-transform: uppercase;
    z-index: 1;
  }
`;

const ImageWrapperStyled = styled.div`
  position: relative;
`;

const ProjectImageStyled = styled(Image)`
  width: 100%;
  height: auto;
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
