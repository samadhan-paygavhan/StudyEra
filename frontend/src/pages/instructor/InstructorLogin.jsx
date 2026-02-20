import React, { useState } from "react";
import UploadCourse from "./UploadCourse";
import UploadedCourses from "./UploadedCourses";
import { BookOpen, Library, UploadCloud } from "lucide-react";
import HowToStarted from "./HowToStarted";

const InstructorLogin = ({ user }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeTab, setActiveTab] = useState("how-to");
  const menuItems = [
    {
      id: "how-to",
      label: "How To Start",
      icon: <BookOpen size={18} />,
      component: <HowToStarted />,
    },
    {
      id: "upload",
      label: "Upload Course",
      icon: <UploadCloud size={18} />,
      component: <UploadCourse />,
    },
    {
      id: "list",
      label: "Uploaded Courses",
      icon: <Library size={18} />,
      component: <UploadedCourses />,
    },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="hidden w-60 mx-auto bg-white border-r border-gray-200 py-4 md:block">
        <h2 className="text-[16px] font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">
          {user.fullName}
        </h2>
        <hr className="mb-5" />
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-3 py-2 text-[16px] font-medium rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-[#6a5acd]/10 text-[#483D8B] border-r-4 border-[#6a5acd]"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="min-w-15 min-h-full flex flex-col items-center gap-5 my-2 p-1 md:hidden">
        {menuItems.map((item) => (
          <div key={item.id} className="relative group flex items-center">
            <button
              onClick={() => setActiveTab(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`p-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-[#6a5acd] text-white shadow-md scale-110"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {item.icon}
            </button>

            {hoveredId === item.id && (
              <div className="absolute left-14 z-50 px-3 py-2 ml-2 bg-gray-900 text-white text-xs rounded-md whitespace-nowrap shadow-lg animate-in fade-in slide-in-from-left-1">
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex-1">
        <div className="min-w-full bg-white shadow-sm border border-gray-100 p-6 min-h-full">
          {menuItems.find((m) => m.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default InstructorLogin;
