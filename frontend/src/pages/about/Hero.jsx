import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#1a1a2e] py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#3498db]/5 blur-[120px] rounded-full"></div>

      <div className="text-white text-center max-w-[1440px] mx-auto px-5 relative z-10">
        <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Empowering the{" "}
          <span className="bg-gradient-to-r from-[#3498db] to-[#6a5acd] bg-clip-text text-transparent">
            Next Generation
          </span>{" "}
          <br className="hidden md:block" /> of Developers
        </h1>

        <p className="font-medium text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Bridging the gap between academic theory and industry reality through
          immersive, project-driven learning. Built for the developers of 2026.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/courses")}
            className="px-8 py-4 bg-[#3498db] hover:bg-[#2980b9] rounded-full font-bold transition-all shadow-lg shadow-[#3498db]/20"
          >
            Explore Courses
          </button>
          <button
            onClick={() => navigate("/instructor")}
            className="px-8 py-4 bg-transparent border border-gray-600 hover:border-white rounded-full font-bold transition-all"
          >
            Join as Instructor
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-6">
            Trusted by students from
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold">Google</span>
            <span className="text-xl font-bold">Microsoft</span>
            <span className="text-xl font-bold">Meta</span>
            <span className="text-xl font-bold">Amazon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
