const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
      console.error("❌ MongoDB Connection Error:", err);
      process.exit(1); // Exit process if DB fails to connect
  });

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }, // Store hashed password
    phoneNumber: { type: String },
    profilePicture: { type: String },
    location: { 
        latitude: { type: Number }, 
        longitude: { type: Number }
    },
    role: { type: String, enum: ["user", "business_owner", "admin"], default: "user" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

// POST: Create User
app.post("/api/users", async (req, res) => {
    try {
        const { name, email, password, phoneNumber, profilePicture, location, role } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email, and password are required!" });
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
            passwordHash: hashedPassword, // Store hashed password
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
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find().select("-passwordHash"); // Don't send hashed passwords
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

// Start Server with proper error handling
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
}).on("error", (err) => {
    console.error("❌ Server failed to start:", err);
});
