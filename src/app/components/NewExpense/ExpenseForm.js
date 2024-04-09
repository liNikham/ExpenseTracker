'use client'
import React, { useState } from 'react';

const ExpenseForm=(props)=>{
    
const [enteredTitle,setTitle]=useState('');
const [enteredAmount,setAmount]=useState('');
const [enteredDate,setDate]=useState('');
const titleChangeHandler=(event)=>{
    setTitle(event.target.value);
}
const amountChangeHandler=(event)=>{
    setAmount(event.target.value)
}
const dateChangeHandler=(event)=>{
    setDate(event.target.value)
}
const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }
  
    
props.onSaveExpenseHandler(expenseData);
    setAmount('');
    setTitle('');
    setDate('');
}
    return <form className="relative" onSubmit={submitHandler}>
        <div className="flex flex-wrap space-x-5">
              <div className="flex flex-col">
                 <label className="text-black font-bold m-1">Title</label>
                 <input className="rounded-xl p-2 focus:outline-none" type='text' value={enteredTitle} onChange={titleChangeHandler}/>
              </div>
              <div className="flex flex-col">
                 <label className="text-black font-bold m-1">Amount</label>
                 <input className="rounded-xl p-2 focus:outline-none"  onChange={amountChangeHandler} type='number' value={enteredAmount} min="0.01" step="0.01"/>
              </div>
             
        </div>
        <div className="flex flex-wrap space-x-5" >
        <div className="flex flex-col">
                 <label className="text-black font-bold m-1">Date</label>
                 <input className="rounded-xl p-2 w-[160%] focus:outline-none" onChange={dateChangeHandler} type='date' value={enteredDate} min="2019-01-01" max="2024-12-31" />
              </div>
              <div className="bg-purple-950 px-5 py-2 text-white rounded-md hover:bg-purple-800 h-12 flex justify-center items-center absolute bottom-1 right-2">
                 <button type='submit'>Add Expense</button>
              </div>
        </div>
    </form>
}
export default ExpenseForm;