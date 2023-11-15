import React from "react";

function SearchCards(search, data) {
  const FilteredData = data.filter((card) => 
    (card.id.toLowerCase().includes(search.toLowerCase()))
  );
  return FilteredData;
}

export default SearchCards;
