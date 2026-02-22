import express from "express";
import {
  courseDetail,
  courses,
  uploadedCourse,
} from "../controllers/coursesController.js";

const router = express.Router();

router.get("/courses", courses);
router.get("/uploaded-course/:userId", uploadedCourse);
router.get("/courses/:courseId", courseDetail);

export default router;
