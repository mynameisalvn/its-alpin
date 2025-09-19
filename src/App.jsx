import { useState } from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import ParallaxBackground from "./components/ParallaxBackground";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="container mx-auto max-w-7xl relative">
          {/* Navbar */}
          <Navbar />

          <Hero />
          <About />

          <ParallaxBackground />
          <Projects />
          <Experiences />

          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
