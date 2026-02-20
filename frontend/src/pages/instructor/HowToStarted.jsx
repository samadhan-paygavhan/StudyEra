import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import PlanningCurrculamImage from "../../assets/images/InstructorImage/PlanningCurriculumImage.png";
import RecordingVideoImage from "../../assets/images/InstructorImage/RecordingVideoImage.png";
import LaunchingCourseImage from "../../assets/images/InstructorImage/LaunchingCourseImage.png";

const HowToStarted = () => {
  const steps = [
    {
      title: "1. Plan your curriculum",
      description:
        "Start with your passion. We provide tools to help you organize your lessons and pick a topic that students are searching for.",
      img: PlanningCurrculamImage,
    },
    {
      title: "2. Record your video",
      description:
        "Use your smartphone or a DSLR. Add a good microphone and you're ready to capture your first lesson from the comfort of your home",
      img: RecordingVideoImage,
    },
    {
      title: "3. Launch your course",
      description:
        "Publish your course to our platform and start earning. Our marketing team helps you reach students across the globe.",
      img: LaunchingCourseImage,
    },
  ];
  return (
    <>
      <div className="py-10 bg-[#fcfcfd]">
        <h1 className="text-3xl font-bold text-center text-[#483D8B] mb-15">
          How to get started
        </h1>

        <div className="max-w-[1200px] mx-auto space-y-20 px-10">
          <LeftSection data={steps[0]} />
          <RightSection data={steps[1]} />
          <LeftSection data={steps[2]} />
        </div>
      </div>
    </>
  );
};

export default HowToStarted;
