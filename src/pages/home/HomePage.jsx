import React from "react";
import Hero from "./Hero";
import TopCourses from "./TopCourses";
import Testimonials from "./Testimonials";
import TrustedBy from "./TrustedBy";
import Navbar from "../../components/common/navbar/Navbar";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <TopCourses />
      <Testimonials />
      <ExploreAndFooter />
    </>
  );
};

export default HomePage;
