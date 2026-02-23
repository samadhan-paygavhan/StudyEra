import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/navbar/Navbar";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";
import { getData } from "@/context/userContext";
import axios from "axios";
import { toast } from "sonner";
import MyBatchCard from "./MyBatchCard";

const MyBatchPage = () => {
  const { user } = getData();
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyCourses = async () => {
      if (!user?._id) return;

      try {
        const response = await axios.get("http://localhost:8080/myBatch", {
          params: { userId: user._id },
        });

        if (response.data.success) {
          setMyCourses(response.data.courses);
        }
        console.log("hello");
      } catch (error) {
        console.error("Fetch Error:", error.message);
        toast.error("Failed to load your courses");
      } finally {
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, [user?._id]);

  console.log(myCourses);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 min-h-[100vh] bg-slate-50/50">
        {/* Header Section */}
        <div className="mb-15">
          <p className="text-slate-600 mt-2 text-lg text-center">
            Welcome back,{" "}
            <span className="font-semibold text-[#483D8B]">
              {user?.fullName}
            </span>
            ! Ready to continue your journey?
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#483D8B]"></div>
            <p className="mt-4 text-slate-500 animate-pulse">
              Loading your learning journey...
            </p>
          </div>
        ) : myCourses.length > 0 ? (
          <div className="flex flex-wrap justify-center items-center gap-10 my-5">
            {myCourses.map((course) => (
              <MyBatchCard key={course._id} coursesData={course} />
            ))}
          </div>
        ) : (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center py-32 px-4 text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
              <svg
                className="w-12 h-12 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800">
              No courses found
            </h3>
            <p className="text-slate-500 max-w-sm mt-2">
              You haven't enrolled in any courses yet. Start exploring our
              catalog to begin learning!
            </p>
            <button
              onClick={() => navigate("/courses")}
              className="mt-6 px-6 py-3 bg-[#483D8B] text-white rounded-lg font-semibold hover:bg-[#6a5acd] transition-colors shadow-lg shadow-indigo-100"
            >
              Explore Courses
            </button>
          </div>
        )}
      </div>
      <ExploreAndFooter />
    </>
  );
};

export default MyBatchPage;
