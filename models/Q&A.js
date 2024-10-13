const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  answer: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  },

});

module.exports = Question = mongoose.model("questions", QuestionSchema);
