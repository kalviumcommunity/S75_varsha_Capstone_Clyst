const express = require("express");
const router = express.Router();

// ✅ Import all needed controller functions
const {
  getColleges,
  getCollegeById,
  updateCollege,
  createCollege
} = require("../controllers/collegeController");

// GET all colleges
router.get("/", getColleges);

// GET college by ID
router.get("/:id", getCollegeById);

// PUT update a college
router.put("/:id", updateCollege);

// POST create a new college
router.post("/", createCollege);

// ✅ Export router at the end, after all routes
module.exports = router;
