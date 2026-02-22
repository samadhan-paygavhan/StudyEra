import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Course } from "../models/courseModel.js";
import Session from "../models/sessionModel.js";

export const courseUpload = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      price,
      discountedPrice,
      learningPoints,
    } = req.body;
    const id = req.params.userId;

    const existingSession = await Session.findOne({ userId: id });
    if (!existingSession) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Please log in as Admin",
      });
    }

    const bannerLocalPath = req.files?.banner?.[0]?.path;
    const videoLocalPath = req.files?.video?.[0]?.path;

    if (!bannerLocalPath || !videoLocalPath) {
      return res.status(400).json({
        success: false,
        message: "Both Banner and Video files are required",
      });
    }

    const banner = await uploadOnCloudinary(bannerLocalPath);
    const video = await uploadOnCloudinary(videoLocalPath);

    if (!banner || !video) {
      return res
        .status(500)
        .json({ success: false, message: "Failed to upload assets to Cloud" });
    }

    const pointsArray = learningPoints
      ? learningPoints.split(",").map((point) => point.trim())
      : [];

    const newCourse = await Course.create({
      title,
      description,
      category,
      price: Number(price) || 0,
      discontedPrice: Number(discountedPrice) || 0,
      learningPoints: pointsArray,
      banner: {
        public_id: banner.public_id,
        url: banner.secure_url,
      },
      video: {
        public_id: video.public_id,
        url: video.secure_url,
      },
      createdBy: id,
    });

    return res.status(201).json({
      success: true,
      message: "Course uploaded successfully",
      data: newCourse,
    });
  } catch (error) {
    console.error("Course upload error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
