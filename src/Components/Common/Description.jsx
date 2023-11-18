import React from 'react'
import { useState } from 'react';

function Description({data}) {
    const shortDesc = data.description.en.split(' ').slice(0,50).join(" ");
    const fullDesc = data.description.en ;

    const [description, setDescription] = useState(shortDesc) 
    const [isExpanded, setIsExpanded] = useState(false) ;
    // setDescription(a) ;

    function handleDescription() {
        setIsExpanded(!isExpanded) ;
        isExpanded ? setDescription(shortDesc) 
        : setDescription(fullDesc) ;
        console.log(isExpanded) ;
    }
  return (
    <div>
        <p>{description} <span><button style={{color: 'blue'}} onClick={handleDescription}>{isExpanded ? 'Read Less.' : 'Read More.'}</button></span></p>
    </div>
  )
}


export default Description 