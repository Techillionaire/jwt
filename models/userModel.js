const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "goals"
    },
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    email: {
        type: String,
        required: [true, "Please enter a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("users", userSchema)