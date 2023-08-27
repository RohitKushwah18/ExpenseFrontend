import React from 'react'
import Expenseform from './Expenseform'
import { useGlobalContext } from '../context/context'
import { dateFormat } from '../utils/dateFormat';
const Expense = () => {

  const {expenses,totalexpense,deleteExpence} = useGlobalContext()

  return (
    
    <div className='incomes'>
    <h1>Expenses</h1>
    <h2 className="total-income">Total Expense: <span>${totalexpense()}</span></h2>
    <div className="income-content">
      <Expenseform/>
      <div className='content'>
      {expenses.map((expense =>
        <div className="income-item" key = {expense._id}>
        <h5>{expense.title}</h5>
        <div className='inner-content'>
        <p>{expense.category}</p>
        <p>{dateFormat(expense.date)}</p>
        <p>$ {expense.amount}</p>
        <p>{expense.description}</p>
        <button onClick={() => deleteExpence(expense._id)}>Delete Expense</button>
        </div>
      </div>
      )
      )}
      </div>
      </div>
    </div>
    
    
  )
}

export default Expense