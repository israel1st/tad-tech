const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MessageSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  messageArray: {
    type: Array,
  },
  imageArray: {
    type: Array,
  },

});

module.exports = Msg = mongoose.model("classmsg", MessageSchema);
