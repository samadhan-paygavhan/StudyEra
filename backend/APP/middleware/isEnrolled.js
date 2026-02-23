import { MyBatch } from "../models/myBatch.js";

export const isEnrolled = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const userId = req.userId; // Assumes you have a 'protect' middleware before this

    const enrollment = await MyBatch.findOne({
      userId,
      courses: { $in: [courseId] },
    });

    if (!enrollment) {
      return res.status(403).json({
        success: false,
        message: "Access Denied: You have not purchased this course.",
      });
    }

    next(); // User owns the course, proceed to the controller
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
