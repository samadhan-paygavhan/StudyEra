import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/common/navbar/Navbar";
import { toast } from "sonner";

const WatchVideo = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        console.log(token);

        const { data } = await axios.get(
          `http://localhost:8080/mybatch/course/${courseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (data.success) {
          setCourse(data.course);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Access denied");
        console.log(error.response);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (courseId) fetchCourseDetails();
  }, [courseId]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        <span className="ml-3 text-gray-600">Loading your lesson...</span>
      </div>
    );

  console.log(course);
  console.log(course.mainVideo.url);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT: Main Video & Info Section */}
          <div className="flex-1 lg:w-[70%]">
            {/* Video Player Container */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video ring-1 ring-white/10">
              {course?.mainVideo?.url ? (
                <video
                  key={course._id}
                  controls
                  controlsList="nodownload"
                  className="w-full h-full"
                  poster={course?.thumbnail}
                >
                  <source src={course.mainVideo.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 bg-slate-900">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500 mb-4"></div>
                  <p>Loading Video Stream...</p>
                </div>
              )}
            </div>

            {/* Course Info Below Video */}
            <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  {course?.category || "Course"}
                </span>
                <span className="text-slate-400 text-sm">•</span>
                <span className="text-slate-500 text-sm italic">
                  Updated recently
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                {course?.title || "Loading Course Title..."}
              </h1>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  About this Lesson
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-none">
                  {course?.description ||
                    "No description provided for this lesson."}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar - Course Content */}
          <div className="lg:w-[30%]">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
              <div className="bg-slate-50 p-5 border-b border-slate-200">
                <h2 className="text-xl font-bold text-slate-900">
                  Course Curriculum
                </h2>
              </div>

              <div className="p-2 max-h-[60vh] overflow-y-auto">
                {/* Active Lesson */}
                <div className="group p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl flex items-center gap-4 cursor-pointer transition-all hover:bg-indigo-50">
                  <div className="h-10 w-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-md shadow-indigo-200">
                    <span className="text-xs">▶</span>
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-bold text-indigo-600 uppercase tracking-tighter">
                      Current Lesson
                    </span>
                    <p className="text-sm font-semibold text-slate-800 line-clamp-1">
                      1. {course?.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                <button className="text-indigo-600 text-sm font-bold hover:underline">
                  View All Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WatchVideo;
