import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { useMediaQuery } from "react-responsive";
// import { Suspense, useState } from "react";
// import Loader from "../components/Loader";
// import { Character } from "../components/Character";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  // const [dpr, setDpr] = useState([1, 1.5]);

  return (
    <section
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
      id="home"
      style={
        isMobile
          ? {
              backgroundImage: "url('assets/night-2-comp.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%", // let it grow with content
              minHeight: "100%", // not 100vh
              opacity: 0.7,
            }
          : {}
      }
    >
      {!isMobile && <ParallaxBackground />}
      <HeroText />
      {/* <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      > */}
      {/* <Canvas
          dpr={dpr}
          gl={{ antialias: false }}
          shadows={false}
          camera={{ position: [0, 1, 3], fov: 50 }}
        >
          <PerformanceMonitor
            onChange={({ factor }) => {
              if (factor < 0.8) setDpr([0.75, 1]);
            }}
          />
          <Suspense fallback={<Loader />}>
            <Float>
              <Character
                scale={isMobile ? 0.15 : 0.2}
                position={isMobile ? [0, -1, 0] : [1.2, -1.3, -0.5]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas> */}
      {/* </figure> */}
    </section>
  );
};

// function Rig() {
//   return useFrame((state, delta) => {
//     const x = state.mouse.x / 10;
//     const y = 1 + state.mouse.y / 10;
//     state.camera.position.lerp({ x, y, z: 3 }, 0.05);
//   });
// }

export default Hero;
