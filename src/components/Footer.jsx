import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Container from "./Container";
import site from "../constants/site";
import contact from "../data/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 bg-black py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">
              {site.name}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              © {year} {site.name}. All rights reserved.
            </p>
            <a href="#home"
                className="text-sm text-blue-500 hover:underline">Back to Top ↑
            </a>
          </div>

          <div className="flex gap-6 text-2xl text-gray-400">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="hover:text-blue-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}