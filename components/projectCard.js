import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const cardIsInView = useInView(cardRef, { amount: 1 });

  const controls = useAnimationControls();

  function handleCover() {}

  useEffect(() => {
    if (cardIsInView) {
      controls.start({ scaleY: 0 });
    }
  }, [cardIsInView]);

  return (
    <ProjectCardStyled ref={cardRef}>
      <h2>{project.title}</h2>
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
          animate={controls}
        />
      </ImageWrapperStyled>
      <ProjectLinksStyled>
        <Link href="/">More info</Link>
        <a href={project.live} target="_blank">
          View live
        </a>
        <a href={project.github} target="_blank">
          View Code
        </a>
      </ProjectLinksStyled>
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
    text-align: center;
    text-transform: uppercase;
  }
`;

const ImageWrapperStyled = styled.div`
  position: relative;
`;

const ProjectImageStyled = styled(Image)`
  width: 100%;
  height: auto;
`;

const ProjectLinksStyled = styled.div`
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
