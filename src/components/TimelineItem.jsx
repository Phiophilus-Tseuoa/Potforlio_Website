export default function TimelineItem({
  year,
  title,
  location,
  description,
}) {
  return (
    <div className="relative pl-10 pb-12">
      {/* Vertical line */}
      <div className="absolute left-3 top-2 h-full w-0.5 bg-gray-700"></div>

      {/* Circle */}
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-blue-500 bg-black"></div>

      <p className="text-sm text-blue-400 font-semibold">
        {year}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {title}
      </h3>

      <p className="text-gray-400 mt-1">
        {location}
      </p>

      <p className="text-gray-300 mt-4 leading-7">
        {description}
      </p>
    </div>
  );
}