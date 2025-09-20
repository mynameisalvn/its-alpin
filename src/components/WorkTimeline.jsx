"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const TimelineWork = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="section-spacing w-full md:px-10" ref={containerRef}>
      {/* Section Header */}
      <div className="my-45 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-white underline underline-offset-8 decoration-2 decoration-gradient-to-r from-gray-500 to-white">
          Experiences.
        </h2>
        <p className="text-lg mt-4 text-neutral-500">
          Journey through my work experience and career growth
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
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start  md:gap-10 mb-16 md:mb-24"
          >
            {/* Sticky Left Section */}
            <div className="sticky z-10 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3 className="text-3xl text-neutral-500">{item.job}</h3>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>
              {item.contents.map((content, i) => (
                <p className="mb-3 font-normal text-neutral-400" key={i}>
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Vertical Progress Line */}
        <div
          style={{
            height: height - 10 + "px",
            top: "20px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] 
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] 
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
    </section>
  );
};
