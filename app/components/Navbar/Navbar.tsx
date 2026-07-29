"use client";

import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`navbar-outer padding `}>
      <div className={`navbar-inner ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <div className="nav-logo">
            <img className="logo" src="/logo-energize.png" />
          </div>
          <p>ENERGIZE</p>
        </div>

        <ul className="nav-links">
          <li>Beranda</li>
          <li>Fitur</li>
          <li>Cara Kerja</li>
          <li>Dampak</li>
        </ul>
        <div className="analyze-btn">
          <button>Analisis</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
