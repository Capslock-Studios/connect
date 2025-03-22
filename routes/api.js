const express = require("express");
const router = express.Router();
const User = require("/models/User"); // Adjust path based on your structure

// Test Route
router.get("/", (req, res) => {
  res.send("WhatsNext API is working!");
});

// Fetch Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

module.exports = router;
