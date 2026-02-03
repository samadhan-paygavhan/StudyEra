import React from "react";
import NavInput from "./NavInput";
import Buttons from "./Buttons";
import Logo from "../../../assets/StudyEra-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm flex items-center h-[100px] border-b border-[#e1e1e1]">
      <div className="container mx-[1rem] max-sm:flex max-sm:items-center sm:flex items-center justify-between px-3 md:px-5 lg:mx-auto xl:px-[64px] max-w-[1440px]">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="logo"
            className="w-[60px] md:w-[95px] object-cover caret-cyan-900"
          />
        </Link>
        <NavInput />
        <Buttons />
      </div>
    </nav>
  );
};

export default Navbar;
