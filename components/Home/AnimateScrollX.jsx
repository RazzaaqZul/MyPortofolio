import React from "react";

import ItemSlide from "./ItemSlide";
const AnimateScrollX = () => {
  return (
    <div className="container_animate">
      <div className="container_scroll">
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
