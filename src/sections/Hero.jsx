import site from "../constants/site";
import Button from "../components/Button";

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