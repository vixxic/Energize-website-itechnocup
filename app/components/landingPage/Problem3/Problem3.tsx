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
      },
    });
  }, []);
  return (
    <div className="problem3-section">
      <div className="problem3-img-div">
        <div>
          <img src="/ruang-tamu.png" />
          <img className="balon" src="/balon-watt.png" />
        </div>
      </div>

      <h2>Semua Terhitung...</h2>
    </div>
  );
}

export default Problem3;
