import React, { useState } from "react";
import "./App.css";

import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expense = [
  {
    id: "e1",
    title: "Books",
    amount: 78.98,
    date: new Date(2022, 3, 12),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 189.98,
    date: new Date(2022, 4, 12),
  },
  { id: "e3", title: "Home Loan", amount: 178, date: new Date(2022, 7, 16) },
  {
    id: "e4",
    title: "Grocery Items",
    amount: 52.89,
    date: new Date(2021, 5, 22),
  },
];

const App = () => {
  const [expense, setExpense] = useState(Dummy_Expense);

  const addExpenseData = (addedData) => {
    setExpense((prev_data) => {
      return [addedData, ...prev_data];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseData} />
      <Expense expense={expense} />
    </div>
  );
};

export default App;
