import React from "react";

const RightSection = ({ data }) => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 py-3">
      {/* Image Container */}
      <div className="flex-1 flex justify-start items-center">
        <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-xl transition-transform hover:scale-103 duration-300">
          <img
            src={data.img}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold text-[#483D8B]">{data.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default RightSection;
