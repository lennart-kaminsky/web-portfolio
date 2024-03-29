import styled from "styled-components";
import projects from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

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
  padding-top: 5rem;
  padding-inline: 0;
  display: grid;
  gap: 2rem;
`;
