import React, { useEffect, useState } from 'react'
import getData from '../Functions/getData'
import GetPaginatedCoins from '../Functions/GetPaginatedCoins';
import Pagination from './Pagination';

function GridCard({data}){
    
    return (
      <div className='w-full h-full flex flex-wrap'>
        <div className='flex flex-col border border-indigo-500 m-2 p-3'>
        <p>{data.id}</p> 
        <img className='w-6 'src={data.image.thumb} alt="abc" />
        <p>${data.market_data.current_price.usd}</p>
        <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>
        <p>Total Volume : {data.market_data.total_volume.usd}</p>
        <p>Market Cap : {data.market_data.market_cap.usd}</p>
        </div>
</div>
    )

}
function Grid() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
let data = getData() ;
const PaginatedCoins = GetPaginatedCoins(data, currentPage, itemsPerPage)

const totalItems = data.length ;
const totalPages = Math.ceil(totalItems/itemsPerPage)

const handlePageChange = (page) => {
  setCurrentPage(page) ;
}
//   data = PaginatedCoins ;
    console.log(data) ;
  return (
    <div>

    <div>
       { PaginatedCoins.map((data,i)=>(
           <GridCard key={i} data={data}/>
           )) }
           </div>
           <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>

  )
}

export default Grid