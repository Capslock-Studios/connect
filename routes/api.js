const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// POST: Create User
router.post("/users", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, profilePicture, location, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email, and password are required!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

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

// GET: Retrieve Users
router.get("/users", async (req, res) => {
    try {
        const users = await User.find().select("-passwordHash");
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

module.exports = router;
