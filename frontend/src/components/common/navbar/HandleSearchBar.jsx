import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HandleSearchBar = ({ searchInput }) => {
  const [coursesData, setCoursesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/courses");
        setCoursesData(response.data.courses || []);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const filteredData = coursesData.filter((course) =>
    course.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <div className="absolute top-24 bg-white shadow-2xl z-[100] p-5 w-90 rounded-xl border border-gray-100">
      {filteredData.length > 0 ? (
        filteredData.map((course, index) => (
          <button
            onClick={() => navigate(`/api/courses/${course._id}`)}
            key={course._id || index}
            className="w-full text-left px-4 py-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors text-sm font-medium"
          >
            {course.title}
          </button>
        ))
      ) : (
        <p className="text-gray-400 text-sm text-center py-4">
          No results found
        </p>
      )}
    </div>
  );
};

export default HandleSearchBar;
