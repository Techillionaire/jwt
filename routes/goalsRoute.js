const express = require("express")
const router = express.Router()
const { getGoal, postGoal, updateGoal, deleteGoal } = require("../controllers/goalController")

router.route(`/goals`).get(getGoal).post(postGoal)
router.route(`/goals/:id`).delete(deleteGoal).put(updateGoal)


module.exports = router