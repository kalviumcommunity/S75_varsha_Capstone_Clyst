const College = require("../models/college");

exports.getColleges = async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
};

exports.getCollegeById = async (req, res) => {
  const college = await College.findById(req.params.id);
  res.json(college);
};

exports.updateCollege = async (req, res) => {
  const updated = await College.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};