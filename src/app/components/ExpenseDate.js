const ExpenseDate=(props)=>{
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
    return <div className="bg-[#111] flex flex-col justify-center text-white rounded-2xl border border-white px-5 text-center py-2 ">
    <div className="text-md">{month}</div>
            <div className="text-sm">{day}</div>
            <div className="text-xl">{year}</div>
    </div>
}
export default ExpenseDate;