import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";

const InstructorPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RightSection />
      <LeftSection />
      <ExploreAndFooter />
    </>
  );
};

export default InstructorPage;
