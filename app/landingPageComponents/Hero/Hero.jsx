import "./Hero.css";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useEffect(() => {
    // const tl = gsap.timeline({
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".home-section",
    //     start: "10% top",
    //     end: "bottom top",
    //     markers: true,
    //     scrub: true,
    //   },
    // });

    // tl.to(".layer1", { y: -100 }).to(".layer2", { y: 300 }, "<");

    gsap.to(".layer1", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-section",
        start: "10% top",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });
    gsap.to(".layer2", {
      y: -120,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-section",
        start: "10% top",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });
    gsap.to(".layer3", {
      y: -250,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-section",
        start: "10% top",
        end: "bottom top",
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="home-section">
      <div className="absolute-div">
        <img className="layer1" src="/parallax-effect/layer-1-parallax.png" />
        <img className="layer2" src="/parallax-effect/layer-2-parallax.png" />
        <img className="layer3" src="/parallax-effect/layer-3-parallax.png" />
      </div>
    </div>
  );
}

export default Hero;
