import React from "react";
import LoginAndSignupImage from "../../components/common/LoginAndSignupImage";
import SignupForm from "./SignupForm";
import Navbar from "../../components/common/navbar/Navbar";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";

const SignupPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfd]">
        <div className="flex flex-row justify-center w-full max-w-[1200px] rounded-3xl overflow-hidden mx-auto">
          <LoginAndSignupImage />
          <SignupForm />
        </div>
      </div>
      <ExploreAndFooter />
    </>
  );
};

export default SignupPage;
