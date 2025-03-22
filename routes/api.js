const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

// POST: Create User
router.post("/users", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, profilePicture, location, role } = req.body;
        if (!name || !email || !password) return res.status(400).json({ error: "Name, email, and password are required!" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const loc = location ? { latitude: Number(location.split(",")[0]), longitude: Number(location.split(",")[1]) } : null;

        const newUser = new User({ name, email, passwordHash: hashedPassword, phoneNumber, profilePicture, location: loc, role: role || "user" });

        await newUser.save();
        res.status(201).json({ message: "User created successfully!", user: newUser });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Retrieve Users (Paginated)
router.get("/users", async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        const users = await User.find().select("-passwordHash").skip((page - 1) * limit).limit(limit);
        const totalUsers = await User.countDocuments();

        res.json({ totalUsers, page, totalPages: Math.ceil(totalUsers / limit), users });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

module.exports = router;
