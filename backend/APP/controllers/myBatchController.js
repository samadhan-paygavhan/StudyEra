import { Course } from "../models/courseModel.js";
import { MyBatch } from "../models/myBatch.js";

export const myBatch = async (req, res) => {
  try {
    const { userId } = req.query;

    const userBatch = await MyBatch.findOne({ userId });

    if (!userBatch) {
      return res.status(200).json({
        success: true,
        message: "No courses found for this user",
        courses: [],
      });
    }

    const courses = await Course.find({ _id: { $in: userBatch.courses } });

    res.status(200).json({
      success: true,
      message: "Courses found successfully",
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCourseForWatch = async (req, res) => {
  try {
    const { courseId } = req.params;

    // Find the course and select only the fields needed for the player
    const course = await Course.findById(courseId).select(
      "title description mainVideo category updatedAt",
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course content not found",
      });
    }

    res.status(200).json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
