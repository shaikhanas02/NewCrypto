import React from "react";

function SearchCards(search, data) {
    const find = search.toLowerCase() ;
    console.log(find) ;
  const filteredData = data.filter((card) => 
    card.id.toLowerCase().includes(find)
  );
  return filteredData;
}

export default SearchCards;
