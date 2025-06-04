import express from "express"
import dotenv from "dotenv"
import { initDB } from "./config/db.js"
import transactionRouter from "./routes/transactionsRoute.js"
import job from "./config/cron.js"

const app= express()

// middleware
// app.use(rateLimiter)
app.use(express.json())

if (process.env.NODE_ENV === "production") job.start()

dotenv.config()

const PORT = process.env.PORT 

app.get("/api/health", (req,res)=>{
    res.status(200).json({status:"Ok"})
})

app.use("/api/transactions", transactionRouter)

initDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
    })
})