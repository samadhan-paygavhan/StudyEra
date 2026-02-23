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
    const introductionVideoLocalPath = req.files?.introductionVideo?.[0]?.path;
    const mainVideoLocalPath = req.files?.mainVideo?.[0]?.path;

    if (
      !bannerLocalPath ||
      !introductionVideoLocalPath ||
      !mainVideoLocalPath
    ) {
      return res.status(400).json({
        success: false,
        message: "All files are required",
      });
    }

    const banner = await uploadOnCloudinary(bannerLocalPath);
    const introductionVideo = await uploadOnCloudinary(
      introductionVideoLocalPath,
    );
    const mainVideo = await uploadOnCloudinary(mainVideoLocalPath);

    if (!banner || !introductionVideo || !mainVideo) {
      return res.status(500).json({
        success: false,
        message: "Failed to upload assets to Cloudinary",
      });
    }

    const pointsArray = learningPoints
      ? learningPoints.split(",").map((point) => point.trim())
      : [];

    const newCourse = await Course.create({
      title,
      description,
      category,
      price: Number(price) || 0,
      discountedPrice: Number(discountedPrice) || 0,
      learningPoints: pointsArray,
      banner: {
        public_id: banner.public_id,
        url: banner.secure_url,
      },
      introductionVideo: {
        public_id: introductionVideo.public_id,
        url: introductionVideo.secure_url,
      },
      mainVideo: {
        public_id: mainVideo.public_id,
        url: mainVideo.secure_url,
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
