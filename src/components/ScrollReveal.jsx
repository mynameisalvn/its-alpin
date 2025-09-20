import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const ScrollReveal = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // % of section visible before triggering
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
