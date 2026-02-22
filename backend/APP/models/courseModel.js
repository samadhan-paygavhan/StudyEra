import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Course title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  banner: {
    public_id: { type: String, required: true },
    url: { type: String, required: true },
  },

  video: {
    public_id: { type: String },
    url: { type: String },
  },
  category: {
    type: String,
    required: true,
    enum: ["web-dev", "ai-ml", "dataScience", "cyberSecurity"],
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  discontedPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  learningPoints: [
    {
      type: String,
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Course = mongoose.model("Course", courseSchema);
