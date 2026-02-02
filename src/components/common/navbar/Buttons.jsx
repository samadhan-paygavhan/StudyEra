import React, { useState } from "react";
import Button from "../Button";
import { IoReorderThreeOutline } from "react-icons/io5";

const Buttons = () => {
  const [toggle, setToggle] = useState(false);
  const buttonName = [
    {
      name: "Home",
    },

    {
      name: "Instructor",
    },

    {
      name: "About",
    },

    {
      name: "Login",
    },

    {
      name: "SignUp",
    },
  ];
  return (
    <>
      <div className="hidden lg:flex items-center gap-1">
        {buttonName.map((button, idx) => {
          return <Button btnName={button.name} key={idx} />;
        })}
      </div>

      <div className="lg:hidden max-sm:flex items-center">
        <div className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 active:scale-90 group">
          <IoReorderThreeOutline
            className="text-[2.5rem] text-[#1A1939] group-hover:text-[#483D8B] transition-colors"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        {toggle ? (
          <div className="absolute top-[85px] right-[2rem] w-[200px] bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-2xl py-3 z-[2000] animate-fade-in origin-top-right">
            {buttonName.map((btn, idx) => (
              <button
                key={idx}
                className="w-full h-[48px] px-6 text-left text-[1rem] text-[#1A1939] font-medium bg-transparent border-l-4 border-transparent transition-all duration-200 hover:bg-[#cfcbeb]/30 hover:text-[#483D8B] hover:border-[#483D8B] hover:pl-8 active:scale-95"
              >
                {btn.name}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Buttons;
