import React, { useState } from "react";
import courseImages from "../../assets/images/courseImages";
import Card from "../../components/common/Card";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("all");

  console.log(activeTab);

  const coursesData = [
    {
      id: 1,
      image: courseImages[0],
      title: "Full Stack",
      category: "development",
      description: "The course is best for freshers",
    },

    {
      id: 2,
      image: courseImages[1],
      title: "Data Science",
      category: "dataScience",
      description: "Master Python and ML",
    },

    {
      id: 3,
      image: courseImages[3],
      title: "DevOps",
      category: "cloudComputing",
      description: "Learn CI/CD and Cloud",
    },
  ];

  const courseCategory = [
    { name: "All", category: "all", id: 1 },
    { name: "Development", category: "development", id: 2 },
    { name: "AI/ML", category: "aiml", id: 3 },
    { name: "Data Science", category: "dataScience", id: 4 },
    { name: "Cyber Security", category: "cyberSecurity", id: 5 },
  ];

  const activeCategoryCourse = coursesData.filter((course) => {
    if (activeTab === "all") {
      return coursesData;
    }

    return course.category === activeTab;
  });

  console.log(activeCategoryCourse);

  return (
    <section className="bg-[#fcfcfd] min-h-[90vh] w-full flex justify-center items-start px-6 py-16">
      <div className="flex flex-col gap-12 max-w-[1440px] w-full">
        <h2 className="text-center text-3xl md:text-5xl font-black text-[#1A1939] mb-5">
          Master the Skills that{" "}
          <span className="text-[#483D8B]">Shape Your Future</span>
        </h2>

        <div className="flex justify-center items-center gap-6 border-b border-gray-100 pb-2">
          {courseCategory.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(course.category)}
              className={`px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-t-lg
        ${
          activeTab === course.category
            ? "bg-[#6a5acd]/10 text-[#6a5acd] border-b-4 border-[#6a5acd]"
            : "text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-700"
        }
      `}
            >
              {course.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 transition-all duration-500">
          {activeCategoryCourse && activeCategoryCourse.length > 0 ? (
            activeCategoryCourse.map((course) => (
              <div key={course.id} className="animate-fadeIn">
                <Card coursesData={course} />
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center py-20 text-gray-400">
              <p className="text-lg font-medium">
                No Courses Available In This Category
              </p>
              <span className="text-sm italic">Try selecting another tab!</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
