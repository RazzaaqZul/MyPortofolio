import React from "react";
import { DATAFOOTER } from "./DataFooter";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-6">
        <div className="container_title_footer font-bold text-xl">
          Follow me on:
        </div>
        <div className="container_social_media flex justify-center items-center gap-3">
          {DATAFOOTER.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-2 duration-150 hover:shadow-xl hover:shadow-orange-200 rounded-full"
              >
                {item.image}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
