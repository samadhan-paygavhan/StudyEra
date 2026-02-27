import React, { useEffect, useState } from "react";
import Navbar from "../../components/common/navbar/Navbar";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";
import { getData } from "@/context/userContext";
import axios from "axios";
import { toast } from "sonner";
import MyBatchCard from "./MyBatchCard";
import { useNavigate } from "react-router-dom";

const MyBatchPage = () => {
  const { user } = getData();
  const [myCourses, setMyCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyCourses = async () => {
      if (!user?._id) return;

      try {
        const response = await axios.get("http://localhost:8080/api/myBatch", {
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
            <h3 className="text-xl font-bold text-slate-800">
              No courses found
            </h3>
            <p className="text-slate-500 max-w-sm mt-2">
              You haven't enrolled in any courses yet. Start exploring our
              catalog to begin learning!
            </p>
            <button
              onClick={() => navigate("/api/courses")}
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
