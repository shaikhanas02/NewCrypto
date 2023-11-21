import React, { useEffect, useState } from 'react'
import getData from '../Functions/getData'
import GetPaginatedCoins from '../Functions/GetPaginatedCoins';
import Pagination from './Pagination';
import SearchCards from '../Functions/SearchCards';
import { Link } from 'react-router-dom';
import ListCards from './Common/ListCards';

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
            <ListCards key={i} data={data}  />
            ))}
            </div>
<Pagination currentPage={currentPage} onPageChange={handlePageChange} totalPages={totalPages}/>
</>
 ):(
filteredData.map((data,i)=>(
    <ListCards key={i} data={data} />
    )
    )

)
}
    </div>
  )
}

export default List ;