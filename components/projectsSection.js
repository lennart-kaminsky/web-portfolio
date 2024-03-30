import styled from "styled-components";
import projects from "@/lib/projects";
import ProjectCard from "@/components/projectCard";
import { breakpoints } from "@/styles/stylesConfig";

export default function ProjectsSection() {
  return (
    <ProjectsSectionStyled>
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </ProjectsSectionStyled>
  );
}

const ProjectsSectionStyled = styled.section`
  width: 100%;
  /* margin-block: 5rem 15rem; */
  padding-inline: 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
