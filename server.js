const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Fix: Define allowed origins correctly
const allowedOrigins = [
    "https://testmapspulse.netlify.app",
    "https://mongo-piano.netlify.app"
];

// ✅ Fix: Proper CORS middleware
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error("❌ CORS Blocked for:", origin);
            callback(new Error("CORS not allowed for this origin"));
        }
    },
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
};

app.use(cors(corsOptions));
app.use(express.json());

// ✅ Fix: Remove duplicate `cors()`

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// API Routes
const userRoutes = require("./routes/api");
app.use("/api", userRoutes);

// Serve Static Files
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
