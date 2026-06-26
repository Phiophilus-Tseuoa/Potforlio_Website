import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}

export default App;