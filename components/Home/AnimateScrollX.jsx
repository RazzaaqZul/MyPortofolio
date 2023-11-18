import React from "react";

import ItemSlide from "./ItemSlide";
const AnimateScrollX = () => {
  return (
    <div className="container_animate max-lg:h-[12vh] md:h-[9vh] lg:h-[12vh]  ">
      <div className="container_scroll max-lg:overflow-x-hidden">
        <div className="container_slide">
          <ItemSlide />
        </div>
        <div className="container_slide">
          <ItemSlide />
        </div>
      </div>
    </div>
  );
};

export default AnimateScrollX;
