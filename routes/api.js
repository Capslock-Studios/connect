const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Company = require("../models/company");
const Post = require("../models/post");
const Product = require("../models/product");
const Savvy = require("../models/trendSavvy");
const Petition = require("../models/petition");
const ClickTracking = require("../models/clickTracking");

const router = express.Router();

/** ✅ USERS **/
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

/** ✅ COMPANIES **/
router.get("/companies", async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch companies" });
    }
});

/** ✅ POSTS **/
router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});

/** ✅ PRODUCTS **/
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

/** ✅ SAVVYS **/
router.get("/savvys", async (req, res) => {
    try {
        const savvys = await Savvy.find();
        res.json(savvys);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch savvys" });
    }
});

/** ✅ PETITIONS **/
router.get("/petitions", async (req, res) => {
    try {
        const petitions = await Petition.find();
        res.json(petitions);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch petitions" });
    }
});

/** ✅ CLICK TRACKING **/
router.get("/click-tracking", async (req, res) => {
    try {
        const tracking = await ClickTracking.find();
        res.json(tracking);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch click tracking data" });
    }
});

module.exports = router;
