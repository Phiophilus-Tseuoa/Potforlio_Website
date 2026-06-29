export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <article className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
        
      <img
    src={image}
    alt={title}
    className="w-full h-56 object-cover rounded-xl mb-6"/>

      <div className="flex justify-between items-start mb-4">

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </span>

      </div>

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

        <a
          href={github}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          GitHub
        </a>

        <a
          href={demo}
          className="border border-gray-600 hover:border-blue-500 px-4 py-2 rounded-lg transition"
        >
          Live Demo
        </a>

      </div>

    </article>
  );
}