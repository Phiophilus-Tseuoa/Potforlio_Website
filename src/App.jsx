import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

export default App;