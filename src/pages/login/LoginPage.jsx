import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";
import LoginAndSignupImage from "../../components/common/LoginAndSignupImage";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-[#fcfcfd]">
      <div className="flex flex-row justify-center w-full max-w-[1200px] rounded-3xl overflow-hidden mx-auto">
        <LoginAndSignupImage />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
