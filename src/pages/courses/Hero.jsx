import React, { useState } from "react";
import courseImages from "../../assets/images/courseImages";
import Card from "../../components/common/Card";

const Hero = () => {
  const [viewMore, setViewMore] = useState(false);

  const coursesData = [
    {
      id: 1,
      image: courseImages[0],
      title: "Full Stack",
      description: "The course is best for freshers",
    },
    {
      id: 2,
      image: courseImages[1],
      title: "Data Science",
      description: "Master Python and ML",
    },
    {
      id: 3,
      image: courseImages[2],
      title: "UI/UX Design",
      description: "Design beautiful interfaces",
    },
    {
      id: 4,
      image: courseImages[3],
      title: "DevOps",
      description: "Learn CI/CD and Cloud",
    },
    {
      id: 5,
      image: courseImages[0],
      title: "Mobile App Dev",
      description: "Build iOS and Android apps",
    },
    {
      id: 6,
      image: courseImages[1],
      title: "Cyber Security",
      description: "Protect digital assets",
    },
    {
      id: 7,
      image: courseImages[2],
      title: "Cloud Architect",
      description: "Scale infra with AWS",
    },
    {
      id: 8,
      image: courseImages[3],
      title: "AI/ML Engineer",
      description: "Neural Networks & Deep Learning",
    },
  ];

  const visibleCourses = viewMore ? coursesData : coursesData.slice(0, 4);

  return (
    <section className="bg-[#fcfcfd] min-h-[90vh] w-full flex justify-center items-center px-6 py-16">
      <div className="flex flex-col gap-12 max-w-[1440px] w-full">
        <h2 className="text-center text-3xl md:text-5xl font-black text-[#1A1939] mb-5">
          Master the Skills that{" "}
          <span className="text-[#483D8B]">Shape Your Future</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 transition-all duration-500">
          {visibleCourses.map((course) => (
            <div key={course.id} className="animate-fadeIn">
              <Card coursesData={course} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            className="group flex items-center justify-center p-3 bg-white border-2 border-[#483D8B] text-[#483D8B] rounded-[0.375rem] font-medium ml-4 mr-2 transition-all opacity-80 hover:opacity-100 active:scale-95 shadow-sm cursor-pointer"
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? "Show Less" : "View More Courses"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
