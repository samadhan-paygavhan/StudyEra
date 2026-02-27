import React, { useEffect, useState } from "react";
import TopCourseSlider from "./TopCourseSlider";
import axios from "axios";

const TopCourses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses");
        setCoursesData(response.data.courses);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();
  }, []);
  const topCoursesData = coursesData.slice(0, 4);
  return (
    <div className="py-10 bg-[#fcfcfd] flex flex-col items-center gap-15">
      <h1 className="font-bold text-3xl">Top Courses</h1>

      {topCoursesData.length > 0 ? (
        <TopCourseSlider
          key={topCoursesData._id}
          topCoursesData={topCoursesData}
        />
      ) : (
        <div className="flex flex-col items-center py-10">
          <h2 className="text-xl text-gray-500">
            Sorry, no courses found at the moment.
          </h2>
        </div>
      )}
    </div>
  );
};

export default TopCourses;
