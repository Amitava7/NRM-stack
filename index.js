const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const path = require('path');
const helmet = require("helmet");
const rateLimit = require('express-rate-limit')

mongoose.connect(process.env.mongoURI,{ useNewUrlParser: true});

require('./models/user');
require('./models/visitor');
require('./models/message');

const Visitor = mongoose.model('visitors');
const Message = mongoose.model('message');

const app = express();
app.use(express.json())
app.use(cookieSession({
  maxAge: 30*24*3600*1000,
  keys: [process.env.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

//app.use(helmet());
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
//app.use(limiter)
require('./services/passport');

require('./routes/authRoutes')(app);

app.get('/api/download',(req,res)=> res.download(path.resolve(__dirname,'client','public','Amitava_Resume.pdf')));

app.get('/api/visitor', (req,res)=> {
  Visitor.findOne({ip: req.ip}).then(visitor=>{
    if(visitor){
      return; 
    }
    new Visitor({ ip : req.ip, time : (new Date()).toString() }).save();
  })
  res.send("Hello")
})

app.post('/api/message', (req,res)=> {
  new Message({ mail : req.body.mail, message: req.body.msg, time : (new Date()).toString() }).save();
  res.send("Hello")
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

  const PORT = process.env.PORT || 5000;

  app.listen(PORT);
  console.log('listening on', PORT, 'with', process.env.NODE_ENV);