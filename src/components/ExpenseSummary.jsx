import React from 'react';

const ExpenseSummary = ({ entries }) => {
  const income = entries
    .filter((entry) => entry.type === 'income')
    .reduce((sum, entry) => sum + entry.amount, 0);
  const expenses = entries
    .filter((entry) => entry.type === 'expense')
    .reduce((sum, entry) => sum + entry.amount, 0);
  const balance = income - expenses;

  return (
    <div>
      <h3>Summary</h3>
      <p>Total Income: ${income.toFixed(2)}</p>
      <p>Total Expenses: ${expenses.toFixed(2)}</p>
      <p>Balance: ${balance.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseSummary;
