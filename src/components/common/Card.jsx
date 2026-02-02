import React from "react";
import Button from "./Button";

const Card = ({ course }) => {
  return (
    <div className="px-2 pb-5 outline-none">
      <div className="max-w-[295px] w-full h-[350px] mx-auto flex flex-col bg-white border rounded-lg overflow-hidden shadow-sm">
        <div className="h-40 bg-yellow-400 flex flex-shrink-0 items-center justify-center font-bold">
          Image
        </div>

        <div className="p-4 flex flex-col flex-1 bg-white">
          <h3 className="font-bold text-xl">{course.title}</h3>

          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {course.description}
          </p>

          <div className="mt-auto flex justify-around items-center pb-2">
            <Button btnName="View More" />
            <Button btnName="Enroll" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
