import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

//Step-1: Redirect to Google login
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    try {
      // 1. Generate Access Token (Short lived - for headers)
      const accessToken = jwt.sign(
        { id: req.user._id, email: req.user.email },
        process.env.SECRET_KEY,
        { expiresIn: "10d" }, // Better security with shorter expiry
      );

      // 2. Generate Refresh Token (Long lived - for cookie)
      const refreshToken = jwt.sign(
        { id: req.user._id },
        process.env.SECRET_KEY,
        { expiresIn: "15d" },
      );

      // 3. Store Refresh Token in HttpOnly Cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.redirect(
        `${process.env.CLIENT_URL}/auth-success?token=${accessToken}`,
      );
    } catch (error) {
      console.error("Google login error:", error);
      res.redirect(`${process.env.CLIENT_URL}/login?error=google_failed`);
    }
  },
);

export default router;
