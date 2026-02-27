import React, { useState } from "react";
import LocalButton from "../Button";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getData } from "@/context/userContext";

import UserProfileLogo from "./UserProfileLogo";

const Buttons = () => {
  const { user } = getData();
  const [toggle, setToggle] = useState(false);

  const primaryButtonName = [
    {
      name: "Home",
      route: "/",
    },

    {
      name: "Courses",
      route: "/api/courses",
    },

    {
      name: "Instructor",
      route: "/api/instructor",
    },

    {
      name: "About",
      route: "/api/about",
    },
  ];

  const loginAndSignupButton = [
    {
      name: "Login",
      route: "/api/login",
    },

    {
      name: "SignUp",
      route: "/api/signup",
    },
  ];

  return (
    <>
      <div className="hidden lg:flex items-center">
        {primaryButtonName.map((button, idx) => {
          return (
            <LocalButton btnName={button.name} key={idx} url={button.route} />
          );
        })}
        {!user ? (
          loginAndSignupButton.map((btn, idx) => {
            return <LocalButton btnName={btn.name} key={idx} url={btn.route} />;
          })
        ) : (
          <UserProfileLogo />
        )}
      </div>

      <div className="lg:hidden max-sm:flex items-center">
        <div className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 active:scale-90 group">
          <IoReorderThreeOutline
            className="text-[2.5rem] text-[#09090f] group-hover:text-[#483D8B] transition-colors cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        {toggle ? (
          <div className="absolute top-[85px] right-[2rem] w-[200px] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-2xl py-3 z-[2000] animate-fade-in origin-top-right">
            {primaryButtonName.map((btn, idx) => (
              <Link
                key={idx}
                to={`${btn.route}`}
                onClick={() => setToggle(false)}
                className="flex items-center w-full h-[48px] px-6 text-[1rem] text-[#1A1939] font-medium border-l-4 border-transparent transition-all duration-200 hover:bg-[#cfcbeb]/30 hover:text-[#483D8B] hover:border-[#483D8B] hover:pl-8 active:scale-95"
              >
                {btn.name}
              </Link>
            ))}
          </div>
        ) : null}
        {user && <UserProfileLogo />}
      </div>
    </>
  );
};

export default Buttons;
