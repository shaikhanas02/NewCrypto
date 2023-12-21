import React from 'react'

function SelectCoins({setId, id, arr}) {
   
  function select(e){
     setId(e.target.value )
  }

return ( 
  <div>   
      <select onChange={select}>
      {arr?.map((item) =>( 
          <option key={item} selected={id === item} >{item}</option>
      ))} 
      </select> 
  </div> 
)
}

export default SelectCoins ;