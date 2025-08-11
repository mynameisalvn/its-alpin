import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";

function Navigation({ linkColor }) {
  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Project", to: "project" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <ul className="flex flex-col gap-6 sm:flex-row sm:gap-8">
      {navItems.map((item) => (
        <li key={item.to} className="relative group">
          <Link
            activeClass="active"
            to={item.to}
            smooth
            offset={0}
            duration={500}
            className={`cursor-pointer transition-colors duration-300 ${linkColor} hover:text-white`}
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsHero(heroBottom > 0); // true when still inside hero section
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 z-20 w-full border-b transition-all duration-500 ${
        isHero
          ? "bg-transparent border-transparent"
          : "bg-primary/30 backdrop-blur-lg border-white/10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="/"
            className={`text-xl font-bold bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent`}
          >
            ALPIN
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex cursor-pointer focus:outline-none sm:hidden relative w-6 h-6 ${
              isHero ? "text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.img
                  key="close"
                  src="assets/close.svg"
                  className="w-6 h-6 absolute"
                  alt="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                />
              ) : (
                <motion.img
                  key="menu"
                  src="assets/menu.svg"
                  className="w-6 h-6 absolute"
                  alt="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.25 }}
                />
              )}
            </AnimatePresence>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation
              linkColor={isHero ? "text-white" : "text-neutral-300"}
            />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden bg-primary/50 backdrop-blur-md border-t border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4">
              <Navigation
                linkColor={isHero ? "text-white" : "text-neutral-300"}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
