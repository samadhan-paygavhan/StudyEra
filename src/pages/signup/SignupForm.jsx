import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const formSubmit = async (data) => {
    const URL = "http://localhost:8080/api/signup";
    await axios.post(URL, data);
    console.log(data);
  };

  return (
    <div className="w-max-[500px] md:w-1/2 flex flex-col justify-start px-10 py-15 lg:px-20 bg-[#fcfcfd]">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 text-center md:text-left">
        Sign-Up To Study Era!
      </h2>

      <p className="text-gray-500 mb-8 text-center md:text-left">
        Start your journey with us today.
      </p>

      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            placeholder="Enter Full Name"
            className={`h-14 w-full px-4 rounded-lg bg-gray-100 border focus:border-[#6a5acd] focus:ring-1 focus:ring-[#6a5acd] outline-none font-medium transition-all
             ${errors.fullName ? "border-red-500" : "border-gray-200"}`}
            {...register("fullName", {
              required: { value: true, message: "Fullname is required." },
              minLength: {
                value: 8,
                message: "Full Name is too short (min 8 characters).",
              },
              maxLength: {
                value: 40,
                message: "Full Name is too long (max 40 characters).",
              },
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message:
                  "Numbers and special characters are not allowed in the name.",
              },
            })}
          />

          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1 ml-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            className={`h-14 w-full px-4 rounded-lg bg-gray-100 border border-gray-200 focus:border-[#6a5acd] focus:ring-1 focus:ring-[#6a5acd] outline-none font-medium transition-all
            ${errors.email ? "border-red-500" : ""}`}
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "Please enter a valid email address (e.g., sam@example.com)",
              },
            })}
          />

          {errors.email && (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="number"
            placeholder="Contact Number"
            className={`h-14 w-full px-4 rounded-lg bg-gray-100 border border-gray-200 focus:border-[#6a5acd] focus:ring-1 focus:ring-[#6a5acd] outline-none font-medium transition-all
            ${errors.phone ? "border-red-500" : ""}`}
            {...register("phone", {
              required: { value: true, message: "Contact number is required" },
              pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Please enter a valid 10-digit Indian Contact number",
              },
              minLength: {
                value: 10,
                message: "Contact number must be exactly 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Contact number cannot exceed 10 digits",
              },
            })}
          />

          {errors.phone && (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Create Password"
            className={`h-14 w-full px-4 rounded-lg bg-gray-100 border border-gray-200 focus:border-[#6a5acd] focus:ring-1 focus:ring-[#6a5acd] outline-none font-medium transition-all
            ${errors.password ? "border-red-500" : ""}`}
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must include Uppercase, Lowercase, Number, and Special Character",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-400 text-xs mt-1 ml-1 leading-tight">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="h-12 w-full mt-4 bg-[#483D8B] hover:bg-[#6a5acd] text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating your Account..." : "Continue"}
        </button>
      </form>

      <div className="relative mt-10 mb-6">
        <div className="absolute inset-0 flex items-center">
          <hr className="w-full border-gray-400" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">
            Other log in options
          </span>
        </div>
      </div>

      <div className="flex justify-center gap-10">
        {[<FaGoogle />, <FaFacebookF />].map((brand, index) => (
          <button
            key={index}
            className="w-12 h-12 flex items-center justify-center border-2 border-[#483D8B] rounded-xl hover:bg-indigo-50 transition-colors text-gray-700 opacity-80"
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="mt-10 p-4 bg-gray-200 rounded-xl text-center transition-all hover:bg-gray-300">
        <p className="text-gray-600 text-sm">
          Already have an account?{" "}
          <Link
            className="text-indigo-600 font-bold hover:underline"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
