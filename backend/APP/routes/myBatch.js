import express from "express";
import {
  getCourseForWatch,
  myBatch,
} from "../controllers/myBatchController.js";
import { isEnrolled } from "../middleware/isEnrolled.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
const router = express.Router();

router.get("/mybatch", myBatch);
router.get(
  "/mybatch/course/:courseId",
  isAuthenticated,
  isEnrolled,
  getCourseForWatch,
);

export default router;
