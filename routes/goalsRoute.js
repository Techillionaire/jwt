const express = require("express")
const router = express.Router()
const { getGoal, postGoal, updateGoal, deleteGoal } = require("../controllers/goalController")

router.route(`/`).get(getGoal).post(postGoal)
router.route(`/:id`).delete(deleteGoal).put(updateGoal)


module.exports = router