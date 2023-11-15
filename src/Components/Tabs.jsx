import React, { useState } from 'react'
import Grid from './Grid';
import List from './List';

const Tab = ({onTab, label, active, className})=>{
    return (
        <div className={` px-4 py-2 cursor-pointer ${className}  ${active ? 'border-b-2 border-blue-500' : ''}`}
        onClick={onTab}>
            {label}
        </div>
    )
} 




const tabs = [
    {label : 'Grid', content : <Grid />},
    {label : 'List', content : <List />}
]

function Tabs({className}) {
    const [activeTab, setActiveTab] = useState(0) ;

    function handleTab(i){
        setActiveTab(i) ;
    }
  return (
    <div className='flex flex-col items-center'>
    <div className='flex'>
        {
            tabs.map((tab,i)=>(
                <Tab label={tab.label} onTab={()=>handleTab(i) } key={i} 
                active={i === activeTab} 
                className={className}
                />
            ))
        }

    </div>
    <div>{tabs[activeTab].content}</div>
    </div>
  )
}

export default Tabs