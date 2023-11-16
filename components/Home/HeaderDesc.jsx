"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeaderDesc = () => {
  return (
    <div>
      <div className="max-md:h-[310px] max-lg:h-[300px]">
        <h1 className="header_name">Hello, I'm</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Muhammad Razzaaq Zulkahfi",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "FrontEnd Enthusiats",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "3em", display: "inline-block" }}
          repeat={Infinity}
          className="header_name"
        />
      </div>

      <p className="header_desc">
        A Front End enthusiast will do the best possible work on slicing your
        website design and make your logical client.
      </p>
    </div>
  );
};

export default HeaderDesc;
