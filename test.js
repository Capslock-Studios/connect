const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {});

// Define a simple User schema
const User = mongoose.model("user", new mongoose.Schema({
    name: String,
    email: String
}));

// Serve `test.html`
app.use(express.static("public"));

// API to fetch users
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
