import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";

function App() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Journey />
    </main>
  );
}

export default App;