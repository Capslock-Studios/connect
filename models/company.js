const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String }, // URL to the company logo
    website: { type: String },
    contactInfo: {
        email: { type: String, required: true },
        phone: { type: String }
    },
    location: { 
        latitude: Number, 
        longitude: Number
    },
    socialMedia: {
        facebook: String,
        x: String,
        instagram: String,
        tiktok: String,
        youtube: String
    },
    category: { type: String, required: true },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
}, { timestamps: true });

module.exports = mongoose.model("Company", companySchema);
