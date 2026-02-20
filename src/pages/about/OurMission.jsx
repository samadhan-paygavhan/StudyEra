import React from "react";
import AboutImage from "../../assets/images/AboutImages/OurMissionImage.jpg";

const OurMission = () => {
  return (
    <div className="w-full bg-[#fcfcfd] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Our <span className="text-[#3498db]">Mission</span>
          </h1>

          <div className="text-gray-600 text-lg leading-relaxed space-y-4">
            <p>
              <span className="font-bold text-gray-800 underline decoration-[#3498db] decoration-2">
                Founded in 2025
              </span>
              , Study Era emerged from a critical realization: the tech
              landscape evolves faster than traditional curricula can keep up.
              We believe students shouldn't just learn to code—they should{" "}
              <span className="text-[#6a5acd] font-bold">learn to build.</span>
            </p>
            <p>
              Our platform is designed to move beyond syntax. We focus on{" "}
              <span className="font-bold text-gray-800">
                problem-solving architecture
              </span>{" "}
              and{" "}
              <span className="font-bold text-gray-800">
                industry-standard workflows
              </span>
              , making high-quality tech education accessible to every aspiring
              developer, everywhere.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-[#6a5acd] font-bold uppercase tracking-widest text-sm">
              Project-Based • Industry Ready • Global Access
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#3498db]/10 rounded-2xl -z-10"></div>

            <img
              src={AboutImage}
              alt="Our Mission"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 cursor-pointer border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
