const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    registrationDate: { type: Date, default: Date.now },
    //subscription: String,
  });

  const User = mongoose.model('User', UserSchema);  

  const ContentSchema = new mongoose.Schema({
    title: String,
    description: String,
    videoURL: String,
    publicationDate: { type: Date, default: Date.now },
    category: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      //duration: ,
      //cast: String, 
  });

  const Content = mongoose.model('Content', ContentSchema);

  module.exports = { User, Content };