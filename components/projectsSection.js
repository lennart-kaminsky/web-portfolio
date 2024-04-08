import styled from "styled-components";
import { HeadlineStyled } from "@/styles/styled";
import { breakpoints, opacityAnimations } from "@/styles/stylesConfig";
import projects from "@/lib/data";
import ProjectCard from "@/components/projectCard";

export default function ProjectsSection() {
  return (
    <ProjectsSectionStyled>
      <HeadlineStyled
        variants={opacityAnimations}
        initial="initial"
        whileInView="whileInView"
      >
        Projects
      </HeadlineStyled>
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </ProjectsSectionStyled>
  );
}

const ProjectsSectionStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: ${breakpoints.s}) {
    gap: 6rem;
  }
  @media screen and (min-width: ${breakpoints.m}) {
    gap: 8rem;
  }
  @media screen and (min-width: ${breakpoints.l}) {
    gap: 10rem;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    gap: 12rem;
  }
`;
