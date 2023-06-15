const express = require("express")
const dotenv = require("dotenv").config()
const app = express()
const goalsRouter = require("./routes/goalsRoute")
const userRouter = require("./routes/userRoute")
const {errorHandler} = require("./middlewares/errorMiddleware")
const port = process.env.PORT || 9000
const colors = require("colors")
const connectDB = require("./config/db")


connectDB()


app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(`/api/goals`, goalsRouter)
app.use(`/api/users`, userRouter)
app.use(errorHandler)
app.listen(port, () => console.log(`Server started at port ${port}`))

