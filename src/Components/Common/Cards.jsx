import React from 'react'

function Cards({data}) {
  return (
    <div className='flex flex-row border p-4 m-2 w-full'>
    {/* <div> */}
        <p>{data.id}</p> 
        <img src={data.image.thumb} alt="abc" />
        <p>${data.market_data.current_price.usd}</p>
        <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>
        <p>Total Volume : {data.market_data.total_volume.usd}</p>
        <p>Market Cap : {data.market_data.market_cap.usd}</p>
        </div>
  )
}

export default Cards