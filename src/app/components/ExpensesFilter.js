const ExpensesFilter=(props)=>{
    const dropdownChangeHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    };
    return <div className="mx-2">
         <div className="flex justify-between items-center m-4">
            <label className="text-white font-extrabold ">Filter By Year</label>
            <select className="w-[15%] outline-none rounded-sm text-center font-bold bg-white h-[25px]" value={props.selected} onChange={dropdownChangeHandler}>

                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                
            </select>
         </div>
    </div>
}
export default ExpensesFilter;