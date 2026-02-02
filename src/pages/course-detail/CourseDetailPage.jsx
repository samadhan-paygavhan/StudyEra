import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "./Hero";
import CourseInfoVideo from "./CourseInfoVideo";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";

const CourseDetailPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseInfoVideo />
      <ExploreAndFooter />
    </>
  );
};

export default CourseDetailPage;
