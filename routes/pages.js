const express = require("express");
const path = require("path");
const router = express.Router();

// Serve User Page
router.get("/models/user", (req, res) => {
  res.sendFile(path.join(__dirname, "../models", "user.html"));
});

// Serve Company Page
router.get("/models/company", (req, res) => {
  res.sendFile(path.join(__dirname, "../models", "company.html"));
});

// Serve Product Page
router.get("/models/product", (req, res) => {
  res.sendFile(path.join(__dirname, "../models", "product.html"));
});

module.exports = router;
