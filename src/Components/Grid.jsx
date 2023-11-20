import React, { useEffect, useState } from "react";
import getData from "../Functions/getData";
import GetPaginatedCoins from "../Functions/GetPaginatedCoins";
import Pagination from "./Pagination";
import SearchCards from "../Functions/SearchCards";
import { Link } from "react-router-dom";

function GridCard({ data }) {
  return (
    <Link to ={`/dashboard/${data.id}`}>
    <div className="border-2 border-solid border-red-500 rounded-xl bg-slate-400 m-2 min-w-fit flex justify-center"> 
      <div className="flex flex-col border m-2 p-3">
        <p>{data.id}</p>
        <img className="w-6 " src={data.image.thumb} alt="abc" />
        <p>${data.market_data.current_price.usd}</p>
        <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>
        <p>Total Volume : {data.market_data.total_volume.usd}</p>
        <p>Market Cap : {data.market_data.market_cap.usd}</p>
      </div>
    </div>
    </Link>
  );
}
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
              <GridCard key={i} data={data} />
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
            <GridCard key={i} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Grid;
