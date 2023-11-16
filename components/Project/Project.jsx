import React from "react";
import CardProject from "./CardProject";
import Image from "next/image";
import { DATAPROJECTS } from "./DataProject";

const Project = () => {
  return (
    <>
      <div className="font-bold text-[3rem]">Latest Projects</div>
      <div className="container_card mt-[2%] flex justify-center items-center gap-8 flex-wrap">
        {DATAPROJECTS.map((item, index) => {
          return (
            <CardProject
              key={index}
              name={item.name}
              image={item.image}
              language={item.language}
              link={item.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default Project;
