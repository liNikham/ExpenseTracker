import ExpenseDate from "./ExpenseDate";
const ExpenseItem=(props )=>{
    
    return <div className="bg-[#555] rounded-2xl p-3 flex items-center space-x-4 m-4">
     <div className="text-[#111] text-sm">
         <ExpenseDate date={props.date}/>
     </div>
     <div className="flex justify-between items-center flex-grow">
         <h2 className="text-white text-2xl">{props.title}</h2>
         <div className="bg-purple-950 text-white text-xl px-5 py-2 border border-white rounded-2xl">${props.amount} ₹</div>
     </div>
 </div>
    
}
export default ExpenseItem;