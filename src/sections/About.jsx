import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="bg-neutral-950 py-24"
    >
      <Container className="max-w-5xl">
        <SectionTitle
          title="About Me"
          subtitle="My journey into technology."
        />

        <div className="space-y-6 text-gray-300 leading-8 text-lg">
          <p>
            I am a South African Computer Science student currently studying at
            the University of Nyíregyháza in Hungary. Before transitioning into
            technology, I completed a degree in Genetics, where I developed a
            strong foundation in analytical thinking, research, and
            problem-solving.
          </p>

          <p>
            Alongside my university studies, I have completed professional
            certificates in IBM Data Analysis and Microsoft Backend Development.
            These experiences have strengthened my programming, data analysis,
            and software development skills while encouraging continuous
            learning.
          </p>

          <p>
            My primary career interest is Data Science because I enjoy using
            data to solve meaningful problems. At the same time, I enjoy
            software development and building practical applications that people
            can use.
          </p>

          <p>
            I'm also expanding my knowledge of cybersecurity through TryHackMe,
            where I've developed an interest in offensive security and Red
            Teaming. I believe understanding multiple areas of computing helps
            me become a more capable engineer and lifelong learner.
          </p>
        </div>
      </Container>
    </section>
  );
}