const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

  passport.use(new GoogleStrategy({
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleSecret,
    callbackURL: '/auth/google/callback'
  }, (a,r,profile,d) => {
    console.log("hihihih",profile)
  }));

  app.get('/',(req,res)=>{
    res.send({ami: "tava"});

  });
  app.get('/auth/google', passport.authenticate('google',{
    scope: ['profile','email']
  }));
  app.get('/auth/google/callback', passport.authenticate('google'));

  const PORT = process.env.PORT || 5000;

  app.listen(PORT);