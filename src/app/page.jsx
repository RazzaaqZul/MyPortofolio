import React from "react";
import HeaderImage from "../../components/Home/HeaderImage";
import HeaderDesc from "../../components/Home/HeaderDesc";
import Shape from "../../components/Home/Shape";
import AnimateScrollX from "../../components/Home/AnimateScrollX";
import AboutMe from "../../components/Aboutme/AboutMe";
import HardskillSlide from "../../components/Aboutme/HardskillSlide";
import Project from "../../components/Project/Project";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="flex justify-center flex-col max-md:top-[50%] max-lg:gap-7">
        <div className="container_home max-md:flex-wrap " id="home">
          <HeaderImage />
          <HeaderDesc />
        </div>
        <AnimateScrollX />
      </div>

      <div className="container_aboutme" id="aboutme">
        <AboutMe />
        <HardskillSlide />
      </div>

      <div className="container_project mt-[2%] max-md:mt-[11%]" id="project">
        <Project />
      </div>
      <div className="container_footer max-lg:mt-[20%] mt-[10%]" id="contact">
        <Footer />
      </div>
    </>
  );
};

export default Home;
