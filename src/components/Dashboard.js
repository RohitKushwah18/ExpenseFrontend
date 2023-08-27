import React from 'react'
import History from './History.js'
import { useGlobalContext } from '../context/context'
import Chart from './chart.js'
const Dashboard = () => {
  const {totalexpense, totalincome, totalbalance} = useGlobalContext()
  return (
    <div className='incomes'>
            <h1>All Transactions</h1>
            <div className="dashboard">
                <div className="chart-container">
                    <Chart />
                    <div className="amount-con">
                        <div className="income">
                            <h2>Total Income</h2>
                            <p>
                                {totalincome()}
                            </p>
                        </div>
                        <div className="expense">
                            <h2>Total Expense</h2>
                            <p>
                                {totalexpense()}
                            </p>
                        </div>
                        <div className="balance">
                            <h2>Total Balance</h2>
                            <p>
                                {totalbalance()}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="history-con">
                    <History />
                    </div>
                </div>
    </div>
)
}

export default Dashboard