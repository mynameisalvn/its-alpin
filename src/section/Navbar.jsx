import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";

/* navItems shared between navbar and observer */
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
              offset={-80} // adjust if your navbar height is different
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
  const [isTop, setIsTop] = useState(true); // true when at very top
  const [activeSection, setActiveSection] = useState("home");

  // track top-of-page to toggle transparent / solid navbar
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = navItems.map((item) => document.getElementById(item.to));

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px", // ✅ detects section once top enters mid-viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // ✅ Fallback: manual scroll detection
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = window.innerHeight / 2; // middle of viewport

      for (let section of sections) {
        if (!section) continue;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY + offset >= top && scrollY + offset < bottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // close mobile menu when navigating
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 w-full border-b transition-all duration-500 bg-primary/30 backdrop-blur-lg border-white/10 z-70">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-gray-500 to-white bg-clip-text text-transparent"
          >
            ALPIN
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex cursor-pointer focus:outline-none sm:hidden relative w-6 h-6 ${
              isTop ? "text-white" : "text-neutral-400 hover:text-white"
            }`}
            aria-label="Toggle menu"
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
              linkColor={isTop ? "text-white" : "text-neutral-300"}
              activeSection={activeSection}
              onLinkClick={handleLinkClick}
            />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden bg-primary/50 backdrop-blur-md border-t border-white/10 z-70 relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4">
              <Navigation
                linkColor={isTop ? "text-white" : "text-neutral-300"}
                activeSection={activeSection}
                onLinkClick={handleLinkClick}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
