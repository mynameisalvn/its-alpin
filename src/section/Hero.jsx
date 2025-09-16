// Hero.jsx
import HeroText from "../components/HeroText";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 overflow-hidden"
      id="home"
    >
      {/* Left Side: Text */}
      <div className="flex-1 w-full">
        <HeroText />
      </div>

      {/* Right Side: Image + Floating Elements */}
      <div className="flex-1 relative flex justify-center mt-5 md:mt-0 round">
        <motion.img
          src="assets/me.jpg"
          alt="Alpin"
          className="w-[320px] md:w-[400px] lg:w-[600px] rounded-lg shadow-xl object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Floating Card 1 */}
        <motion.div
          className="absolute top-10 left-[-20px] bg-neutral-900 text-white text-sm p-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-green-400">.img {"{"}</p>
          <p className="ml-2">color: black;</p>
          <p className="ml-2">src: "assets/me.jpg";</p>
          <p className="text-green-400">{"}"}</p>
        </motion.div>

        {/* Floating Card 2 */}
        <motion.div
          className="absolute bottom-10 right-[-20px] bg-neutral-800 text-white p-3 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs">Image Settings</p>
          <div className="w-20 h-2 bg-gradient-to-r from-pink-500 to-blue-500 mt-2 rounded"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
