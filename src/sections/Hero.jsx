import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "../components/Button";
import Container from "../components/Container";
import site from "../constants/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <Container className="max-w-4xl text-center">
        <p className="text-blue-500 font-medium mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {site.name}
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-400 mb-8">
          {site.title} • {site.tagline}
        </h2>

        <p className="text-lg text-gray-300 leading-8 max-w-3xl mx-auto mb-10">
          {site.description}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 text-gray-400 text-2xl">
          <a
            href="https://github.com/Phiophilus-Tseuoa"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/phiophilus-tseuoa"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${site.email}`}
            className="hover:text-blue-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="#projects">
            View Projects
          </Button>

          <Button href="#" variant="secondary">
            Download Resume
          </Button>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {["Python", "React", "Data Science", "Cybersecurity"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}