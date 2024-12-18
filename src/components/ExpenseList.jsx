import React from 'react';

const ExpenseList = ({ entries, onEdit, onDelete }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          <span>
            {entry.description} - ${entry.amount} ({entry.type})
          </span>
          <button onClick={() => onEdit(entry)}>Edit</button>
          <button onClick={() => onDelete(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
