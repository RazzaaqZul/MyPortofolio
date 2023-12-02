"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CardProject = ({ name, image, language, link, deploy }) => {
  const [imageIndex, setImageIndex] = useState(1);
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % image.length);
      setAnimation(!animation);
    }, 4000);

    // Clean up the interval when the component unmounts

    return () => {
      clearInterval(sliderInterval);
    };
  }, [imageIndex]);

  return (
    <div>
      <div className="hover:shadow-2xl hover:-translate-y-2 hover:shadow-amber-300 duration-200 ... container_card bg-neutral-50 shadow-2xl  max-w-[410px] w-[100%] h-[450px] flex justify-center items-center flex-col px-10 rounded-2xl gap-4 ...">
        <div className="image_card ">
          <Image
            src={image[imageIndex].src}
            width={400}
            height={200} // Set the height according to your requirements
            alt="css"
            className={`${
              animation ? "animation_image" : "animation_image_exit"
            } rounded-2xl`}
            style={{
              maxWidth: "310px",
              minWidth: "310px",
              minHeight: "180px",
              maxHeight: "180px",
            }}
          />
        </div>

        <div className="title_card font-bold text-xl">{name}</div>

        <div className="language_card font-normal italic ">
          <p className="text-center">{language}</p>
        </div>
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="font-normal text-base cursor-pointer hover:text-blue-500 duration-300 hover:scale-110   text-black underline"
        >
          Production Deployment
        </a>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-black bg-white px-4 py-2 rounded-full font-semibold text-xl hover:bg-black hover:text-white duration-500"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default CardProject;
