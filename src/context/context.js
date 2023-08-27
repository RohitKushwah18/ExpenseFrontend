import React, {  useState,useEffect } from "react"
import axios from 'axios'
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

const GlobalContext = React.createContext()

const BASE_URL = "http://localhost:3000/api/v3/";



export const GlobalProvider = ({children}) => {
    const navigate = useNavigate();

    // useEffect(() => {
    //   if(localStorage.getItem('user')){
    //     navigate('/');
    //   }
    // }, [navigate]);
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    // const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.post(`${BASE_URL}add-income`, {...income, userid:user._id})
            console.log()
            getIncome();
        }
        catch (err) {
            console.log(err)
        }
    }

    const getIncome = async () => {
        try{
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.post(`${BASE_URL}get-income`,{userid:user._id})
            setIncomes(response.data) 
            console.log(response.data) 
        }catch (err) {
            console.log(err)
        }
      
    }
    useEffect(() =>{
        getIncome()
    }, [])
    
    const deleteIncome = async (id) => {
        try {
          const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
          getIncome();
        } catch (error) {
          console.error(error);
        }
      };


    
    const totalincome = () => {
        let totalIncome = 0;
        for (let i = 0; i < incomes.length; i++) {
            totalIncome = totalIncome + incomes[i].amount;
        }
        return totalIncome;
    }
    const addExpense = async(income) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.post(`${BASE_URL}add-expense`, {...income, userid:user._id})
            getExpense();
        }
        catch (err) {
            console.log(err)
        }
    }

    const getExpense = async () => {
        try{
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.post(`${BASE_URL}get-expense`,{userid:user._id})
            setExpenses(response.data)
            console.log(response.data)  
        }catch (err) {
            console.log(err)
        }
 
    }
    useEffect(() =>{
        getExpense()
    }, [])

    const deleteExpence = async (id) => {
        try {
          const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
          getExpense();
        } catch (error) {
          console.error(error);
        }
      };
// console.log(incomes,expenses)
    const totalexpense = () => {
        let totalExpense = 0;
        for (let i = 0; i < expenses.length; i++) {
            totalExpense = totalExpense + expenses[i].amount;
        }
        return totalExpense;
    }

    const totalbalance = () => {
        return totalincome()-totalexpense()
    }
    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 5)
    }
    
    return (
        <GlobalContext.Provider value={{ 
          addIncome,
          getIncome,
          incomes,
          totalincome,
          deleteIncome,
          addExpense,
          expenses,
          totalexpense,
          totalbalance,
          transactionHistory,
          deleteExpence,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}


