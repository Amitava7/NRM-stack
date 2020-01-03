const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');

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

app.get('/api/download',(req,res)=> res.download(path.resolve(__dirname,'client','public','Amitava-Resume.pdf')));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

  const PORT = process.env.PORT || 5000;

  app.listen(PORT);
  console.log('listening on', PORT, 'with', process.env.NODE_ENV);