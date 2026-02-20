import express from "express";
import {
  changePassword,
  forgotPassword,
  getMyProfile,
  login,
  logout,
  signup,
  verification,
  verifyOTP,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { userSchema, validateUser } from "../validators/userValidate.js";

const router = express.Router();

router.post("/signup", validateUser(userSchema), signup);
router.post("/verify", verification);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp/:email", verifyOTP);
router.post("/change-password/:email", changePassword);
router.get("/me", isAuthenticated, getMyProfile);

export default router;
