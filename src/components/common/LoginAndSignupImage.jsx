import React from "react";
import SignupAndLoginImage from "../../assets/SignupAndLoginImage.png";

const LoginAndSignupImage = () => {
  return (
    <div className="hidden xl:flex w-1/2 items-start justify-center">
      <img
        src={SignupAndLoginImage}
        alt="Study Era Illustration"
        className="max-h-[650px] w-auto object-contain transform hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default LoginAndSignupImage;
