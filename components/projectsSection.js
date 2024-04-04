import styled from "styled-components";
import projects from "@/lib/projects";
import ProjectCard from "@/components/projectCard";
import { HeadlineStyled } from "@/styles/styled";
import { breakpoints, headlineAnimations } from "@/styles/stylesConfig";

export default function ProjectsSection() {
  return (
    <ProjectsSectionStyled>
      <HeadlineStyled
        variants={headlineAnimations}
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
