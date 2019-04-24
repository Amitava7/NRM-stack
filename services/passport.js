const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

  passport.use(new GoogleStrategy({
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleSecret,
    callbackURL: '/auth/google/callback'
  }, (a,r,profile,d) => {
    console.log("hhohohohoho",profile)
  }));