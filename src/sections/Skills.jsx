import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import SkillCategory from "../components/SkillCategory";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-neutral-950 py-24"
    >
      <Container>
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies I use, tools I work with, and areas I'm currently exploring."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}