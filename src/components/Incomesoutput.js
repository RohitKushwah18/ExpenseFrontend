import React from 'react'
import Incomes from './Incomes'
import  { useGlobalContext }  from '../context/context'
import { dateFormat } from '../utils/dateFormat';
// import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../utils/Icons'

const Incomesoutput = () => {

const {totalincome,deleteIncome,incomes} = useGlobalContext()


  return (

    <div className='incomes'>
    <h1>Incomes</h1>

      <h2 className="total-income">Total Income: <span>${totalincome()}</span></h2>
      <div className="income-content">
      <Incomes/>
      <div className='content'>
      {incomes.map((income) =>
      <div className="income-item" key={income._id}>
        <h5>{income.title}</h5>
        <div className='inner-content'>
        <p>{income.category}</p>
        {/* <img src={categoryLogos[income.category]} alt={income.category} /> */}
        <p>{dateFormat(income.date)}</p>
        <p>{income.amount}</p>
        <p>{income.description}</p>
        <button onClick={() => deleteIncome(income._id)}>Delete Income</button>
        </div>
      </div>
      )}
        </div>
      </div>
      </div>
    
  )
}



export default Incomesoutput