"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const TimelineProject = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // ✅ Auto-update height on resize / content changes
  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      setHeight(ref.current.offsetHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(ref.current);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="section-spacing w-full md:px-10" ref={containerRef}>
      <div className="mb-60 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-dark underline underline-offset-8 decoration-2 decoration-gradient-to-r">
          Works.
        </h2>
        <p className="text-lg mt-4 text-neutral-500">
          Check out the projects that I have done.
        </p>
        <div className="mt-10 flex justify-center">
          <img
            src="/assets/scrolldown.gif"
            alt="Scroll down"
            className="w-25 h-20 animate-bounce"
          />
        </div>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-start pt-10 md:pt-32 md:gap-10"
          >
            {/* Sticky Left  */}
            <div className="sticky z-10 flex flex-col md:flex-row items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-600 dark:text-neutral-400">
                {item.title}
              </h3>
            </div>

            {/* Right Section */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile Title */}
              <h3 className="md:hidden block text-2xl mb-4 font-bold text-neutral-600 dark:text-neutral-400">
                {item.title}
              </h3>

              {/* Project Image */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-2xl shadow-lg w-full md:max-w-2xl mb-6 hover:opacity-90 transition"
                />
              )}

              {/* Description */}
              <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg mb-3">
                {item.description}
              </p>

              {/* Sub Description */}
              <ul className="list-disc list-inside text-neutral-500 dark:text-neutral-400 mb-4 space-y-2">
                {item.subDescription.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                {item.tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm"
                  >
                    <img
                      src={tag.path}
                      alt={tag.name}
                      className="w-5 h-5 object-contain"
                    />
                    <span className="text-neutral-600 dark:text-neutral-300">
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Project Button */}
              {item.href && (
                <div className="mt-6">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 text-sm md:text-base font-medium rounded-lg shadow-md 
                      bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                      hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Vertical Progress Line */}
        <div
          style={{ height }}
          className="absolute left-[31px] md:left-[31px] top-0 overflow-hidden w-[2px] 
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
            from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 
            to-transparent to-[99%]  
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t 
                      from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
