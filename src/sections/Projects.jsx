import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="bg-black py-24"
    >
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of projects that demonstrate my technical skills and problem-solving approach."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}