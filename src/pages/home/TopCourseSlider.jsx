import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from "../../components/common/Card";

const TopCourseSlider = ({ topCoursesData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl px-16 mx-auto">
      <Slider {...settings}>
        {topCoursesData.map((d, index) => {
          return <Card key={index} coursesData={d} />;
        })}
      </Slider>
    </div>
  );
};

export default TopCourseSlider;
