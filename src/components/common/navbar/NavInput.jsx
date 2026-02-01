import React from "react";
import NavBarExplore from "./NavBarExplore";
import { IoIosSearch } from "react-icons/io";

const NavInput = () => {
  return (
    <>
      <div className="hidden md:flex items-center gap-[1rem] h-full">
        <NavBarExplore />
        <span className="flex items-center border-2 border-black rounded-full px-4 lg:px-2 py-2 bg-[#F1F4F9] transition-all duration-300 focus-within:bg-white focus-within:border-[#483D8B] focus-within:shadow-[0_0_0_4px_rgba(72,61,139,0.15)]">
          <IoIosSearch className="ml-2 text-[1.25rem] text-gray-500" />
          <input
            type="text"
            placeholder="Search here"
            className="xl: h-6 w-38 lg:w-[4.8rem] xl:w-[9rem] border-none mx-4 lg:mx-2 outline-none bg-transparent text-[1.1rem] text-black placeholder:text-gray-400"
          />
        </span>
      </div>

      <div className="md:hidden flex items-center bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors cursor-pointer">
        <IoIosSearch className="text-[1.5rem] text-[#483D8B]" />
      </div>
    </>
  );
};

export default NavInput;
