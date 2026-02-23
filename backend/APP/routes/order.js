import express from "express";
import { order, verifyPayment } from "../controllers/razorpayOrder.js";
const router = express.Router();

router.post("/order", order);
router.post("/verify-payment", verifyPayment);

export default router;
