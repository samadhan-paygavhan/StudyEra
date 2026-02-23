import express from "express";
import { upload } from "../middleware/multer.js";
import { courseUpload } from "../controllers/courseUploadController.js";

const router = express.Router();

router.post(
  "/course-upload/:userId",
  upload.fields([
    { name: "banner", maxCount: 1 },
    { name: "introductionVideo", maxCount: 1 },
    { name: "mainVideo", maxCount: 1 },
  ]),
  courseUpload,
);

export default router;
