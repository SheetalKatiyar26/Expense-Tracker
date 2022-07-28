import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const showExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    seteditform(false);
  };

  const [editform, seteditform] = useState(false);

  const clicked = () => {
    seteditform(true);
  };

  const stopEditing = () => {
    seteditform(false);
  };
  return (
    <div className="new-expense">
      {!editform && <button onClick={clicked}>Add New Expense</button>}
      {editform && (
        <ExpenseForm
          onShowExpense={showExpenseData}
          stopEditing={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
