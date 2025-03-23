const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS Configuration
const allowedOrigins = [
    "https://testmapspulse.netlify.app",
    "https://mongo-piano.netlify.app"
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
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests globally
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
      console.error("❌ MongoDB Connection Error:", err);
  });

// Prevent server crash if MongoDB disconnects
mongoose.connection.on("error", err => {
    console.error("❌ MongoDB Error:", err);
});

// ✅ API Routes
const userRoutes = require("./routes/api");
app.use("/api", userRoutes);

// ✅ Serve Static Files
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
