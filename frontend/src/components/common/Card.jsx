import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ coursesData }) => {
  const navigate = useNavigate();

  return (
    <div className="px-2 pb-5 outline-none transition-all duration-300 hover:translate-y-[-4px]">
      <div className="max-w-[300px] w-full h-[400px] mx-auto flex flex-col bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Make the image clickable */}
        <div
          className="h-44 flex-shrink-0 cursor-pointer overflow-hidden"
          onClick={() => navigate(`/courses/${coursesData._id}`)}
        >
          <img
            src={coursesData.banner?.url} // Added optional chaining
            alt={coursesData.title}
            className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-lg line-clamp-1">
            {coursesData.title}
          </h3>

          <p className="text-gray-500 text-xs mt-2 line-clamp-2">
            {coursesData.description}
          </p>

          <div className="flex items-center gap-2 my-4">
            {/* FIXED: Changed 'data' to 'coursesData' */}
            <span className="text-2xl font-bold text-green-600">
              ₹{coursesData.discountedPrice}
            </span>
            <span className="text-sm text-slate-400 line-through">
              ₹{coursesData.price}
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">
              {Math.round(
                ((coursesData.price - coursesData.discountedPrice) /
                  coursesData.price) *
                  100,
              )}
              % OFF
            </span>
          </div>

          <div className="mt-auto flex gap-5 items-center justify-center pb-2">
            <Link
              className="flex items-center justify-center h-[2.8rem] w-[7rem] bg-[#483D8B] border-2 border-white text-white rounded-[0.375rem] font-medium transition-all opacity-90 hover:opacity-100 hover:bg-[#6a5acd] active:scale-95 shadow-md shadow-indigo-100 cursor-pointer max-sm:text-[10px]"
              to={`/courses/${coursesData._id}`}
            >
              View More
            </Link>
            <Link
              className="flex items-center justify-center h-[2.8rem] w-[7rem] bg-[#483D8B] border-2 border-white text-white rounded-[0.375rem] font-medium transition-all opacity-90 hover:opacity-100 hover:bg-[#6a5acd] active:scale-95 shadow-md shadow-indigo-100 cursor-pointer max-sm:text-[10px]"
              to={`/order/${coursesData._id}`}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
