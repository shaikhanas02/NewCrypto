import React, { useEffect, useState } from 'react'
import getData from '../Functions/getData'
import GetPaginatedCoins from '../Functions/GetPaginatedCoins';
import Pagination from './Pagination';
import SearchCards from '../Functions/SearchCards';
import { Link } from 'react-router-dom';

function ListCard({data}){

    return(
    <Link to={`/dashboard/${data.id}`}>
 <div className='flex flex-row border p-4 m-2 w-full'>
    {/* <div> */}
        <p>{data.id}</p> 
        <img src={data.image.thumb} alt="abc" />
        <p>${data.market_data.current_price.usd}</p>
        <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>
        <p>Total Volume : {data.market_data.total_volume.usd}</p>
        <p>Market Cap : {data.market_data.market_cap.usd}</p>
        </div>
        </Link>
    )
}


function List({search}) {
    let data = getData() ;

    const[currentPage, setCurrentPage] = useState(1) ;
    const [filteredData, setFilteredData] = useState([])
    const itemsPerPage = 5 ;

    const totalItems = data.length ;
    const totalPages = Math.ceil(totalItems/itemsPerPage) ;

    const PaginatedCoins = GetPaginatedCoins(data, currentPage,itemsPerPage) ;
    
    useEffect(()=>{
        if(search){
        setFilteredData(SearchCards(search,data)) ;
}else{
    setFilteredData([]) ;
}
},[search]) 
   
    function handlePageChange(page){
setCurrentPage(page) ;
    }
  return (
    <div>
{ filteredData.length === 0 ?
   ( <>
   <div>
        {PaginatedCoins.map((data,i)=>(
            <ListCard key={i} data={data} />
            ))}
            </div>
<Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
</>
 ):(
filteredData.map((data,i)=>(
    <ListCard key={i} data={data} />
    )
    )

)
}
    </div>
  )
}

export default List ;