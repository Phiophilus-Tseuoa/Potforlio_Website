import SectionTitle from "../components/SectionTitle";
import SkillCategory from "../components/SkillCategory";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-neutral-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies I use, tools I work with, and areas I'm currently exploring."
        />

        <div className="grid gap-8 md:grid-cols-2">

          <SkillCategory
            title="Programming Languages"
            skills={[
              "Python",
              "Java",
              "JavaScript",
              "C",
              "C++",
              "SQL",
            ]}
          />

          <SkillCategory
            title="Web Development"
            skills={[
              "HTML5",
              "CSS3",
              "React",
              "Tailwind CSS",
              "Streamlit",
            ]}
          />

          <SkillCategory
            title="Data Science"
            skills={[
              "Pandas",
              "NumPy",
              "Plotly",
              "Data Visualization",
            ]}
          />

          <SkillCategory
            title="Tools & Learning"
            skills={[
              "Git",
              "GitHub",
              "VS Code",
              "Linux",
              "TryHackMe",
              "Cybersecurity",
            ]}
          />

        </div>

      </div>
    </section>
  );
}