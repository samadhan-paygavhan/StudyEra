import React from "react";
import TopCourseSlider from "./TopCourseSlider";
import courseImages from "../../assets/images/courseImages";

const TopCourses = () => {
  const topCoursesData = [
    {
      image: courseImages[0],
      title: "Full Stack",
      description: "The course is best for freshers",
    },
    {
      image: courseImages[1],
      title: "Data Science",
      description: "Master Python and ML",
    },
    {
      image: courseImages[2],
      title: "UI/UX Design",
      description: "Design beautiful interfaces",
    },
    {
      image: courseImages[3],
      title: "DevOps",
      description: "Learn CI/CD and Cloud",
    },
  ];

  return (
    <div className="py-10 bg-[#fcfcfd] flex flex-col items-center gap-15">
      <h1 className="font-bold text-3xl">Top Courses</h1>
      <TopCourseSlider topCoursesData={topCoursesData} />
    </div>
  );
};

export default TopCourses;
