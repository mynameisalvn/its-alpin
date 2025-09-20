import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Project", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

function Navigation({ linkColor, activeSection, onLinkClick }) {
  return (
    <ul className="flex flex-col gap-6 sm:flex-row sm:gap-8">
      {navItems.map((item) => {
        const isActive = activeSection === item.to;
        return (
          <li key={item.to} className="relative group">
            <Link
              to={item.to}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => onLinkClick && onLinkClick(item.to)}
              className={`cursor-pointer transition-colors duration-300 ${
                isActive ? "text-white font-semibold" : linkColor
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // ✅ Track active section
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = navItems.map((item) => document.getElementById(item.to));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      let currentSection = "home";
      let maxVisibleHeight = 0;

      for (let section of sections) {
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
      setIsTop(scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  // 🎬 Variants for staggered animation
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren", // ⏳ wait before animating children
        staggerChildren: 0.15, // ✨ stagger links
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.25 } },
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed inset-x-0 top-0 w-full border-b transition-all duration-500 bg-primary/30 backdrop-blur-lg border-white/10 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-4">
            <a
              href="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent"
            >
              ALPIN
            </a>

            {/* Mobile Menu Button */}
            {/* Toggle Button (used for both open & close) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="flex cursor-pointer focus:outline-none sm:hidden relative w-7 h-7"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.img
                    key="close"
                    src="assets/close.svg"
                    alt="close"
                    className="absolute w-7 h-7"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                ) : (
                  <motion.img
                    key="menu"
                    src="assets/menu.svg"
                    alt="menu"
                    className="absolute w-7 h-7"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </AnimatePresence>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden sm:flex">
              <Navigation
                linkColor={isTop ? "text-white" : "text-neutral-300"}
                activeSection={activeSection}
                onLinkClick={handleLinkClick}
              />
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Fullscreen with Sequential Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[999] bg-primary text-white flex flex-col"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Top bar */}
            <motion.div
              className="flex items-center justify-between px-6 py-4"
              variants={itemVariants}
            >
              <div />
              {/* Empty div to center the logo */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="w-7 h-7"
              >
                <motion.img
                  key="close"
                  src="assets/close.svg"
                  alt="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </button>
            </motion.div>

            {/* Nav links */}
            <div className="flex-1 flex items-center justify-center">
              <motion.ul
                className="flex flex-col items-center gap-10 text-3xl font-medium"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.to;
                  return (
                    <motion.li key={item.to} variants={itemVariants}>
                      <Link
                        to={item.to}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={() => handleLinkClick(item.to)}
                        className={`cursor-pointer transition-colors duration-300 ${
                          isActive
                            ? "text-white font-semibold underline underline-offset-8 decoration-2 decoration-gradient-to-r from-gray-500 to-white"
                            : "text-neutral-300"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
