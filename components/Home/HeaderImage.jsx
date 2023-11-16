import React from "react";
import Image from "next/image";
import Shape from "./Shape";

const HeaderImage = () => {
  return (
    <div className="relative flex flex-col justify-center items-center max-w-fit max-h-max ">
      <Image
        src="/image/razzaaq.png"
        width={700}
        height={700}
        alt="Picture of the author"
        className=" bg-transparent z-[2]  "
      />
      <div className="absolute top-0 bottom-0 bg-transparent z-[1] container_shape flex flex-row bg-orange-500 w-full">
        <div className="elips relative  "></div>
        <div className="segitiga relative   "></div>
        <div className="kotak relative   "></div>
      </div>
      <div className="tabung absolute bottom-0  "></div>
    </div>
  );
};

export default HeaderImage;
