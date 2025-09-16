import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  const [visible, setVisible] = useState(true);

  return (
    <motion.div
      style={{ y }}
      className={
        "fixed inset-0 -z-10 flex items-center justify-center pointer-events-none duration-700 opacity-5"
      }
    >
      <h1
        className="
          select-none whitespace-nowrap font-extrabold
          tracking-[1vw] text-[30vw] leading-none
        "
        style={{
          color: "transparent", // make text hollow
          WebkitTextStroke: "1.5px #ffff", // outline color (blue-400)
        }}
      >
        ALPIN
      </h1>
    </motion.div>
  );
};

export default ParallaxBackground;
