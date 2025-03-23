const mongoose = require("mongoose");

const trendSavvySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    creatorEmail: { type: String, required: true },
    creatorPhone: { type: String, required: true },
    location: { 
        latitude: Number, 
        longitude: Number
    },
    status: { type: String, enum: ["pending", "approved"], default: "pending" },
    verifiedAt: { type: Date, default: null }
}, { timestamps: true });

module.exports = mongoose.model("TrendSavvy", trendSavvySchema);
