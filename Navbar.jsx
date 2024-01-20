"use client";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.15) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  
  return (
    <div className={`navbar-wrapper ${navStyle}`}>
      {/* desktop version */}
      <div className="container">
        <div className="navbar-container">
          {/* left side */}
          <div className="navbar-logo">
            <Link to="hero-wrapper" spy={true} smooth={true}>
              <span>FAHIM UD DIN</span>
            </Link>
          </div>
          {/* right side */}
          <div className="navbar-right">
            <div className="navbar-item">
              <Link to="WhatWeDo-wrapper" spy={true} smooth={true}>
                <span>what we do</span>
              </Link>
              <Link to="how-wrapper" spy={true} smooth offset={100}>
                <span>how it work</span>
              </Link>
              <Link to="invest-wrapper" spy smooth>
                <span>who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>testimonials</span>
              </Link>
            </div>
            {/* right side funded button */}
            <div className="fund-button">
              <span>Get funded</span>
            </div>
          </div>
        </div>
      </div>
      {/* mobile/tab version */}
      <div className="mobile-nav-container">
        {/* logo */}
        <Link
          to="hero-wrapper"
          spy={true}
          smooth={true}
        >
          <span>Fahim ud din</span>
        </Link>
        {/* ICON */}
        {!mobileMenuOpen ? (
          <BiMenuAltRight
            size={30}
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpen(false)} />
        )}
        {/* mobile menu item */}
        <div className="mobile-navbar-menu"
          style={{ transform: mobileMenuOpen && "translate(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpen(false)}
            to="WhatWeDo-wrapper"
            spy={true}
            smooth={true}
          >
            <span>what we do</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            to="how-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>how it works</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            to="invest-wrapper"
            spy
            smooth
          >
            <span>who we invest in</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpen(false)}
            to="t-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>testimonials</span>
          </Link>
          <div className="mobile-fund-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
