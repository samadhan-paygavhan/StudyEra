import { getData } from "@/context/userContext";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // Optional: Use an icon library like lucide-react

const Profile = () => {
  const { user } = getData();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-indigo-600 font-semibold text-lg">
          Loading Profile...
        </div>
      </div>
    );
  }

  // Format date safely
  const joinDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "Joined recently";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Sleek Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-gray-500 hover:text-indigo-600 font-medium transition-all mb-6"
        >
          <div className="p-2 bg-white rounded-full shadow-sm group-hover:bg-indigo-50 transition-colors">
            <ArrowLeft size={18} />
          </div>
          Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header/Cover Area */}
          <div className="h-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700"></div>

          {/* User Info Section */}
          <div className="relative px-8 pb-10">
            <div className="relative flex justify-between items-end -mt-12 mb-8">
              {/* Avatar */}
              <div className="h-28 w-28 bg-white p-1.5 rounded-3xl shadow-xl">
                <div className="h-full w-full bg-indigo-100 rounded-2xl flex items-center justify-center text-4xl font-black text-indigo-600 uppercase">
                  {user.fullName?.charAt(0)}
                </div>
              </div>

              <button
                onClick={() => navigate("/api/mybatch")}
                className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 hover:shadow-lg transition-all transform active:scale-95 shadow-md"
              >
                My Courses
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                  {user.fullName}
                </h1>
                {/* Optional Status Badge */}
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase">
                  {user.role || "Student"}
                </span>
              </div>
              <p className="text-gray-500 text-lg font-medium">{user.email}</p>
            </div>

            <hr className="my-8 border-gray-100" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                  Account Status
                </span>
                <p className="text-indigo-900 font-bold mt-1 text-lg">
                  Active Member
                </p>
              </div>

              <div className="p-5 bg-purple-50/50 rounded-2xl border border-purple-100/50">
                <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">
                  Member Since
                </span>
                <p className="text-purple-900 font-bold mt-1 text-lg">
                  {joinDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
