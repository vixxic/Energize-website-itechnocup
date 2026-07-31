"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// landing page

import Beranda from "./landingPageComponents/Beranda/Beranda";
import Problem from "./landingPageComponents/Problem/Problem";
import Problem2 from "./landingPageComponents/Problem2/Problem2";
import Problem3 from "./landingPageComponents/Problem3/Problem3";
import Fitur from "./landingPageComponents/Fitur/Fitur";
import HowItWorks from "./landingPageComponents/HowItWorks/HowItWorks";
import Impact from "./landingPageComponents/Impact/Impact";
import FormInputData from "./components/FormInputData/FormInputData";

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
      <FormInputData />

      <Footer />
    </div>
  );
}
