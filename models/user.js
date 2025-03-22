const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    phoneNumber: { type: String, unique: true },
    profilePicture: { type: String },
    location: { 
        latitude: Number, 
        longitude: Number
    },
    role: { type: String, enum: ["user", "business_owner", "admin"], default: "user" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
