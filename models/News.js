const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const NewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  image: {
    type: String,
    // required: true
  },
  imageArray: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now
  },

});

module.exports = News = mongoose.model("news", NewsSchema);
