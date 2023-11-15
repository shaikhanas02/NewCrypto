import React from 'react'

function Cards({data}) {
  return (
    <div className='flex flex-col  border-solid border-indigo-700 p-3'>
        <p>{data.id}</p> 
        <img className='w-6 'src={data.image.thumb} alt="abc" />
        <p>${data.market_data.current_price.usd}</p>
        <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>
        <p>Total Volume : {data.market_data.total_volume.usd}</p>
        <p>Market Cap : {data.market_data.market_cap.usd}</p>
        </div>
  )
}

export default Cards