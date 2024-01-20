import { testimonialsData } from "@/src/utils/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const SlickSlider = () => {
  const sittings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 3,
    slideToScroll: 1,
    initialSlide: 1,
    touchMove: true,
    useCSS: true,
    responsive: [
      {
        breakpoint: 1000,
        sittings: {
          slideToShow: 2,
          slideToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        sittings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slick">
      <Slider {...sittings}>
        {
          testimonialsData.map((comment, i) => (
          <div key={i} className="s-comment">
            {/* upper side  */}
            <div className="content">
              <Image
                src={"./apos.svg"}
                className="apos-slider"
                alt="apos"
                width={40}
                height={30}
              />
              <span>{comment.comment}</span>
            </div>
            {/* Lower side */}
            <div className="comment-info">
              <div className="avatar">
              {comment.name[0]}
              </div>
              <div className="person">
                <span>{comment.name}</span>
                <span>{comment.profession}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
