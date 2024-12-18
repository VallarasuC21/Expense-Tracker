import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ onAdd, editItem }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  // Populate fields when editing an item
  useEffect(() => {
    if (editItem) {
      setDescription(editItem.description);
      setAmount(editItem.amount);
      setType(editItem.type);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAdd({ description, amount: parseFloat(amount), type });
    setDescription('');
    setAmount('');
    setType('income');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">{editItem ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ExpenseForm;
