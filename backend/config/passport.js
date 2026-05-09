const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// 1. Local Strategy (Email/Password)
passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false, { message: "Email không tồn tại" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return done(null, false, { message: "Sai mật khẩu" });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

// 2. Google Strategy (Móng để bạn điền API Key sau)
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "your_id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "your_secret",
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) return done(null, user);

        user = new User({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          avatar: profile.photos[0].value,
        });
        await user.save();
        done(null, user);
      } catch (err) {
        done(err);
      }
    },
  ),
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
