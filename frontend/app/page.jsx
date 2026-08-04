"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// landing page

import Hero from "./landingPageComponents/Hero/Hero";
import Problem from "./landingPageComponents/Problem/Problem";
import Problem2 from "./landingPageComponents/Problem2/Problem2";
import Problem3 from "./landingPageComponents/Problem3/Problem3";
import Fitur from "./landingPageComponents/Fitur/Fitur";
import HowItWorks from "./landingPageComponents/HowItWorks/HowItWorks";
import Impact from "./landingPageComponents/Impact/Impact";

export default function Home() {
  return (
    <div className="landing-page">
      <Navbar />

      {/* landing page */}
      <Hero />
      <Problem />
      {/* <Problem2 />
      <Problem3 /> */}
      <Fitur />
      {/* <HowItWorks />
      <Impact /> */}

      {/* <Footer /> */}
    </div>
  );
}
