import React from "react";
import Navbar from "../../components/common/navbar/Navbar";
import Hero from "./Hero";
import CourseInfoVideo from "./CourseInfoVideo";
import ExploreAndFooter from "../../components/common/ExploreAndFooter";

const CourseDetailPage = () => {
  const data = [
    {
      title: "Full Stack Web Development",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      description:
        "Master Frontend, Backend, and Databases to become a job-ready developer.",
      category: "Development",
      actualPrice: 2000,
      withDiscountPrice: 1499,
      whatUserLearn: [
        { name: "Modern Frontend (React & Tailwind)", id: 1 },
        { name: "Node.js & Express APIs", id: 2 },
        { name: "MongoDB & PostgreSQL", id: 3 },
        { name: "JWT Authentication", id: 4 },
      ],
      video: "",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero data={data} />
      <CourseInfoVideo video={data[0].video} />
      <ExploreAndFooter />
    </>
  );
};

export default CourseDetailPage;
