const express = require("express");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const User = require("../models/user");
const Company = require("../models/company");
const Post = require("../models/post");
const Product = require("../models/product");
const Savvy = require("../models/trendSavvy");
const Petition = require("../models/petition");
const ClickTracking = require("../models/clickTracking");

const router = express.Router();

// Input Validation Schemas
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phoneNumber: Joi.string().pattern(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/),
  profilePicture: Joi.string().uri(),
  location: Joi.string().pattern(/^-?\d{1,3}\.\d+,\s*-?\d{1,3}\.\d+$/),
  role: Joi.string().valid("user", "admin")
});

const companySchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().min(10).required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().pattern(/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/),
  logo: Joi.string().uri().required(),
  location: Joi.string().pattern(/^-?\d{1,3}\.\d+,\s*-?\d{1,3}\.\d+$/)
});

/** ✅ USERS **/
router.post("/users", async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { name, email, password, phoneNumber, profilePicture, location, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const loc = location ? { 
      latitude: Number(location.split(",")[0]), 
      longitude: Number(location.split(",")[1]) 
    } : null;

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
    res.status(201).json({ 
      message: "User created successfully!", 
      user: { 
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      } 
    });

  } catch (error) {
    console.error("User creation error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [users, totalUsers] = await Promise.all([
      User.find().select("-passwordHash").skip(skip).limit(limit),
      User.countDocuments()
    ]);

    res.json({ 
      totalUsers, 
      page, 
      totalPages: Math.ceil(totalUsers / limit), 
      users 
    });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

/** ✅ COMPANIES **/
router.post("/companies", async (req, res) => {
  try {
    const { error } = companySchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const { name, category, description, email, phoneNumber, logo, location } = req.body;

    // Check if company already exists
    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ error: "Company already exists" });
    }

    const coordinates = location ? {
      latitude: Number(location.split(",")[0]),
      longitude: Number(location.split(",")[1])
    } : null;

    const newCompany = new Company({
      name,
      category,
      description,
      email,
      phoneNumber,
      logo,
      location: coordinates,
      createdAt: new Date()
    });

    await newCompany.save();
    res.status(201).json({ 
      message: "Company created successfully!",
      company: newCompany
    });

  } catch (error) {
    console.error("Company creation error:", error);
    res.status(500).json({ error: "Failed to create company" });
  }
});

router.get("/companies", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const [companies, totalCompanies] = await Promise.all([
      Company.find().skip(skip).limit(limit),
      Company.countDocuments()
    ]);

    res.json({ 
      totalCompanies,
      page,
      totalPages: Math.ceil(totalCompanies / limit),
      companies
    });
  } catch (error) {
    console.error("Get companies error:", error);
    res.status(500).json({ error: "Failed to fetch companies" });
  }
});

/** ✅ POSTS **/
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email");
    res.json(posts);
  } catch (error) {
    console.error("Get posts error:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

/** ✅ PRODUCTS **/
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().populate("company", "name logo");
    res.json(products);
  } catch (error) {
    console.error("Get products error:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

/** ✅ SAVVYS **/
router.get("/savvys", async (req, res) => {
  try {
    const savvys = await Savvy.find().sort({ createdAt: -1 });
    res.json(savvys);
  } catch (error) {
    console.error("Get savvys error:", error);
    res.status(500).json({ error: "Failed to fetch savvys" });
  }
});

/** ✅ PETITIONS **/
router.get("/petitions", async (req, res) => {
  try {
    const petitions = await Petition.find().sort({ signatures: -1 });
    res.json(petitions);
  } catch (error) {
    console.error("Get petitions error:", error);
    res.status(500).json({ error: "Failed to fetch petitions" });
  }
});

/** ✅ CLICK TRACKING **/
router.get("/click-tracking", async (req, res) => {
  try {
    const tracking = await ClickTracking.find().sort({ timestamp: -1 });
    res.json(tracking);
  } catch (error) {
    console.error("Get click tracking error:", error);
    res.status(500).json({ error: "Failed to fetch click tracking data" });
  }
});

module.exports = router;