import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Button from "../components/Button";
import site from "../constants/site";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">

        <p className="text-blue-500 font-medium mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold mb-6">
          {site.name}
        </h1>

        <h2 className="text-2xl text-gray-400 mb-8">
          {site.title} • {site.tagline}
        </h2>

        <p className="text-lg text-gray-300 leading-8 mb-10">
          {site.description}
        </p>
        <div className="flex justify-center gap-6 mb-8 text-gray-400 text-xl">
  
  <a
    href="https://github.com/Phiophilus-Tseuoa"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/phiophilus-tseuoa"
    target="_blank"
    rel="noreferrer"
    className="hover:text-white transition"
  >
    <FaLinkedin />
  </a>

  <a
    href={`mailto:${site.email}`}
    className="hover:text-white transition"
  >
    <FaEnvelope />
  </a>

</div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <Button href="#projects">View Projects</Button>
          
          <Button href="#" variant="secondary">
            Download Resume
          </Button>

        </div>

      </div>
    </section>
  );
}