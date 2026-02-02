import React from "react";
import Hero from "./Hero";
import OurMission from "./OurMission";
import WhyWeAreDifferent from "./WhyWeAreDifferent";
import Navbar from "../../components/common/navbar/Navbar";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurMission />
      <WhyWeAreDifferent />
      <ExploreAndFooter />
    </>
  );
};

export default About;
