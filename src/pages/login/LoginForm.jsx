import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const formSubmit = async (data) => {
    const URL = "http://localhost:8080/api/signup";
    await axios.get(URL, data);
    console.log(data);
  };
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-10 lg:px-20 bg-[#fcfcfd]">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
        Welcome Back!
      </h2>

      <form onSubmit={handleSubmit(formSubmit)} className="flex flex-col gap-4">
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            className={`h-14 w-full px-4 rounded-lg bg-gray-100 border border-gray-200 focus:border-[#6a5acd] focus:ring-1 focus:ring-[#6a5acd] outline-none font-medium transition-all
            ${errors.email ? "border-red-500" : ""}`}
            {...register("email", {
              required: { value: true, message: "Email is required" },
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
            type="password"
            placeholder="Enter Password"
            className={`h-14 w-full px-4 rounded-lg bg-gray-100 border border-gray-200 focus:border-[#6a5acd] focus:ring-1 focus:ring-[#6a5acd] outline-none font-medium transition-all
            ${errors.password ? "border-red-500" : ""}`}
            {...register("password", { required: "Password is required" })}
          />

          {errors.password && (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="h-12 w-full mt-4 bg-[#483D8B] hover:bg-[#6a5acd] text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
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
          Don't have an account?{" "}
          <Link
            className="text-indigo-600 font-bold hover:underline"
            to={"/signup"}
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
