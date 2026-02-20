import Card from "@/components/common/Card";
import { getData } from "@/context/userContext";
import React from "react";

const UploadedCourses = () => {
  const { user } = getData();
  return (
    <>
      {true ? (
        <h1 className="text-2xl font-bold py-10 text-center text-gray-500">
          Sorry, You doesn't uploaded any course 🥲
        </h1>
      ) : (
        ""
      )}
    </>
  );
};

export default UploadedCourses;
