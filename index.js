const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

mongoose.connect(process.env.mongoURI,{ useNewUrlParser: true});

require('./models/user');

const app = express();

app.use(cookieSession({
  maxAge: 30*24*3600*1000,
  keys: [process.env.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());
require('./services/passport');

require('./routes/authRoutes')(app);


  app.get('/',(req,res)=>{
    res.send({ami: "tava"});

  });


  const PORT = process.env.PORT || 5000;

  app.listen(PORT);