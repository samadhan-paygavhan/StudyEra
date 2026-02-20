import React from "react";
import { Rocket, Users, Briefcase } from "lucide-react";

const WhyWeAreDifferent = () => {
  const whyDifferent = [
    {
      id: 1,
      name: "Project-First",
      icon: <Rocket className="w-10 h-10 text-[#3498db]" />,
      description:
        "Skip the theory-heavy lectures. You’ll build production-ready applications from day one to develop a portfolio that gets noticed.",
    },
    {
      id: 2,
      name: "Expert Mentors",
      icon: <Users className="w-10 h-10 text-[#3498db]" />,
      description:
        "Gain insights from industry veterans. Our mentors bring experience from tech giants like Google, Meta, and Amazon to your screen.",
    },
    {
      id: 3,
      name: "Career Growth",
      icon: <Briefcase className="w-10 h-10 text-[#3498db]" />,
      description:
        "We provide end-to-end support, from resume building to mock interviews, ensuring you are job-ready from the start.",
    },
  ];

  return (
    <div className="w-full bg-[#fcfcfd] py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <h1 className="font-bold text-4xl text-center mb-4">
          Why We Are <span className="text-[#3498db]">Different</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We don't just teach code; we launch careers through a proven
          methodology.
        </p>

        <div className="flex justify-center flex-wrap gap-8">
          {whyDifferent.map((step) => (
            <div
              key={step.id}
              className="w-72 p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 bg-[#3498db]/10 rounded-full">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {step.name}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreDifferent;
