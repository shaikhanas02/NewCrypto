import React, { useEffect, useState } from "react";
import getData from "../Functions/getData";
import GetPaginatedCoins from "../Functions/GetPaginatedCoins";
import Pagination from "./Pagination";
import SearchCards from "../Functions/SearchCards";
import GridCards from "./Common/GridCards";


function Grid({ search }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  
  let data = getData();
  const PaginatedCoins = GetPaginatedCoins(data, currentPage, itemsPerPage);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // console.log(data);

  useEffect(() => {
    if (search) {
      setFilteredData(SearchCards(search, data));
    } else {
      setFilteredData([]);
    }
  }, [search]);

  // console.log(filteredData);
  return (
    <div>
      {filteredData.length === 0 ? (
        <>
          <div className="flex flex-wrap">
            {PaginatedCoins.map((data, i) => (
              <GridCards key={i} data={data} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <div>
          {filteredData.map((data, i) => (
            <GridCards key={i} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Grid;
