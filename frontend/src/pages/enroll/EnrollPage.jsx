import ExploreAndFooter from "@/components/common/ExploreAndFooter";
import Navbar from "@/components/common/navbar/Navbar";
import React from "react";
import Hero from "./Hero";
import Image from "../../assets/images/courseImages/WebDevelopement.png";

const EnrollPage = () => {
  const data = {
    id: 1,
    image: Image,
    title: "Full Stack",
    category: "development",
    description: "The course is best for freshers",
  };
  return (
    <div>
      <Navbar />
      <Hero course={data} />
      <ExploreAndFooter />
    </div>
  );
};

export default EnrollPage;
