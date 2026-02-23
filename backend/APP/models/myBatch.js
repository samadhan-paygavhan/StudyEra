import mongoose from "mongoose";

const myBatchSchema = new mongoose.Schema(
  {
    // Link to the User who bought the courses
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Array of Course IDs that the user has access to
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true },
);

export const MyBatch = mongoose.model("MyCourse", myBatchSchema);
