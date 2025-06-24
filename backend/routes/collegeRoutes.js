const express = require("express");
const router = express.Router();
const { getColleges, getCollegeById } = require("../controllers/collegeController");

// GET all colleges
router.get("/", getColleges);

// GET college by ID
router.get("/:id", getCollegeById);

module.exports = router; // ✅ This is necessary!
