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
  gap: 5vh;
  @media screen and (min-width: ${breakpoints.m}) {
    gap: 10vh;
  }
`;
