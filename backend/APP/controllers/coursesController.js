import { Course } from "../models/courseModel.js";

export const courses = async (req, res) => {
  try {
    const courses = await Course.find().select("-mainVideo");
    if (!courses) {
      return res.status(400).json({
        success: false,
        message: "Course Not Found",
        courses: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course Not Found",
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      courses: [],
    });
  }
};

export const uploadedCourse = async (req, res) => {
  try {
    const id = req.params.userId;

    if (!id) {
      return res.status(404).json({
        success: false,
        message: "Id Not Found",
      });
    }
    const courses = await Course.find({ createdBy: id });
    return res.status(200).json({
      success: true,
      message: "Uploaded Courses",
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const courseDetail = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findOne({ _id: courseId }).select("-mainVideo");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course Not Found Try Again",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course has been found",
      course,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
