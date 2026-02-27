import Navbar from "@/components/common/navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import CourseInfoVideo from "./CourseInfoVideo";
import ExploreAndFooter from "@/components/common/ExploreAndFooter";

const CourseDetailPage = () => {
  const [courseDetail, setCourseDetail] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/courses/${courseId}`,
        );
        if (response.data.success) {
          setCourseDetail(response.data.course);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    if (courseId) fetchData();
  }, [courseId]);

  if (!courseDetail) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading Course Details...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Hero data={courseDetail} />
      <CourseInfoVideo
        introductionVideo={courseDetail.introductionVideo?.url}
      />
      <ExploreAndFooter />
    </>
  );
};

export default CourseDetailPage;
