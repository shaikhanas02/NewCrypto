function SelectDays({setDays}){
    return (
        <div>
            <p>Price Change in the last</p>
            <select onChange={e=> setDays(e.target.value)}>
                <option value="7">7 Days</option>
                <option value="30">30 Days</option>
                <option value="90">90 Days</option>
                <option value="180">180 Days</option>
            </select> 
        </div>
    )
}

export default SelectDays ;