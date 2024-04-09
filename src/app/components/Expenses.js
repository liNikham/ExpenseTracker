'use client'
import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2024');
    const filterChangeHandler=selectedYear=>{
        
        setFilteredYear(selectedYear);
    };
    const filteredExpenses=props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
  return <div>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
     {
         (filteredExpenses.length>0)? filteredExpenses.map((expense)=>{   
            return <ExpenseItem key={expense.id} title={expense.title}
                  amount={expense.amount} date={expense.date} />
            } ) : <p className="text-white text-center font-extrabold"> Found No Expenses</p>
     }
 
     
  </div>
}
export default Expenses;