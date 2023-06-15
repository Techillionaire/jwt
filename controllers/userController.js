const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }
    
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)

    const user = await User.create({ name, email, password: hashedPass})

    if(user){
        res.status(201).json({
            _id : user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
}) 

const loginUser = (req, res) => {
    res.json({ message: "Login user" })
}

const getUser = (req, res) => {
    res.json({ message: "User details" })
}

module.exports = { registerUser, loginUser, getUser }