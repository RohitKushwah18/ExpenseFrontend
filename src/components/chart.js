import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useGlobalContext } from '../context/context';

const Chart = () => {
  const { totalincome, totalexpense } = useGlobalContext();
  const data = [
    { name: 'Income', value: totalincome() },
    { name: 'Expense', value: totalexpense() },
  ];

  const COLORS = ['Green', 'Red'];
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
  const incomePercentage = (data[0].value / totalValue * 100).toFixed(2);
  const expensePercentage = (data[1].value / totalValue * 100).toFixed(2);
  return (
    <ResponsiveContainer width={500} height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          iconType="circle"
          wrapperStyle={{ paddingRight: '20px'}}
         formatter={(value, entry) => {
          if (entry.payload.name === 'Income') {
            return <span style={{ fontSize: '25px' }}>Income: {incomePercentage}%</span>;
          } else if (entry.payload.name === 'Expense') {
            return <span style={{ fontSize: '25px' }}>Expense: {expensePercentage}%</span>;
          }
          return '';
        }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Chart;
