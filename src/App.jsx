import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Experiences from "./section/Experiences";
import Contact from "./section/Contact";
import Footer from "./section/Footer";
import ParallaxBackground from "./components/ParallaxBackground";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl relative">
      {/* Navbar */}
      <Navbar />

      <Hero />
      <About />
      {/* Parallax Background */}
      <div className="relative z-10">
        <ParallaxBackground />
        <Projects />
        <Experiences />
      </div>

      {/* Sections without background */}

      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
