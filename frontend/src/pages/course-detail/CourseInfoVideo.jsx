import React from "react";

const CourseInfoVideo = ({ video }) => {
  return (
    <div className="w-full bg-[#f8f9fb] py-20 px-4">
      <div className="max-w-[1000px] mx-auto overflow-hidden rounded-b-2xl shadow-2xl bg-white">
        <div className="flex flex-col ">
          <div className="w-full bg-black aspect-video">
            <video src={video} controls className="w-full h-full object-cover">
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full p-4 flex flex-col justify-center">
            <span className="text-blue-600 font-semibold uppercase text-xs tracking-widest">
              Preview
            </span>

            <h2 className="text-3xl font-bold text-slate-800 mt-4">
              Introduction
            </h2>

            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              Get a quick overview of what this course offers. Learn the
              structure, content, and outcomes before you start.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoVideo;
