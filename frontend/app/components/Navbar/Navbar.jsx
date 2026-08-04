"use client";

import "./Navbar.css";
import { useEffect, useState } from "react";

import Link from "next/link";

// icons
import { GiHamburgerMenu } from "react-icons/gi";

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
       <img src="/logo (1).png" alt="Logo" className="nav-logo" />
       <p className="navbar-logo">Energize</p>
       </div>

        <ul className="nav-links">
          <li className={`${scrolled ? "scrolled" : ""}`}>Beranda</li>
          <li className={`${scrolled ? "scrolled" : ""}`}>Fitur</li>
          <li className={`${scrolled ? "scrolled" : ""}`}>Cara Kerja</li>
          <li className={`${scrolled ? "scrolled" : ""}`}>Dampak</li>
        </ul>

        <div className="nav-hp">
          <div className={`analyze-btn ${scrolled ? "scrolled" : ""}`}>
            <Link href="/dashboard">
              <button className={`${scrolled ? "scrolled" : ""}`}>
                Analisis
              </button>
            </Link>
          </div>

          <button className="dropdown-btn-hp">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
