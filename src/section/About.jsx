import { motion } from "motion/react";
import Frameworks from "../components/Frameworks";
import { TypewriterEffectSmooth } from "../components/TextWriter";

const About = () => {
  const words = [
    {
      text: "Who",
    },
    {
      text: "am",
    },
    {
      text: "I",
    },
    {
      text: "?",
    },
  ];
  return (
    <section className="relative z-10 c-space section-spacing " id="about">
      {/* Section Header */}
      <div className="text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center text-white underline underline-offset-8 decoration-2 decoration-gradient-to-r from-gray-500 to-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me.
        </motion.h2>
        <p className="text-xl mt-4 text-neutral-500">
          Why not introduce myself?
        </p>
      </div>

      {/* Content Grid */}
      <div className="mt-16 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Info + Highlights */}
        <motion.div
          className="flex-1 text-neutral-300"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-4">
            <TypewriterEffectSmooth words={words} />
          </h3>
          <p className="mb-6 leading-relaxed">
            I'm a passionate web developer and IT Enthusiast with a strong
            interest in modern web development and technology. I enjoy working
            Techstacks such as{" "}
            <span className="text-white">
              React, Laravel, Next.Js and Tailwind CSS
            </span>{" "}
            to bring ideas to life. My goal is to write clean, efficient, and
            scalable code that makes a real impact.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="flex-1 text-neutral-300"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="border-t border-gray-500/[.1] dark:border-gray-50/[.1] text-xl md:text-4xl font-bold py-10 my-8">
          Tools & Techstack
        </div>
        <p className="mb-6 leading-relaxed">
          Here are some of the tools and technologies I frequently use in my
          development.
        </p>
      </motion.div>
      <Frameworks />
    </section>
  );
};

export default About;
