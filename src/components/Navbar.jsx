import site from "../constants/site";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold text-white hover:text-blue-500 transition"
        >
          {site.name}
        </a>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}