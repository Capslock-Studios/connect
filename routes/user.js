const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

// Create User (POST /api/users)
router.post("/", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, profilePicture, location, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email, and password are required!" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already registered!" });
        }

        // Validate password length
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long!" });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Convert location to object { latitude, longitude }
        let loc = null;
        if (location) {
            const [lat, lon] = location.split(",").map(Number);
            loc = { latitude: lat, longitude: lon };
        }

        const newUser = new User({
            name,
            email,
            passwordHash: hashedPassword,
            phoneNumber,
            profilePicture,
            location: loc,
            role: role || "user"
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully!", user: newUser });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve Users (GET /api/users)
router.get("/", async (req, res) => {
    try {
        const users = await User.find().select("-passwordHash"); // Exclude passwords
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

module.exports = router;
