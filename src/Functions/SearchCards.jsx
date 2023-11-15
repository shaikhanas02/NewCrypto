import React from "react";

function SearchCards(search, data) {
    const find = search.toLowerCase() ;
  const filteredData = data.filter((card) => 
    card.id.toLowerCase().includes(find)
  );
  console.log(filteredData) ;
  return filteredData;
} 

export default SearchCards;
