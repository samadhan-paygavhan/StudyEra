import React, { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import sliderImages from "../../assets/images/sliderImages";
import { useNavigate } from "react-router-dom";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const sliderData = [
    {
      img: sliderImages[0],
      title: "Web Development",
      desc: "Build modern, responsive websites with the MERN stack.",
    },
    {
      img: sliderImages[1],
      title: "Machine Learning",
      desc: "Train intelligent algorithms to solve real-world problems.",
    },
    {
      img: sliderImages[2],
      title: "Data Science",
      desc: "Analyze complex data and build predictive models.",
    },
    {
      img: sliderImages[3],
      title: "Cyber Security",
      desc: "Protect digital assets and master ethical hacking.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="pt-[5vh] flex md:min-h-[85vh] items-center bg-[#fcfcfd] overflow-hidden relative max-sm:items-center max-sm:h-[35vh]">
      <div className="absolute top-[-20%] left-[-5%] w-[400px] h-[400px] bg-[#483D8B]/5 rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-row items-center w-full max-w-[1440px] mx-auto px-6 max-sm:px-0 max-sm:mx-0 lg:px-12 gap-10 ">
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="max-xl:hidden w-[45%] xl:flex flex-col justify-center py-10">
          <div key={currentIndex} className="animate-fade-in">
            <span className="text-[#483D8B] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              StudyEra Specialization
            </span>

            <h1 className="text-3xl lg:text-5xl font-black text-[#1A1939] leading-[1.1] mb-6">
              Master <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#483D8B] to-[#6a5acd]">
                {sliderData[currentIndex].title}
              </span>
            </h1>

            <TypingEffect text={sliderData[currentIndex].desc} delay={50} />

            <div className="flex gap-5">
              <button
                className="bg-[#483D8B] hover:bg-[#3b3272] text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:translate-y-[-2px] hover:shadow-xl shadow-indigo-200"
                onClick={() => navigate("/courses")}
              >
                Explore Courses
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE SLIDER */}
        <div className="w-full xl:w-[55%] flex items-center relative sm:h-[50vh]">
          <button
            onClick={prevSlide}
            className="hidden md:block absolute left-4 z-20 bg-white/90 p-3 rounded-full shadow-lg text-[#483D8B] hover:bg-[#483D8B] hover:text-white transition-all active:scale-90"
          >
            <FaAngleLeft size={22} />
          </button>

          <div className="md:h-[520px] w-full overflow-hidden bg-white relative rounded-[2rem] border-5 border-[#F3F4F6] sm:h-[50vh] max-sm:h-[30vh]">
            <img
              key={currentIndex}
              src={sliderData[currentIndex].img}
              alt="StudyEra Banner"
              className="h-full w-full object-cover animate-image-zoom"
            />

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-black/10 backdrop-blur-md px-4 py-2 rounded-full">
              {sliderData.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`cursor-pointer h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "bg-white w-10"
                      : "bg-white/40 w-2 hover:bg-white/60"
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="hidden md:block absolute right-4 z-20 bg-white/90 p-3 rounded-full shadow-lg text-[#483D8B] hover:bg-[#483D8B] hover:text-white transition-all active:scale-90"
          >
            <FaAngleRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
