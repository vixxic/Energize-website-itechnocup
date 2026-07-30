import "./Problem3.css";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Problem3() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".problem3-section",
        start: "5% top",
        pin: true,
        end: "+=2500",
        markers: true,
      },
    });
  }, []);
  return (
    <div className="problem3-section">
      <img src="/ruang-tamu.png" />

      <h2>Semua Terhitung...</h2>
    </div>
  );
}

export default Problem3;
