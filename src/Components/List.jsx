import React, { useState } from 'react'
import getData from '../Functions/getData'
import GetPaginatedCoins from '../Functions/GetPaginatedCoins';
import Pagination from './Pagination';

function ListCard({data}){

    return(
        <div className='flex flex-row border p-4 m-2 w-full'>
        <p>{data.id}</p> 
        <img src={data.image.thumb} alt="abc" />
        <p>${data.market_data.current_price.usd}</p>
        <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>
        <p>Total Volume : {data.market_data.total_volume.usd}</p>
        <p>Market Cap : {data.market_data.market_cap.usd}</p>
        </div>
    )
}


function List() {
    const data = getData() ;

    const[currentPage, setCurrentPage] = useState(1) ;
    const itemsPerPage = 10 ;

    const totalItems = data.length ;
    const totalPages = Math.ceil(totalItems/itemsPerPage) ;

    const PaginatedCoins = GetPaginatedCoins(data, currentPage,itemsPerPage) ;


    function handlePageChange(page){
setCurrentPage(page) ;
    }
  return (
    <div>

    <div>
        {PaginatedCoins.map((data,i)=>(
            <ListCard key={i} data={data} />
            ))}
            </div>
<Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
    </div>
  )
}

export default List