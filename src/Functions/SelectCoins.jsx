import React from 'react'

function SelectCoins({setId, id, excludedId}) {
    const arr = ['solano','bitcoin','ethereum','tether','binancecoin','ripple','usd-coin','staked-either','cardano', 'dogecoin']
    function select(e){
       setId(e.target.value )
    }
    const filteredOptions = arr.filter(item => item !== excludedId);

  return (
    <div>   
        <select onChange={select}>
        {filteredOptions.map((item) =>( 
            <option key={item} selected={id === item} >{item}</option>
        ))} 
        </select> 
    </div> 
  )
}

export default SelectCoins ;