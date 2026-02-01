import React from "react";
import { IoIosSearch } from "react-icons/io";
import NavInput from "./NavInput";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm flex items-center h-[100px]">
      <div className="container mx-[1rem] sm:flex items-center justify-between px-4 md:px-8 lg:mx-auto xl:px-[64px] max-w-[1440px]">
        <h1 className="text-2xl font-bold text-[#1A1939]">StudyEra</h1>
        <NavInput />
        <Buttons />
      </div>
    </nav>
  );
};

export default Navbar;
