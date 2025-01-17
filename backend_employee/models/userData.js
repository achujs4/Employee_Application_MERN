const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['admin', 'user'], default: 'user' }
  }));

  module.exports  = userData;