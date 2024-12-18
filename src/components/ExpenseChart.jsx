import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ExpenseChart = ({ entries }) => {
  const groupedData = entries.reduce((acc, entry) => {
    const month = new Date(entry.date || Date.now()).toLocaleString('default', {
      month: 'short',
    });
    acc[month] = acc[month] || { income: 0, expense: 0 };
    acc[month][entry.type] += entry.amount;
    return acc;
  }, {});

  const labels = Object.keys(groupedData);
  const incomeData = labels.map((label) => groupedData[label].income || 0);
  const expenseData = labels.map((label) => groupedData[label].expense || 0);

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: 'green',
      },
      {
        label: 'Expense',
        data: expenseData,
        backgroundColor: 'red',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
      <h3>Monthly Trends</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
