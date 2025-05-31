import express from "express"
import dotenv from "dotenv"
import { sql } from "./config/db.js"

const app= express()

dotenv.config()

const PORT = process.env.PORT 

async function initDB(){
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions(
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL (10,2) NOT NULL,
        category VARCHAR(255) NOT NULL,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`

        console.log("Database initialised successfully")
    } catch (error) {
        console.log("Error initializing DB", error)
        process.exit(1)
    }
}

initDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
    })
})