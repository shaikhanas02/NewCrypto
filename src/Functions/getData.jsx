import React, { useState } from "react";
import { useEffect } from "react";

function getData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      ); 
      const data = await res.json();
      console.log(data); 
      setData(data);
    };
    FetchData(); 
  }, []);

  return data ;
}

export default getData;
