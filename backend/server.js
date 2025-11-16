import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRouter.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import dotenv from 'dotenv'

// SET UP
dotenv.config()
const app = express()
const port = 4000

// CONNECT TO MONGODB
connectDB()

app.use(express.json())
app.use(cors())

// ROUTES
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/",(req,res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log("Sever is running on port 4000")
})