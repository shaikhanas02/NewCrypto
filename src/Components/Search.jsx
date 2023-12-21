import React, { useState } from "react";

function Search({search ,setSearch}) {
  console.log(search) ;
  return (
    <div className="flex flex-row rounded-3xl bg-gray-900 p-5 m-4">
      <input
        className="bg-gray-900 ml-5 w-full border-none outline-none text-white" 
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    
  );
}

export default Search;
