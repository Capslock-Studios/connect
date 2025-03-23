const mongoose = require("mongoose");

const clickSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    ipAddress: { type: String, required: true },
    clickedItemId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Can be Product, Post, or Company
    referrer: { type: String }, // Where the click came from
}, { timestamps: true });

module.exports = mongoose.model("Click", clickSchema);
