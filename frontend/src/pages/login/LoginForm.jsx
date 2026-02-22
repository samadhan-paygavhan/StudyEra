import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { getData } from "@/context/userContext";

const LoginForm = () => {
  const { setUser } = getData();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const formSubmit = async (data) => {
    try {
      const URL = "http://localhost:8080/login";
      const res = await axios.post(URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setUser(res.data.user);
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[400px] md:w-1/2 flex flex-col justify-start px-10 py-15 lg:px-20 bg-[#fcfcfd]">
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

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className={`h-14 w-full px-4 rounded-lg bg-gray-100 border border-gray-200 focus:border-[#6a5acd] focus:ring-1 focus:ring-[#6a5acd] outline-none font-medium transition-all
            ${errors.password ? "border-red-500" : ""}`}
            {...register("password", { required: "Password is required" })}
          />
          <button
            type="button"
            onClick={handleShowPassword}
            className="absolute right-3 top-4 text-gray-400 hover:text-[#6a5acd] transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          {errors.password && (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.password.message}
            </p>
          )}
          <Link to={"/forgot-password"} className="text-gray-700 mx-1">
            Forgot your password?
          </Link>
        </div>

        <button
          type="submit"
          className="h-12 w-full mt-4 bg-[#483D8B] hover:bg-[#6a5acd] text-white font-bold rounded-lg transition-colors shadow-lg shadow-indigo-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging into your account.." : "Login"}
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

      <button
        onClick={() =>
          window.open(`http://localhost:8080/auth/google`, "_self")
        }
        className="w-full h-12 flex items-center justify-center border border-[#483D8B] rounded-xl hover:bg-indigo-50 transition-colors text-gray-700 font-medium group"
      >
        <span className="flex items-center gap-3">
          Continue with Google{" "}
          <FaGoogle className="group-hover:scale-110 transition-transform" />
        </span>
      </button>

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
