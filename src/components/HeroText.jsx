import { mySocials } from "../constants";
import { motion } from "motion/react";

const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Smooth scroll function
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="z-10 px-6 mt-20 md:mt-40 w-full max-w-6xl text-center md:text-left">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col space-y-2">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Hello.
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-gray-500 to-white">
            <br />
            I'm Alpin.
          </span>
        </motion.h1>

        <motion.p
          className="text-1xl md:text-2xl font-medium text-neutral-300 leading-tight"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          Website Developer and IT Enthusiast
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
              transition={{ delay: 0.2 + index * 0.1 }}
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

        {/* Contact Me Button */}
        <motion.button
          onClick={handleScrollToContact}
          className="mt-8 px-8 py-3 text-lg bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform self-start md:self-start lg:self-start"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden py-20 flex flex-col space-y-6">
        <motion.p
          className="text-5xl font-black"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          Hello.
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-gray-500 to-white">
            <br />
            I'm Alpin.
          </span>
        </motion.p>

        <motion.p
          className="text-2xl font-bold text-neutral-100"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          Website Developer <br /> and IT Enthusiast
        </motion.p>

        <div className="flex justify-center gap-4 my-10">
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

        {/* Contact Me Button for Mobile */}
        <motion.button
          onClick={handleScrollToContact}
          className="mx-auto px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </div>
    </div>
  );
};

export default HeroText;
