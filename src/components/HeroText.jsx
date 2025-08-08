import { mySocials } from "../constants";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Clean", "Secure", "Modern"];
  const mobileText = ["Clean", "Secure", "Modern"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 px-6 mt-20 md:mt-40 w-full max-w-6xl text-center md:text-left">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col space-y-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-tight "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hi, I'm {""}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-gray-500 to-white">
            Alpin
          </span>
        </motion.h1>

        <motion.div className="space-y-1">
          <motion.p
            className="text-3xl md:text-4xl font-medium text-neutral-300 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            A Web Developer
          </motion.p>
          <motion.p
            className="text-3xl md:text-4xl font-medium text-neutral-300 leading-tight"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            Dedicated to Create
          </motion.p>
        </motion.div>

        {/* FlipWords Wrapper */}
        <motion.div
          className="relative h-[80px] -mt-10"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <FlipWords
            words={words}
            className="absolute inset-0 font-black text-white text-[clamp(2.5rem,6vw,5rem)] whitespace-nowrap"
          />
        </motion.div>

        <motion.p
          className="text-3xl md:text-4xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Modern Website
        </motion.p>

        {/* Socials */}
        <div className="mt-5 flex gap-4">
          {mySocials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={social.icon}
                alt={social.name}
                className="w-6 h-6"
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-10 flex flex-col space-y-6">
        <motion.p
          className="text-6xl font-black"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          Hi, I'm {""}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-gray-500 to-white">
            Alpin
          </span>
        </motion.p>

        <motion.p
          className="text-4xl font-bold text-neutral-100"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          a Website Developer
        </motion.p>

        <div className="flex justify-center gap-4 my-30">
          {mySocials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={social.icon}
                alt={social.name}
                className="w-6 h-6"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroText;
