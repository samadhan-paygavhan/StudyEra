import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    googleId: { type: String },
    avatar: { type: String },
    isVerified: {
      type: String,
      default: false,
    },
    isLoggedIn: {
      type: String,
      default: false,
    },
    token: {
      type: String,
      default: null,
    },
    otp: {
      type: String,
      default: null,
    },
    otpExpiry: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
