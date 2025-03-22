const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
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

module.exports = mongoose.model("User", userSchema);
