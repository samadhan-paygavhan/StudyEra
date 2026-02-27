import React, { useState } from "react";
import NavBarExplore from "./NavBarExplore";
import { IoIosSearch } from "react-icons/io";
import HandleSearchBar from "./HandleSearchBar";

const NavInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;

    setSearchInput(value);
  };
  return (
    <>
      <div className="hidden sm:flex items-center gap-[1rem] h-full">
        <NavBarExplore />
        <span className="flex items-center border-2 border-black rounded-full px-4 lg:px-2 py-2 bg-[#F1F4F9] transition-all duration-300 focus-within:bg-white focus-within:border-[#483D8B] focus-within:shadow-[0_0_0_4px_rgba(72,61,139,0.15)]">
          <IoIosSearch className="ml-2 text-[1.25rem] text-gray-500" />
          <input
            type="text"
            placeholder="Search here"
            className="xl: h-6 w-38 lg:w-[4.8rem] xl:w-[9rem] border-none mx-4 lg:mx-2 outline-none bg-transparent text-[1.1rem] text-black placeholder:text-gray-400"
            value={searchInput}
            onChange={handleInput}
          />
        </span>
        {searchInput.length > 0 && (
          <HandleSearchBar searchInput={searchInput} />
        )}
      </div>
    </>
  );
};

export default NavInput;
