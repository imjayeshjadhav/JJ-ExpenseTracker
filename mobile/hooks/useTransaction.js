// react custom hook file

import { useCallback, useState } from "react"
import {Alert} from "react-native"

const API_URL ="http://localhost:5002/api"

export const useTransaction = (userId) =>{
    const [transactions, setTransactions] =  useState([])

    const [summary, setSummary] =  useState({
        balance:0,
        income:0,
        expenses:0
    })

    const [isLoading, setIsLoading] = useState(true)

    // useCallback is used for performance reasons it will memozie the function
    const fetchTransactions = useCallback (
        async () =>{
        try {
            const response = await fetch (`${API_URL}/api/transactions/${userId}`)
            const data = await response.json()
            setTransactions(data)
        } catch (error) {
            console.log("Error fetching Transaction",error)
        }
    },[userId])

    const fetchSummary = useCallback (
        async () =>{
        try {
            const response = await fetch (`${API_URL}/api/transactions/summary/${userId}`)
            const data = await response.json()
            setSummary(data)
        } catch (error) {
            console.log("Error fetching summary",error)
        }
    },[userId])

    const loadData = useCallback( async () =>{

        if (!userId) return
        setIsLoading(true)

        try {
            // can run in parallel
            await Promise.all([fetchTransactions(), fetchSummary()])
        } catch (error) {
            console.log("Error fetching data",error)
        } finally {
            setIsLoading(false);
        }
    },[fetchTransactions, fetchSummary, userId]);

    const deleteTransaction  = async (id) =>{
        try {
            const response = await fetch (`${API_URL}/transactions/${id}`,{method :"DELETE"})
            if (!response.ok) throw new Error ("Failed to delete transaction")

            // Refresh data after deletion
            Alert.alert("Success","Transaction deleted successfully")
        } catch (error) {
            console.log("Error deleting Transaction",error)
            Alert.alert("Error",error.message)
        }
    };
    return { transactions, summary, isLoading, loadData, deleteTransaction }
}