import Card from "@/components/common/Card";
import React from "react";

const Hero = ({ course }) => {
  console.log(course);
  return (
    <div className="w-full h-screen bg-[#fcfcfd]">
      <div className="h-full max-w-[1440px] mx-auto flex justify-center items-center">
        <Card coursesData={course} />
      </div>
    </div>
  );
};

export default Hero;
