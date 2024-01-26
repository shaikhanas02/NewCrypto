
export const getCoinPrices = async (id, days)=> {

    const res =   await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    
    const data = await (res.json()) ;
 
    return data ;
  }
 
  