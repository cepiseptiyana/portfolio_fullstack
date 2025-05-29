import React, { useEffect, useRef } from "react";

// gsap
import { gsap } from "gsap";

// dependensi
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Fragment
import AnimatedModel from "../AnimatedModel.jsx";

const HeroSection = (props) => {
  const { heroRef } = props;

  // text element
  const elementCepi = useRef(null);
  const elementFront = useRef(null);
  const textCepi = "cepi septiyana";

  useEffect(() => {
    // cepi text
    const chars = elementCepi.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power3.out" }
    );

    // front text
    gsap.to(elementFront.current, {
      backgroundPosition: "400% 0%",
      duration: 8,
      repeat: -1,
      ease: "linear",
    });
  });

  return (
    <section
      ref={heroRef}
      className="hero__section w-full h-screen relative z-1 overflow-hidden"
    >
      <Canvas
        style={{
          zIndex: "2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        camera={{ position: [40, 0, -20], fov: 7 }}
      >
        <directionalLight color="green" position={[0, 5, -10]} intensity={15} />
        <directionalLight color="red" position={[0, 20, 0]} intensity={8} />
        <directionalLight color="blue" position={[5, 10, 20]} intensity={20} />
        <directionalLight
          color="green"
          position={[-5, 10, 20]}
          intensity={10}
        />
        <OrbitControls />
        <AnimatedModel model="/models/scene.gltf" />
      </Canvas>

      {/* blob */}
      <div className="wrapper__blob z-1">
        <div className="blob"></div>
      </div>

      {/* text */}
      <div className="lg:w-[50%] md:w-[70%] w-[100%] h-[100vh] absolute top-0 z-2 flex justify-center items-center sm:p-15 p-5">
        <div className="wrapper__text">
          <h1 className="sm:pt-3 pt-1 text-white sm:text-4xl text-4xl capitalize sm:w-[100%] w-[50%]">
            Hi! <span className="uppercase text-blue-500">i'm </span>
          </h1>
          <h1
            ref={elementCepi}
            className="md:text-5xl text-4xl font-bold uppercase text-white text-shadow-[0_0_35px_rgb(255_255_255)]"
          >
            {textCepi.split("").map((char, i) => (
              <span
                style={{
                  display: "inline-block",
                  opacity: "0",
                  transform: "translateY(20px)",
                }}
                key={i}
                className="char"
              >
                {char}
              </span>
            ))}
          </h1>

          <h1
            ref={elementFront}
            className="animated-text sm:pt-7 pt-0 sm:2xl text-2xl font-bold"
          >
            Front End Web Dev
          </h1>
          <p className="lg:text-lg md:text-md text-xs text-slate-200 sm:pt-3 pt-5 font-sans">
            Hai, saya cepi septiyana Front-End Web Developer Saya membangun
            antarmuka web yang cepat, responsif, dan user-friendly menggunakan
            teknologi modern seperti HTML, CSS, JavaScript, dan React.
          </p>
        </div>
      </div>

      {/* getwaves.io
      <div className="w-[100vw] h-[100vh] absolute top-0 z-1">
        <svg
          className="absolute bottom-0 sm:w-full w-[200%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#273036"
            fillOpacity="1"
            d="M0,128L30,144C60,160,120,192,180,186.7C240,181,300,139,360,138.7C420,139,480,181,540,197.3C600,213,660,203,720,213.3C780,224,840,256,900,272C960,288,1020,288,1080,282.7C1140,277,1200,267,1260,256C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
