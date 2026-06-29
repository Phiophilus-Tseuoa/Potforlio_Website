export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6">
      <h3 className="text-2xl font-semibold mb-4 text-blue-500">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-neutral-800 text-gray-300 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}