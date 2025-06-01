import express from "express"
import { createTransactions, deleteTransaction, getSummaryByUserId, getTransactionsByUserId } from "../controllers/transactionController.js"

const transactionRouter = express.Router()

transactionRouter.get('/:userId', getTransactionsByUserId)

transactionRouter.post("/", createTransactions)

transactionRouter.delete("/:id", deleteTransaction)

transactionRouter.get("/summary/:userId", getSummaryByUserId)

export default transactionRouter