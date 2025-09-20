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
import ScrollReveal from "./components/ScrollReveal";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="container mx-auto max-w-7xl relative">
          <Navbar />

          <ScrollReveal>
            <Hero />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <About />
          </ScrollReveal>

          <ParallaxBackground />

          <ScrollReveal delay={0.2}>
            <Projects />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Experiences />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Contact />
          </ScrollReveal>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
