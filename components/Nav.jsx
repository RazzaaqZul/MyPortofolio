"use client";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";

const Nav = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Additional logic related to scrolling, if needed
      if (window.pageYOffset > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll immediately to handle the initial state
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsScroll, isScroll]);
  return (
    <nav className={`nav ${isScroll && `sticky bg_scroll  `} `}>
      <ul className="nav_left">
        <li className="nav_list ">MRZ</li>
      </ul>
      {/* DEKSTOP */}
      <ul className="nav_right max-md:hidden">
        <li className="nav_item ">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="nav_item">
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-140}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li className="nav_item">
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-115}
            duration={500}
          >
            Project
          </Link>
        </li>

        <li id="contact" className={`nav_list `}>
          Contact
        </li>
      </ul>

      {/* Mobile/Tablet */}
      <ul className="relative cursor-pointer nav_right_mobile px-[60px] max-md:visible md:hidden">
        <TiThMenu
          size={40}
          onClick={() => setIsHamburger((prev) => !prev)}
          style={{ userSelect: "none" }}
        />
        {isHamburger && (
          <div
            className={`animate_nav_mobile z-20 absolute  ${
              isScroll ? `bg_scroll_mobile` : `bg-white `
            } shadow-2xl p-6 rounded-b-3xl top-14 flex justify-start flex-col items-start gap-2 `}
          >
            <li className="nav_item   ">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-110}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav_item">
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-100}
                duration={500}
              >
                Project
              </Link>
            </li>

            <li id="contact" className={`nav_list`}>
              Contact
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
