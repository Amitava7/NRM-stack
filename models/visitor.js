const mongoose = require('mongoose');
const { Schema } = mongoose ;


const visitorSchema =  new Schema({
  ip : String,
  time : String
});

mongoose.model('visitors', visitorSchema);