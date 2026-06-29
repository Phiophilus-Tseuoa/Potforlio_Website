export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">

        <p className="text-blue-500 font-medium mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl font-bold mb-6">
          Siya Mzizi
        </h1>

        <h2 className="text-2xl text-gray-400 mb-8">
          Computer Science Student • Aspiring Software Engineer • Data Science Enthusiast
        </h2>

        <p className="text-lg text-gray-300 leading-8 mb-10">
          I enjoy building software, analyzing data, and continuously learning
          new technologies. My goal is to create solutions that combine
          programming, analytical thinking, and real-world impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
            View Projects
          </button>

          <button className="border border-gray-600 hover:border-blue-500 px-6 py-3 rounded-xl font-semibold transition">
            Download Resume
          </button>
        </div>

      </div>
    </section>
  );
}