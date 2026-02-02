import React from "react";
import Card from "../../components/common/Card";
import TopCourseSlider from "./TopCourseSlider";

const TopCourses = () => {
  const topCoursesData = [
    { title: "Full Stack", description: "The course is best for freshers" },
    { title: "Data Science", description: "Master Python and ML" },
    { title: "UI/UX Design", description: "Design beautiful interfaces" },
    { title: "DevOps", description: "Learn CI/CD and Cloud" },
  ];

  return (
    <div className="py-10 bg-[#fcfcfd] flex flex-col items-center gap-15">
      <h1 className="font-bold text-4xl">Top Courses</h1>
      <TopCourseSlider topCoursesData={topCoursesData} />
    </div>
  );
};

export default TopCourses;
