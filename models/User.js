const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    // select: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    required: true
  },
  profileimage: {
    type: String,
  },
  hasPaid: {
    type: Boolean,
  },
  course: {
    type: String,
  },
  duration: {
    type: Number,
  },
  studentID: {
    type: Number,
  },
  amountpaid: {
    type: Number,
  }

});

module.exports = User = mongoose.model("users", UserSchema);
