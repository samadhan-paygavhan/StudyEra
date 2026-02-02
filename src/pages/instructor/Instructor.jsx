import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import Explore from "../../components/common/Explore";
import Footer from "../../components/common/Footer";

const Instructor = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RightSection />
      <LeftSection />
      <Explore />
      <Footer />
    </>
  );
};

export default Instructor;
