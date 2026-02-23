import crypto from "crypto";
import Razorpay from "razorpay";
import "dotenv/config";
import { MyBatch } from "../models/myBatch.js";
import User from "../models/userModel.js";

export const order = async (req, res) => {
  console.log("hello");
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const options = req.body;

    if (!options) {
      return res.status(400).json({
        success: false,
        message: "Bad Request",
      });
    }

    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(400).json({
        success: false,
        message: "Bad Request",
      });
    }

    res.status(200).json({
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userEmail,
      courseId,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        message: "Invalid Signature: Payment Verification Failed",
      });
    }

    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const myBatch = await MyBatch.findOneAndUpdate(
      { userId: user._id },
      { $addToSet: { courses: courseId } },
      { upsert: true, new: true },
    );

    return res.status(200).json({
      success: true,
      message: "Purchase Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
