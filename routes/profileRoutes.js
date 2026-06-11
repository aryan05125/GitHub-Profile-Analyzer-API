const express = require("express");

const router = express.Router();

const {
  analyzeProfile,
  getAllProfiles,
  getSingleProfile
} = require("../controllers/profileController");

router.post("/analyze", analyzeProfile);

router.get("/", getAllProfiles);

router.get("/:id", getSingleProfile);

module.exports = router;