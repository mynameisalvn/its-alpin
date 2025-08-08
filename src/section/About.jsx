import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { motion } from "motion/react";
import Frameworks from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <motion.h2
        className="text-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex items-end grid-black-color grid-1 overflow-hidden rounded-xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source src="assets/falling-stars.mp4" type="video/mp4" />
          </video>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent animate-gradient" />

          {/* Content with motion */}
          <motion.div
            className="z-10 p-6 md:p-8 backdrop-blur-md rounded-lg bg-white/5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl md:text-5xl font-bold mb-4 text-white">
              My Profile
            </p>
            <p className="subtext text-gray-200">
              Hello, my name is Alpin Rezha and I am a web developer. Beyond
              writing code, I consider myself a creative thinker, adept problem
              solver, and enthusiastic self-learner passionate about delving
              into the endless possibilities of technology. My current focus
              lies in website development utilizing Laravel, React.js, and
              Next.js.
            </p>
          </motion.div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-black/60" />
        </div>

        {/* Grid 2 */}
        {/* <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="absolute inset-0 bg-opacity-40 rounded-xl z-0">
              <img src="assets/stars.png" alt="" />
            </div>
            <p className="flex items-end text-5xl text-white">CREATIVITY</p>
            <Card
              style={{ rotate: "10deg", top: "10%", left: "40%" }}
              image="assets/logos/vitejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "80%", left: "45%" }}
              image="assets/logos/bootstrap-5.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "50deg", top: "40%", left: "80%" }}
              image="assets/logos/git.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "45%", left: "5%" }}
              image="assets/logos/threejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "32deg", top: "20%", left: "80%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/laravel-2.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
          </div>
        </div> */}

        {/* Grid 3 */}
        {/* <div className="grid-default-color grid-3">
          <div className="items-center">
            <p className="text-5xl font-bold mt-5 md:mt-20 mb-2">
              Based in Indonesia
            </p>
            <p className="subtext">Currently open to work 📈</p>
          </div> */}
        {/* <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure> */}
        {/* </div> */}

        {/* Grid 4 */}
        <div className="grid-black-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to collab together ?
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/mynameisalpin/">
                <img src="/assets/socials/linkedIn.svg" alt="linkedin" />
              </a>
              <a href="https://github.com/mynameisalvn">
                <img src="/assets/socials/github.svg" alt="github" />
              </a>
              <a href="https://www.instagram.com/a.rzha/">
                <img src="/assets/socials/instagram.svg" alt="github" />
              </a>
            </div>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="relative grid-black-color grid-5 overflow-hidden rounded-xl">
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="assets/stars-rotate.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />

          {/* Title */}
          <div className="relative z-10 text-center pt-10 pb-6">
            <p className="sm:text-5xl text-3xl font-semibold text-white drop-shadow-lg">
              Techs & Skills
            </p>
          </div>

          {/* Tech stack grid */}
          <div className="relative z-10 w-full px-6 pb-10">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
