import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel.js";
import Session from "../models/sessionModel.js";

// ... existing imports
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `/auth/google/callback`, // Ensure this matches your route
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        // 1. Find or Create User
        let user = await User.findOne({ email: profile.emails[0].value });

        if (user) {
          user.avatar = profile.photos[0].value;
          user.googleId = profile.id;
          user.token = accessToken;
          user.isVerified = true;
          user.isLoggedIn = true;
          user.save();
        }

        if (!user) {
          user = await User.create({
            googleId: profile.id,
            fullName: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
            isLoggedIn: true,
            isVerified: true,
            token: accessToken,
          });
        }

        await Session.deleteOne({ userId: user._id });
        await Session.create({ userId: user._id });

        return cb(null, user);
      } catch (error) {
        return cb(error, null);
      }
    },
  ),
);
