const asyncHandler = require("express-async-handler")
const Goal = require("../models/goalModel")


// Get goals controller function
const getGoal = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})


// Create goal controller function
const postGoal = asyncHandler(async (req, res) => {
    console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error("Pleae add a text field")
    }
    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(201).json(goal)
})

// Update goal controller function
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(updatedGoal)
})

// Delete goal controller function
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    await goal.deleteOne({ _id: req.params.id })
    res.status(200).json({ id : req.params.id })
})


module.exports = {
    getGoal,
    postGoal,
    updateGoal,
    deleteGoal
}