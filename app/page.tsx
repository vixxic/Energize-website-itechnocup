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
          markers: true,
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
          markers: true,
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
    </div>
  );
}
