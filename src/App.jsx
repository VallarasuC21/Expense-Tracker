import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseChart from './components/ExpenseChart';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const addEntry = (entry) => {
    if (editItem) {
      // Update the existing entry
      setEntries((prevEntries) =>
        prevEntries.map((e) => (e.id === editItem.id ? { ...editItem, ...entry } : e))
      );
      setEditItem(null); // Reset edit mode
    } else {
      // Add a new entry
      setEntries([...entries, { ...entry, id: Date.now() }]);
    }
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const startEdit = (entry) => {
    setEditItem(entry);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={addEntry} editItem={editItem} />
      <ExpenseSummary entries={entries} />
      <ExpenseChart entries={entries} />
      <ExpenseList entries={entries} onEdit={startEdit} onDelete={deleteEntry} />
    </div>
  );
};

export default App;
