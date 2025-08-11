import React from "react";

const frameworks = [
  "assets/logos/react.svg",
  "assets/logos/nextjs.svg",
  "assets/logos/typescript.svg",
  "assets/logos/javascript.svg",
  "assets/logos/vue.svg",
  "assets/logos/tailwindcss.svg",
  "assets/logos/visualstudiocode.svg",
  "assets/logos/laravel-2.svg",
  "assets/logos/php.svg",
  "assets/logos/mysql.svg",
  "assets/logos/framer.svg",
  "assets/logos/visualstudiocode.svg",
];

export default function Frameworks() {
  return (
    <section className="w-full overflow-hidden py-10">
      {/* Mobile View → Grid */}
      <div className="grid grid-cols-3 gap-4 sm:hidden px-4">
        {frameworks.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-full h-20 p-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Desktop View → Marquee */}
      <div className="hidden sm:block">
        {/* Top Row → scroll left */}
        <div className="group relative overflow-hidden">
          <div className="marquee group-hover:[animation-play-state:paused]">
            {[...frameworks, ...frameworks].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-24 h-20 md:w-29 md:h-32 p-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row → scroll right */}
        <div className="group relative overflow-hidden mt-8">
          <div className="marquee-reverse group-hover:[animation-play-state:paused]">
            {[...frameworks, ...frameworks].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-24 h-20 md:w-29 md:h-32 p-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md shadow-lg"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
