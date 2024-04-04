import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { motion, useInView, useAnimationControls } from "framer-motion";
import { breakpoints, buttonAnimations } from "@/styles/stylesConfig";

export default function ProjectCard({ project, index }) {
  const [cardSize, setCardHeight] = useState({ width: 0, height: 0 });
  const imageRef = useRef(null);
  const cardCoverRef = useRef(null);
  const cardHeadlineRef = useRef(null);

  const imageIsInView = useInView(imageRef, {
    amount: 1,
    once: true,
  });

  const theme = useTheme();

  const coverControls = useAnimationControls();
  const titleCoverControls = useAnimationControls();
  const titleControls = useAnimationControls();
  const detailsControls = useAnimationControls();
  const smallLineControls = useAnimationControls();
  const lineControls = useAnimationControls();

  const even = index % 2 === 0;

  useEffect(() => {
    if (cardCoverRef.current) {
      setCardHeight({
        width: cardCoverRef.current.offsetWidth,
        height: cardCoverRef.current.offsetHeight,
      });
    } else {
      setCardHeight({ width: 0, height: 0 });
    }
  }, [cardCoverRef.current]);

  useEffect(() => {
    if (imageIsInView) {
      coverControls.start({
        scaleY: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      titleCoverControls.start({
        opacity: 0,
      });
      titleControls.start({
        opacity: 1,
        transition: {
          delay: 1.1,
        },
      });
      detailsControls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "backInOut", delay: 0.6 },
      });
      smallLineControls.start({
        scaleX: 1,
        transition: {
          duration: 0.8,
          ease: "backOut",
          delay: 0.4,
        },
      });
      lineControls.start({
        scale: 1,
        transition: {
          duration: 1.7,
          ease: "easeOut",
          delay: 0.6,
          type: "spring",
        },
      });
    }
  }, [imageIsInView]);

  useEffect(() => {
    if (cardSize.height > 0) {
      titleCoverControls.set({
        color: theme.fontColorPrimary,
      });
    }
  }, [theme]);

  return (
    <ProjectCardStyled
      $even={even}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <ProjectTitle ref={cardHeadlineRef}>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={detailsControls}
        >
          {project.title}
        </motion.span>
        <SmallLineStyled initial={{ scaleX: 0 }} animate={smallLineControls} />
      </ProjectTitle>
      <ImageWrapperStyled>
        <ProjectImageStyled
          ref={imageRef}
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
        >
          <motion.h2 initial={{ opacity: 1 }} animate={titleCoverControls}>
            {project.title}
          </motion.h2>
        </ProjectCoverStyled>
      </ImageWrapperStyled>
      <ProjectDetailsStyled
        aria-hidden="true"
        $even={even}
        initial={{ opacity: 0, x: -100 }}
        animate={detailsControls}
      >
        <h2>{project.title}</h2>
        <ProjectAboutHeadline>About</ProjectAboutHeadline>
        <p>{project.description}</p>
        <ProjectToolsHeadline>Technologies & Tools</ProjectToolsHeadline>
        <ul>
          {project.tools.map((tool, index) => (
            <>
              <li key={tool}>{tool}</li>
              {index < project.tools.length - 1 && <li>&#8226;</li>}
            </>
          ))}
        </ul>
        <ProjectLinksContainerStyled $even={even}>
          {project.hrefs.map((href) => (
            <motion.a
              key={href.title}
              href={href.url}
              target="_blank"
              variants={buttonAnimations}
              whileHover="hover"
              whileTap="tap"
            >
              {href.title.split("").map((char, index) => (
                <span key={index}>{char}</span>
              ))}
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

const ProjectCardStyled = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (min-width: ${breakpoints.m}) {
    padding-inline: 3%;
    flex-direction: ${({ $even }) => ($even ? "row" : "row-reverse")};
    /* justify-content: space-between; */
    gap: 1rem;
    align-items: flex-end;
  }
`;

const ProjectTitle = styled.h2`
  display: flex;
  gap: 0.5rem;
  font-size: var(--fontSizeM);
  font-family: var(--fontHeadline);
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.fontColorPrimary};
  text-transform: uppercase;
  span {
    transform-origin: right;
  }

  @media screen and (min-width: ${breakpoints.m}) {
    display: none;
  }
`;

const ImageWrapperStyled = styled.div`
  position: relative;
  @media screen and (min-width: ${breakpoints.m}) {
    width: 60%;
  }
`;

const ProjectImageStyled = styled(Image)`
  width: 100%;
  height: auto;
`;

const ProjectDetailsStyled = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    display: none;
    font-size: var(--fontSizeM);
    font-family: var(--fontHeadline);
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.fontColorPrimary};
    text-transform: uppercase;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.5rem;

    li {
      list-style: none;
      display: inline-block;
      max-width: auto;
    }
  }
  p {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    width: 35%;
    h2 {
      display: block;
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
  margin-top: var(--fontSizeS);
  @media screen and (min-width: ${breakpoints.xl}) {
    margin-top: var(--fontSizeM);
  }
`;

const ProjectAboutHeadline = styled(ProjectHeadline)`
  @media screen and (min-width: ${breakpoints.xl}) {
    display: block;
  }
`;

const ProjectToolsHeadline = styled(ProjectHeadline)`
  display: block;
  @media screen and (min-width: ${breakpoints.m}) {
  }
`;

const ProjectLinksContainerStyled = styled(motion.div)`
  display: flex;
  gap: 1rem;
  a {
    width: 1.7rem;
    height: 1.7rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    font-family: var(--fontBold);
    font-size: var(--fontSizeXXS);
    line-height: var(--fontSizeXXS);
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.accentColorPrimary};
    color: ${({ theme }) => theme.bgColorPrimary};
    padding: 0.5rem;
    border-radius: 100%;

    @media (hover: hover) {
      &:hover {
        background-color: ${({ theme }) => theme.fontColorPrimary};
      }
    }
  }
  @media screen and (min-width: ${breakpoints.m}) {
    justify-content: ${({ $even }) => ($even ? "flex-end" : "flex-start")};
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    margin-top: 1rem;
  }
`;

const ProjectCoverStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $even }) =>
    $even ? theme.accentColorPrimary : theme.fontColorPrimary};
  transform-origin: top;

  h2 {
    position: absolute;
    font-size: var(--fontSizeM);
    font-family: var(--fontHeadline);
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.bgColorPrimary};
    text-transform: uppercase;
  }
`;

const SmallLineStyled = styled(motion.div)`
  height: 0.3rem;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.accentColorPrimary};
  margin-top: calc(var(--fontSizeXXS) + 0.1rem);
  transform-origin: right;
  @media screen and (min-width: ${breakpoints.m}) {
    display: none;
  }
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
