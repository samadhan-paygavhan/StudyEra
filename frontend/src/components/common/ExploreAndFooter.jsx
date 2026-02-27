import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ExploreAndFooter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const courseDetail = [
    {
      name: "Full Stack Development",
      shortName: "MERN",
      slug: "full-stack",
      topics: [
        "HTML, CSS and JS",
        "Modern Frontend (React)",
        "Backend APIs (Node/Express)",
        "Database Design (MongoDB)",
        "Deployment (AWS/Netlify)",
        "Professional Git Workflow",
      ],
    },
    {
      name: "Machine Learning",
      shortName: "ML",
      slug: "machine-learning",
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
      shortName: "DS",
      slug: "data-science",
      topics: [
        "Python for Data Science",
        "Data Visualization (Pandas)",
        "Machine Learning Algorithms",
        "Statistical Analysis",
        "Deep Learning with TensorFlow",
        "Real Life Capstone Projects",
      ],
    },
    {
      name: "Cyber Security",
      shortName: "Cyber",
      slug: "cyber-security",
      topics: [
        "Network Security",
        "Ethical Hacking",
        "Vulnerability Assessment",
        "Cryptography",
        "Penetration Testing",
        "Incident Response",
      ],
    },
    {
      name: "Cloud Computing",
      shortName: "Cloud",
      slug: "cloud-computing",
      topics: [
        "AWS/Azure Fundamentals",
        "Virtual Machines",
        "Serverless Architectures",
        "Containerization (Docker)",
        "Database Management",
        "Cloud Security Practices",
      ],
    },
    {
      name: "UI/UX Design",
      shortName: "Design",
      slug: "ui-ux-design",
      topics: [
        "Design Thinking",
        "Wireframing & Prototyping",
        "Information Architecture",
        "Product Roadmapping",
        "User Testing & A/B Testing",
        "Market Research",
      ],
    },
    {
      name: "Communication Skill",
      shortName: "Soft Skills",
      slug: "communication",
      topics: [
        "Public Speaking",
        "Presentation Skills",
        "Social Media Communication",
        "Negotiation Skills",
        "Body Language & Gestures",
        "Practice Quizzes",
      ],
    },
    {
      name: "Professional Certificates",
      shortName: "Certificates",
      slug: "certification",
      topics: [
        "University-Backed Credentials",
        "Skill-Based Micro-Degrees",
        "LinkedIn Verifiable Badges",
        "Aptitude & Assessment Results",
        "Project Completion Honors",
        "Corporate Partner Recognition",
      ],
    },
  ];

  const displayedCourses =
    width < 1024 ? courseDetail.slice(0, 2) : courseDetail;

  return (
    <section className="bg-[#1A1939] text-[#e1e1e1] px-6 lg:px-16 py-12 w-full">
      <div className="max-w-[1440px] mx-auto">
        <h2
          className="font-black text-3xl mb-10 border-[#483D8B] pb-4 
               block md:inline-block 
               max-md:text-2xl 
               max-sm:text-center max-sm:mx-auto max-sm:border-b-0s
               border-b-2"
        >
          Explore StudyEra Specializations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-lg:justify-items-center lg:grid-cols-4 gap-10">
          {displayedCourses.map((course, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h3 className="font-bold text-[#c1c1c1] uppercase tracking-wider text-sm md:text-base">
                {course.name}
              </h3>

              <div className="flex flex-col space-y-2">
                {course.topics.map((topic, ind) => (
                  <p
                    key={ind}
                    className="text-gray-400 text-sm transition-all duration-200"
                  >
                    {topic}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-300 text-[10px] md:text-xs">
          <p>© 2026 StudyEra Educational Platform. All rights reserved.</p>

          <div className="flex gap-4 md:gap-6 mt-4 md:mt-0 uppercase font-semibold tracking-widest">
            <span
              className="hover:text-white cursor-pointer transition-colors"
              onClick={() => navigate("/about")}
            >
              About Us
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreAndFooter;
