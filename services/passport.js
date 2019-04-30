const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require ('mongoose');
const User = mongoose.model('users');


passport.serializeUser((user,done)=>{
  done(null,user.id);
})
passport.deserializeUser((id,done)=>{
  User.findById(id).then(user=>{done(null,user)});
})
  passport.use(new GoogleStrategy({
    clientID: process.env.googleClientID,
    clientSecret: process.env.googleSecret,
    callbackURL: '/auth/google/callback'
  }, (a,r,profile,d) => {
    User.findOne({googleId: profile.id}).then(user=>{
      if(user){
        d(null,user);
      }else{
        new User({ googleId : profile.id, name : profile.displayName.split(' ')[0]}).save().then(user=> d(null,user));
      }
    })
  }));

