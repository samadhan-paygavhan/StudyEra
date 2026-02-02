import React from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import TopCourses from "./TopCourses";
import Testimonials from "./Testimonials";
import Navbar from "../../components/common/navbar/Navbar";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <TopCourses />
      <Testimonials />
      <ExploreAndFooter />
    </>
  );
};

export default HomePage;
