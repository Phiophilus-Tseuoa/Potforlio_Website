import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-neutral-950 px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="My journey into technology and where I'm headed."
        />

        <div className="space-y-6 text-lg leading-8 text-gray-300">
          <p>
            I began my academic journey in South Africa, where I earned a
            degree in Genetics. During my studies, I developed strong analytical,
            research, and problem-solving skills that continue to shape the way
            I approach technology.
          </p>

          <p>
            Today, I'm studying Computer Science at the University of
            Nyíregyháza in Hungary. Alongside my degree, I've completed
            professional certificates in IBM Data Analysis and Microsoft Backend
            Development, allowing me to strengthen both my programming and
            analytical skills.
          </p>

          <p>
            My primary career interest is Data Science because it combines data,
            programming, and critical thinking. At the same time, I enjoy
            building software that solves practical problems, which is why I
            continue developing web applications and software projects.
          </p>

          <p>
            I also believe in understanding technology beyond my specialization.
            I'm currently learning cybersecurity through TryHackMe, where I've
            developed an interest in offensive security and Red Teaming. Exploring
            different areas of computing helps me become a more well-rounded
            developer and problem solver.
          </p>
        </div>
      </div>
    </section>
  );
}