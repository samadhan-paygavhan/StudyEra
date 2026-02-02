import React from "react";
import { IoIosSearch } from "react-icons/io";
import NavInput from "./NavInput";
import Buttons from "./Buttons";
import Logo from "../../../assets/images/StudyEra-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm flex items-center h-[100px]">
      <div className="container mx-[1rem] max-sm:flex max-sm:items-center sm:flex items-center justify-between px-4 md:px-8 lg:mx-auto xl:px-[64px] max-w-[1440px]">
        <img
          src={Logo}
          alt="logo"
          className="w-[70px] md:w-[105px] object-cover caret-cyan-900"
        />
        <NavInput />
        <Buttons />
      </div>
    </nav>
  );
};

export default Navbar;
