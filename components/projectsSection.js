import styled from "styled-components";
import projects from "@/lib/projects";
import ProjectCard from "@/components/projectCard";

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
  padding-block: 5rem 15rem;
  padding-inline: 0;
  display: grid;
  gap: 5rem;
`;
