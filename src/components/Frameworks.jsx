import { cn } from "../lib/utils";
import { Marquee } from "../components/Marquee";

const frameworks = [
  {
    name: "Next.js",
    img: "assets/logos/nextjs.svg",
  },
  {
    name: "React",
    img: "assets/logos/react.svg",
  },
  {
    name: "TypeScript",
    img: "assets/logos/typescript.svg",
  },
  {
    name: "JavaScript",
    img: "assets/logos/javascript.svg",
  },
  {
    name: "Vue.js",
    img: "assets/logos/vue.svg",
  },
  {
    name: "Frammer",
    img: "assets/logos/framer.svg",
  },
  {
    name: "Tailwind CSS",
    img: "assets/logos/tailwindcss.svg",
  },
  {
    name: "Visual Studio Code",
    img: "assets/logos/visualstudiocode.svg",
  },
  {
    name: "Laravel",
    img: "assets/logos/laravel-2.svg",
  },
  {
    name: "PHP",
    img: "assets/logos/php.svg",
  },
  {
    name: "MySQL",
    img: "assets/logos/mysql.svg",
  },
];

const firstRow = frameworks.slice(0, frameworks.length / 2);
const secondRow = frameworks.slice(frameworks.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Frameworks() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((frameworks) => (
          <ReviewCard key={frameworks.username} {...frameworks} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((frameworks) => (
          <ReviewCard key={frameworks.username} {...frameworks} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default Frameworks;
