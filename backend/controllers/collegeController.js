const College = require("../models/college");

// GET all colleges
exports.getColleges = async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
};

// GET college by ID
exports.getCollegeById = async (req, res) => {
  const college = await College.findById(req.params.id);
  res.json(college);
};

// PUT update a college
exports.updateCollege = async (req, res) => {
  const updated = await College.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// POST create a new college
exports.createCollege = async (req, res) => {
  const college = new College(req.body);
  await college.save();
  res.status(201).json(college);
};
