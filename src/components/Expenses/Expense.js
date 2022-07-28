import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const selectedFilter = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expense">
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeYear={filterChangeHandler}
        />

        <ExpenseChart expenses={selectedFilter} />
        <ExpenseList items={selectedFilter} />
      </Card>
    </div>
  );
};

export default Expense;
