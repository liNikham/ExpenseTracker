'use client'
import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initial_expenses = [
  {
    id: 'e1',
    title: 'Health Insurance',
    amount: 194.12,
    date: new Date(2023, 7, 15),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 295.34,
    date: new Date(2023, 7, 16),
  }
];

const Index = () => {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
	

// Hello doing some random stuff	

  return (
    <div className="w-[50%]">
      <NewExpense onAddExpense={addExpenseHandler} />
      <div className="bg-[#111] py-3 rounded-2xl">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
};


export default Index;
