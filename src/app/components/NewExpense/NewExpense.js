'use client'
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
 const saveExpenseHandler=(enteredExpenseData)=>{
    
    const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    
    props.onAddExpense(expenseData);
   
 }
    return <div className="w-[50] bg-purple-300 px-2 py-3 mt-5 mb-7 rounded-2xl">
        <ExpenseForm   onSaveExpenseHandler = {saveExpenseHandler}/>
    </div>
}
export default NewExpense;