import React from "react";

const frameworksTop = [
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
];
const frameworksBottom = [
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
];

export default function Frameworks() {
  return (
    <section className="w-full overflow-hidden py-10">
      {/* Top Row → scroll left */}
      <div className="group relative overflow-hidden">
        <div
          className="flex gap-10 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ "--gap": "2.5rem" }}
        >
          {[...frameworksTop, ...frameworksTop].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-20 h-30">
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
        <div
          className="flex gap-10 animate-marquee-reverse group-hover:[animation-play-state:paused]"
          style={{ "--gap": "2.5rem" }}
        >
          {[...frameworksBottom, ...frameworksBottom].map((src, i) => (
            <div key={i} className="flex-shrink-0 w-20 h-30">
              <img
                src={src}
                alt=""
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
