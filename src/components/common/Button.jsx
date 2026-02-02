import React from "react";

const Button = ({ btnName }) => {
  return (
    <>
      {btnName === "SignUp" ||
      btnName === "View More" ||
      btnName === "Enroll" ? (
        <button className="h-[2.8rem] w-[7rem] bg-[#483D8B] border-2 border-white text-white rounded-[0.375rem] font-medium transition-all opacity-90 hover:opacity-100 hover:bg-[#6a5acd] active:scale-95 shadow-md shadow-indigo-100 cursor-pointer">
          {btnName}
        </button>
      ) : btnName === "Login" ? (
        <button className="h-[2.8rem] w-[7rem] bg-white border-2 border-[#483D8B] text-[#483D8B] rounded-[0.375rem] font-medium ml-4 mr-2 transition-all opacity-80 hover:opacity-100 active:scale-95 shadow-sm cursor-pointer">
          {btnName}
        </button>
      ) : (
        <button className="h-[2.8rem] flex items-center px-4 rounded-[0.375rem] text-[1.05rem] text-black font-medium opacity-80 transition-all duration-400 hover:bg-[#e1e1e1] hover:opacity-100 hover:text-[#483D8B] active:scale-95 cursor-pointer">
          {btnName}
        </button>
      )}
    </>
  );
};

export default Button;
