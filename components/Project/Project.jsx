"use client";

import React, { useEffect } from "react";
import CardProject from "./CardProject";
import { DATAPROJECTS } from "./DataProject";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);
  return (
    <>
      <div className="font-bold text-[3rem] max-sm:text-[2rem]">
        Latest Projects
      </div>
      <div className="container_card mt-[2%]  flex justify-center items-center gap-8 flex-wrap ...">
        {DATAPROJECTS.map((item, index) => {
          return (
            <div data-aos="flip-right" key={index}>
              <CardProject
                name={item.name}
                image={item.image}
                language={item.language}
                link={item.link}
                deploy={item.deploy}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
