import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "./Hero";
import CourseInfoVideo from "./CourseInfoVideo";
import Explore from "../../components/common/Explore";
import Footer from "../../components/common/Footer";

const CourseDetailPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CourseInfoVideo />
      <Explore />
      <Footer />
    </>
  );
};

export default CourseDetailPage;
