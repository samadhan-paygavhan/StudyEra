import Button from "@/components/common/Button";
import React from "react";

const Hero = ({ data }) => {
  return (
    <div className="w-full bg-[#f8f9fb] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-4">
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            {data.category}
          </span>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {data.description}
          </p>

          <div className="flex items-baseline gap-3 my-4">
            <span className="text-4xl font-bold text-green-600">
              ₹{data.discountedPrice}
            </span>
            <span className="text-xl text-slate-400 line-through">
              ₹{data.price}
            </span>
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">
              25% OFF
            </span>
          </div>

          <div className="flex gap-4">
            <Button btnName="Enroll Now" />
            <button className="border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-50">
              Watch Preview
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={data.banner.url}
              alt={data.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-duration-500"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl rounded-lg hidden lg:block">
            <p className="text-sm font-bold text-slate-800">⭐ 4.9/5 Rating</p>
            <p className="text-xs text-slate-500">From 2k+ Students</p>
          </div>
        </div>
      </div>

      {/* Learning Points Section */}
      <div className="max-w-[1240px] mx-auto mt-20 p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-1 bg-blue-600 rounded-full inline-block"></span>
          What You Will Learn
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.learningPoints.map((topic, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                {idx + 1}
              </div>
              <span className="text-slate-700 font-medium">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
