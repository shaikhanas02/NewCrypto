import React, { useState } from "react";
// import getData from "./getData";

function GetPaginatedCoins(data,currentPage,itemsPerPage) {

  const lastPostindex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostindex - itemsPerPage;
  const GetPaginatedCoins = data.slice(firstPostIndex, lastPostindex); 

  return GetPaginatedCoins ;
}

export default GetPaginatedCoins;
