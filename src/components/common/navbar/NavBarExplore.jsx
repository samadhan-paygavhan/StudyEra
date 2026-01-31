import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const NavBarExplore = () => {
  const [exploreHover, setExploreHover] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(false);

  const courseDetail = [
    {
      name: "Full Stack",
      topics: [
        "HTML, CSS and JS",
        "Modern Frontend",
        "Backend APIs",
        "Database Design",
        "Deployment (AWS/Netlify)",
        "Professional Git Workflow",
      ],
    },
    {
      name: "Machine Learning",
      topics: [
        "Python Fundamentals",
        "Supervised & Unsupervised",
        "Data Preparation",
        "Model Evaluation",
        "Deep Learning Basics",
        "Model Deployment",
      ],
    },
    {
      name: "Data Science",
      topics: [
        "Python",
        "Python Libraries",
        "Machine Learning",
        "Statistics",
        "Deep Learning",
        "Real Life Projects",
      ],
    },
    {
      name: "Cyber Security",
      topics: [
        "Network Security",
        "Ethical Hacking",
        "Vulnerability Assessment",
        "Cryptocurrency",
        "Penetration Testing",
        "Incident Response",
      ],
    },
    {
      name: "Cloud Computing",
      topics: [
        "AWS/Azure Fundamentals",
        "Virtual Machines",
        "Serverless Architectures",
        "Containerization",
        "Database Management",
        "Cloud Security Practices",
      ],
    },
    {
      name: "UI/UX Design",
      topics: [
        "Design Thinking",
        "Wireframing",
        "Information Architecture",
        "Product Roadmapping",
        "A/B Testing",
        "Market Research",
      ],
    },
    {
      name: "Communication Skill",
      topics: [
        "Public Speaking",
        "Presentation Skills",
        "Social Media Communication",
        "Negotiation Skills",
        "Body Language & Gestures",
        "Practice Quiz",
      ],
    },
  ];

  const mouseEnter = () => setExploreHover(true);
  const mouseLeave = () => setExploreHover(false);

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <button className="h-[2.8rem] px-4 bg-[#eee] rounded-md font-semibold hover:text-[#483D8B] transition-all cursor-pointer">
        Explore
      </button>

      {exploreHover && (
        <div className="absolute top-[85px] left-0 h-90 w-[430px] flex bg-[#eee] border border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-[1001] rounded-b-lg">
          <div className="w-[45%] border-r border-black/10 py-4">
            <h3 className="px-4 mb-2 font-bold text-[#1A1939]">
              Explore by Goal
            </h3>
            <div className="flex flex-col">
              {courseDetail.map((course, index) => (
                <div
                  key={index}
                  className="w-full h-[37.5px] px-[15px] flex items-center justify-between text-[1rem] text-[#1A1939] font-medium cursor-pointer transition-all duration-300 hover:bg-[#cfcbeb] hover:text-[#483D8B] group"
                  onMouseEnter={() => setSelectedCourse(course)}
                >
                  <p>{course.name}</p>
                  <FaAngleRight className="fa-solid fa-angle-right text-sm opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {selectedCourse ? (
            <div className="w-[55%] py-4 bg-[#f5f5f5] rounded-br-lg flex flex-col gap-1">
              {selectedCourse.topics.map((topic, index) => (
                <button
                  key={index}
                  className="w-full h-[37.5px] px-[5px] text-left text-[0.95rem] text-gray-700 font-medium bg-transparent border-l-2 border-transparent transition-all duration-200 hover:bg-[#cfcbeb]/50 hover:text-[#483D8B] hover:border-[#483D8B] hover:pl-[25px] active:scale-[0.98]"
                >
                  {topic}
                </button>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default NavBarExplore;
