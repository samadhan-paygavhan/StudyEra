import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "./Hero";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";
import { getData } from "@/context/userContext";
import InstructorLogin from "./InstructorLogin";
import InstructorNotLogin from "./InstructorNotLogin";

const InstructorPage = () => {
  const { user } = getData();
  return (
    <>
      <Navbar />
      {user ? <InstructorLogin user={user} /> : <InstructorNotLogin />}
      <ExploreAndFooter />
    </>
  );
};

export default InstructorPage;
