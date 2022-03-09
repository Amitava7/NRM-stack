const mongoose = require('mongoose');
const { Schema } = mongoose ;


const messageSchema =  new Schema({
  mail : String,
  message : String,
  time : String
});

mongoose.model('message', messageSchema);