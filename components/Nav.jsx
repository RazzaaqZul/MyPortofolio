"use client";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";

const Nav = () => {
  const [active, setActive] = useState("home"); // Default active link is "home"
  const [isHamburger, setIsHamburger] = useState(false);
  const sectionRefs = {
    home: useRef(),
    aboutme: useRef(),
    project: useRef(),
    contact: useRef(),
  };

  // useEffect(() => {
  //   console.log(isHamburger);
  // }, [isHamburger]);

  return (
    <nav className="nav ">
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

        <li
          id="contact"
          className={`nav_list ${
            active === sectionRefs.contact.id ? "text-pink-500" : ""
          }`}
          ref={sectionRefs.contact}
        >
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
          <div className="animate_nav_mobile absolute bg-white shadow-2xl p-6 rounded-b-3xl top-14 flex justify-start flex-col items-start gap-2 ">
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

            <li
              id="contact"
              className={`nav_list ${
                active === sectionRefs.contact.id ? "text-pink-500" : ""
              }`}
              ref={sectionRefs.contact}
            >
              Contact
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
