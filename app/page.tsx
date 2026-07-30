"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";

// landing page
import Beranda from "./components/landingPage/Beranda/Beranda";
import Problem from "./components/landingPage/Problem/Problem";
import Problem2 from "./components/landingPage/Problem2/Problem2";
import Problem3 from "./components/landingPage/Problem3/Problem3";
import Fitur from "./components/landingPage/Fitur/Fitur";
import HowItWorks from "./components/landingPage/HowItWorks/HowItWorks";
import Impact from "./components/landingPage/Impact/Impact";
import Footer from "./components/landingPage/Footer/Footer";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".awan-parallax",
      {
        y: 0,
      },
      {
        y: "-40%",
        ease: "none",

        scrollTrigger: {
          trigger: ".problem-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      ".rumah-img",
      {
        y: 0,
      },
      {
        y: "40%",
        ease: "none",

        scrollTrigger: {
          trigger: ".problem-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      ".beranda-text-con ",
      {
        y: 0,
      },
      {
        y: "40%",
        ease: "none",

        scrollTrigger: {
          trigger: ".problem-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <div className="landing-page">
      <Navbar />

      {/* landing page */}
      <Beranda />
      <Problem />
      <Problem2 />
      <Problem3 />
      <Fitur />
      <HowItWorks />
      <Impact />
      <Footer />
    </div>
  );
}
