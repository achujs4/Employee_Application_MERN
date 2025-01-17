const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', new mongoose.Schema({
    employeeID: String,
    name: String,
    designation: String,
    salary: Number,
    department: String,
    location: String
  }));
  
  module.exports  = employeeData;