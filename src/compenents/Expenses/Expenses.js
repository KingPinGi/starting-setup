import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card.js";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    console.log(expense.date.getFullYear());
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </Card>
    </li>
  );
};

export default Expenses;
