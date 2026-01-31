import React from "react";
import Hero from "./Hero";
import OurMission from "./OurMission";
import WhyWeAreDifferent from "./WhyWeAreDifferent";
import Explore from "../../components/common/Explore";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurMission />
      <WhyWeAreDifferent />
      <Explore />
      <Footer />
    </>
  );
};

export default About;
