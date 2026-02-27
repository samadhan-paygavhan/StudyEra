import { getData } from "@/context/userContext";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const UploadCourseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const userData = getData();

  const formSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("price", data.price);
      formData.append("discountedPrice", data.discountedPrice);
      formData.append("learningPoints", data.learningPoints);

      if (data.banner[0]) {
        formData.append("banner", data.banner[0]);
      }
      if (data.introductionVideo[0]) {
        formData.append("introductionVideo", data.introductionVideo[0]);
      }
      if (data.mainVideo[0]) {
        formData.append("mainVideo", data.mainVideo[0]);
      }

      const res = await axios.post(
        `http://localhost:8080/api/course-upload/${userData.user._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      toast.success(res.data.message || "Course uploaded successfully!");
      reset();
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(res.data.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="w-full max-w-4xl mx-auto space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Course Title
          </label>
          <input
            type="text"
            placeholder="e.g. Master MERN Stack"
            className={`h-12 w-full px-4 rounded-lg bg-gray-50 border outline-none mt-2 transition-all focus:border-[#6a5acd]
                    ${errors.title ? "border-red-500" : "border-gray-200"}`}
            {...register("title", {
              required: "Title is required.",
              minLength: {
                value: 5,
                message: "Min 5 characters required.",
              },
              maxLength: {
                value: 30,
                message: "Max 30 characters allowed.",
              },
              pattern: {
                value: /^[a-zA-Z0-9\s]+$/,
                message: "Numbers and letters only, please.",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Course Banner (Image)
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("banner", {
              required: "Banner image is required",
            })}
            className="w-full h-12 px-2 py-1.5 rounded-lg bg-gray-50 border border-gray-200 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-[#6a5acd]/10 file:text-[#483D8B] mt-2 cursor-pointer"
          />
          {errors.banner && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.banner.message}
            </p>
          )}
        </div>
      </div>

      {/* 2nd FIELD: Short Description */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 ml-1">
          Course Short Description
        </label>
        <textarea
          placeholder="Write a brief overview of your course..."
          rows={4}
          className={`w-full p-4 mt-2 rounded-lg bg-gray-50 border outline-none font-medium transition-all focus:border-[#6a5acd] focus:ring-1 focus:ring-[#6a5acd]
                ${errors.description ? "border-red-500" : "border-gray-200"}`}
          {...register("description", {
            required: { value: true, message: "Description is required." },
            minLength: {
              value: 10,
              message: "Description is too short (min 10 characters).",
            },
            maxLength: {
              value: 150,
              message: "Description is too long (max 150 characters).",
            },
          })}
        />

        {errors.description && (
          <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
            <span className="font-bold">!</span> {errors.description.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1">
        <div>
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Category
          </label>
          <select
            {...register("category", {
              required: "Please select a category",
            })}
            className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#6a5acd] outline-none mt-2"
          >
            <option value="">Select Category</option>
            <option value="web-dev">Web Development</option>
            <option value="ai-ml">AI-ML</option>
            <option value="dataScience">Data Science</option>
            <option value="cyberSecurity">Cyber Security</option>
          </select>

          {errors.topics && (
            <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
              <span className="font-bold">!</span> {errors.category.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Actual Price (₹)
          </label>
          <input
            type="number"
            {...register("price", { required: "Price is required" })}
            className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#6a5acd] outline-none mt-2"
            placeholder="e.g. 1999"
          />
          {errors.topics && (
            <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
              <span className="font-bold">!</span> {errors.price.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 ml-1">
            Discounted Price (₹)
          </label>
          <input
            type="number"
            {...register("discountedPrice", {
              required: "Discounted Price is required",
            })}
            className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#6a5acd] outline-none mt-2"
            placeholder="e.g. 1499"
          />
          {errors.topics && (
            <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
              <span className="font-bold">!</span> {errors.discounted.message}
            </p>
          )}
        </div>
      </div>

      {/* LISTS: Topics & Learning Points */}
      <div className="grid grid-cols-1">
        <div>
          <label className="text-sm font-semibold text-gray-700 ml-1">
            What students will learn (Max 4)
          </label>
          <textarea
            {...register("learningPoints", { required: "Required" })}
            placeholder="Build real apps, Master API logic..."
            className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 h-24 mt-2"
          />
          {errors.topics && (
            <p className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1">
              <span className="font-bold">!</span>{" "}
              {errors.learningPoints.message}
            </p>
          )}
        </div>
      </div>

      {/* VIDEO UPLOAD */}
      <div>
        <label className="text-sm font-semibold text-gray-700 ml-1">
          Course Introduction Video
        </label>
        <div className="mt-2 border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
          <input
            type="file"
            accept="video/*"
            {...register("introductionVideo", {
              required: "Please upload a introduction video",
            })}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#6a5acd] file:text-white"
          />
          <p className="text-xs text-gray-400 mt-2">
            MP4, WebM preferred. Max size 10MB.
          </p>
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold text-gray-700 ml-1">
          Video Lecture (One Shot Main Content)
        </label>
        <div className="mt-2 border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer">
          <input
            type="file"
            accept="video/*"
            {...register("mainVideo", {
              required: "Please upload a lecture video",
            })}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-[#6a5acd] file:text-white"
          />
          <p className="text-xs text-gray-400 mt-2">
            MP4, WebM preferred. Max size 500MB.
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-[#6a5acd] text-white font-bold rounded-xl shadow-lg hover:bg-[#483D8B] transition-all transform active:scale-95"
        disabled={isSubmitting}
      >
        {!isSubmitting ? "Launch Study Era Course" : "Course Uploading"}
      </button>
    </form>
  );
};

export default UploadCourseForm;
