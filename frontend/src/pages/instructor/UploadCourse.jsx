import React from "react";
import UploadCourseForm from "./UploadCourseForm";

const UploadCourse = () => {
  return (
    <div className="py-10 bg-[#fcfcfd]">
      <h1 className="text-3xl font-bold text-center text-[#483D8B] mb-15">
        Upload Your Course
      </h1>
      <div className="flex justify-center">
        <UploadCourseForm />
      </div>
    </div>
  );
};

export default UploadCourse;
