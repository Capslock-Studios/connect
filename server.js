const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS Configuration
const allowedOrigins = [
    "https://testmapspulse.netlify.app",
    "https://whatsnext.joburg",
    "http://localhost:3000" // For development
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.error("❌ CORS Blocked for:", origin);
            callback(new Error("CORS not allowed for this origin"));
        }
    },
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: 86400
};

// Middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
});

mongoose.connection.on("error", err => {
    console.error("❌ MongoDB Error:", err);
});

// Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Admin route (consider moving to separate file)
app.get("/api/admin/collections", async (req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        res.json(collections.map(col => col.name));
    } catch (error) {
        console.error("❌ Collections Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Static files
app.use(express.static("public"));

// Error handling
app.use((err, req, res, next) => {
    console.error("❌ Server Error:", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📄 API Docs: http://localhost:${PORT}/api-docs`);
});