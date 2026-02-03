import React from "react";
import Hero from "./Hero";
import TopCourses from "./TopCourses";
import Testimonials from "./Testimonials";
import TrustedBy from "./TrustedBy";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <TopCourses />
      <Testimonials />
    </>
  );
};

export default HomePage;
