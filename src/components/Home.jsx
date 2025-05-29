import { useState, useRef, useEffect } from "react";

import HeroSection from "./Fragments/HeroSection";
import Navbar from "./Fragments/Navbar";
import About from "./Fragments/About";
import Contact from "./Fragments/Contact";

function Home() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToAbout={scrollToAbout} scrollToHero={scrollToHero} />
      <HeroSection heroRef={heroRef} />
      <About aboutRef={aboutRef} />
      <Contact />
    </>
  );
}

export default Home;
