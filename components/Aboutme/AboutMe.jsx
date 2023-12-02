"use client";
import React, { useEffect, useState } from "react";
import { MININAVBAR } from "./Mininavbar";

const AboutMe = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [filteredItem, setFilteredItem] = useState([]);

  useEffect(() => {
    const filtered = MININAVBAR.filter((item) => item.id.includes(itemIndex));
    setFilteredItem(filtered);
    // console.log(filtered);
  }, [itemIndex]);

  return (
    <div className="">
      <h1 className="font-bold flex justify-center items-center text-3xl mt-20 ... max-lg:mb-7">
        About Me
      </h1>
      <div className=" container_contentAboutMe lg:pt-[50px] lg:pr-[80px]  lg:pl-[80px]  ">
        <div className="container_nav relative bottom-0   ">
          <nav className="mini_nav flex justify-center items-center gap-9 z-[2] basis-2/5 ... max-sm:gap-3 max-sm:text-sm ">
            {MININAVBAR.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === itemIndex &&
                  "nav_active ... after:w-[100%] after:transition-all after:duration-300 after:bg-red-500"
                } nav_doesnt_active `}
                onClick={() => setItemIndex(index)}
              >
                {item.name}
              </li>
            ))}
          </nav>
          <div className="max-w-[400px]">
            {filteredItem.map((items) => (
              <div
                key={items.id}
                className="  mt-2  w-[100%]  h-[200px] ... max-sm:text-xs max-sm:w-[80%] max-sm:ml-[10%]"
              >
                {items.itemList.map((item, index) => (
                  <div key={index + 1} className="py-3">
                    <li className="font-bold  ">{item.activity}</li>
                    <li className="list-none relative left-5">{item.date}</li>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="container_descAboutMe basis-3/5 text-justify font-medium text-neutral-400 text-lg max-w-[100%] relative bottom-4 ...  max-lg:mt-[2%]">
          Hello I’m Razzaaq, an undergraduate student at Brawijaya University
          majoring in Information Technology, in the Faculty of Computer
          Science. I’m a Frontend Enthusiast and have experience working as a
          Frontend Developer in two communities. This experience has resulted in
          the development of two projects using my programming skills, such as
          Javascript, React.js, Next.js, and TailwindCSS. I've strong
          problem-solving abilities, collaboration, and am a fast learner.
        </div>
      </div>
      <h1 className="font-bold flex justify-center items-center text-xl mt-10">
        My Hard Skill
      </h1>
    </div>
  );
};

export default AboutMe;
