import React, { useState } from "react";

function Search({search ,setSearch,data}) {
  console.log(search) ;
  return (
    <div className="flex flex-row rounded-3xl bg-gray-200 p-5 m-4">
      <input
        className="bg-gray-200 ml-5 w-full border-none outline-none  "
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    
  );
}

export default Search;
