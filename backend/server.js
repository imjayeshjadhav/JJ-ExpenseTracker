import express from "express"
import dotenv from "dotenv"
import { initDB } from "./config/db.js"
import transactionRouter from "./routes/transactionsRoute.js"

const app= express()

// middleware
// app.use(rateLimiter)
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT 

app.use("/api/transactions", transactionRouter)

initDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
    })
})