import Card from "@/components/common/Card";
import { getData } from "@/context/userContext";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UploadedCourses = () => {
  const { user } = getData();
  const [uploadedCourses, setUploadedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?._id) return;

      try {
        const response = await axios.get(
          `http://localhost:8080/uploaded-course/${user._id}`,
          { withCredentials: true },
        );

        if (response.data.success) {
          setUploadedCourses(response.data.courses);
        }
      } catch (error) {
        console.error("Error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?._id]);

  if (loading)
    return <p className="text-center py-10">Loading your courses...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {uploadedCourses.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-400">
              Sorry, you haven't uploaded any courses yet 🥲
            </h1>
          </div>
        ) : (
          uploadedCourses.map((course) => (
            <Card key={course._id} coursesData={course} />
          ))
        )}
      </div>
    </div>
  );
};

export default UploadedCourses;
