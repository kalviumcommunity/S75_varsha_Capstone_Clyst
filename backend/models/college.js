const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  name: String,
  location: String,
  courses: [String],
  rating: Number,
});

module.exports = mongoose.model("College", collegeSchema);
