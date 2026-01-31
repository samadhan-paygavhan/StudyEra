import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "./Hero";
import Explore from "../../components/common/Explore";
import Footer from "../../components/common/Footer";

const CoursesPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
      <Footer />
    </>
  );
};

export default CoursesPage;
