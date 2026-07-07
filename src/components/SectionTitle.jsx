export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <p className="text-blue-500 font-semibold tracking-wider uppercase text-sm mb-2">
        Section
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}