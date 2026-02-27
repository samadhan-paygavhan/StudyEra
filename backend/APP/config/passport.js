import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel.js";
import Session from "../models/sessionModel.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        // 1. Check if user exists and update login status
        let user = await User.findOneAndUpdate(
          { googleId: profile.id },
          { isLoggedIn: true },
          { new: true }, // Returns the updated document
        );

        // 2. If user doesn't exist, create them
        if (!user) {
          user = await User.create({
            googleId: profile.id,
            fullName: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            isLoggedIn: true,
            isVerified: true,
          });
        }

        // 3. Handle Session (Use user._id consistently)
        await Session.deleteOne({ userId: user._id }); // Delete any old session for this user

        await new Session({
          userId: user._id,
        }).save();

        return cb(null, user);
      } catch (error) {
        return cb(error, null);
      }
    },
  ),
);
