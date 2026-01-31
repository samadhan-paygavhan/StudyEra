import React from "react";
import Button from "../Button";
import { IoIosSearch } from "react-icons/io";
import NavInput from "./NavInput";

const Navbar = () => {
  const buttonName = [
    {
      name: "Home",
    },

    {
      name: "Teach on StudyEra",
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
    <div className="h-[100px] w-full px-6 lg:px-[8rem] flex justify-between items-center fixed top-0 left-0 z-[1000] bg-white/80 backdrop-blur-[10px] border-b border-black/5 font-['Montserrat',sans-serif]">
      <h1 className=" text-3xl font-bold">StudyEra</h1>
      <NavInput />

      <div className="flex items-center gap-2">
        {buttonName.map((button, idx) => {
          return <Button btnName={button.name} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;
