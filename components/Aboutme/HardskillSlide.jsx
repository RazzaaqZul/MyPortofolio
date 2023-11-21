"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { HARDSKILL } from "../../api/Hardskill";

const HardskillSlide = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    // Fungsi untuk menentukan apakah layar adalah tablet atau dekstop
    const handleResize = () => {
      const isTablet = window.innerWidth <= 768; // Ganti dengan nilai batas pixel untuk tablet
      setActive(isTablet);
    };

    // Panggil fungsi handleResize saat komponen dimount dan ukuran layar berubah
    handleResize();
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener pada saat komponen di-unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <Image
        src="/icon/panah-kanan.png"
        width={70}
        height={100}
        alt="css"
        onClick={onClick}
        className="arrow next ... max-sm:w-7 "
      />
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <Image
        src="/icon/panah-kiri.png"
        width={70}
        height={100}
        alt="css"
        onClick={onClick}
        className="arrow prev ... max-sm:w-7"
      />
    );
  };

  let settings = {
    lazyLoad: true,
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: isActive ? 3 : 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <div className="flex justify-center items-center ">
      <div className=" relative w-[40%] h-full p-2 max-md:w-[70%] max-lg:w-[80%] ">
        <Slider {...settings} className="">
          {HARDSKILL.map((item, index) => (
            <div
              key={index}
              className={`${
                index === imageIndex ? "slide activeSlide" : "slide"
              } `}
            >
              <div className=" h-[100px] flex justify-center items-center  p-2">
                <div className="">{item.icon}</div>
              </div>
              <div className="capitalize font-extrabold text-lg">
                {item.name}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HardskillSlide;
