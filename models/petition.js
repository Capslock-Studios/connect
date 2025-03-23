const mongoose = require("mongoose");

const petitionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    goal: { type: Number, required: true }, // Number of signatures needed
    location: { 
        latitude: Number, 
        longitude: Number
    },
    signatures: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
        email: { type: String, default: null } // For anonymous signers
    }]
}, { timestamps: true });

module.exports = mongoose.model("Petition", petitionSchema);
