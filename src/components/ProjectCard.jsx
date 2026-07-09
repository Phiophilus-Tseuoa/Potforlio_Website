import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Button from "./Button";
import Badge from "./Badge";

export default function ProjectCard({
  image,
  title,
  shortDescription,
  description,
  technologies,
  github,
  demo,
  status,
}) {
  return (
    <article
      className="
        group
        bg-neutral-900
        border
        border-neutral-800
        rounded-2xl
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-56
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <Badge variant={
            status === "Completed"
            ? "success"
            : "warning"
          }>{status}</Badge>
          
        </div>

        <p className="text-blue-400 font-medium mb-3">
          {shortDescription}
        </p>

        <p className="text-gray-400 leading-7 mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-neutral-800 text-gray-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <Button
            href={github}
            target="_blank"
            variant="secondary"
          >
            <FaGithub />
            GitHub
          </Button>

          <Button
            href={demo}
            target="_blank"
          >
            <HiOutlineExternalLink />
            Live Demo
          </Button>
        </div>
      </div>
    </article>
  );
}