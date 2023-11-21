
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getData from "../Functions/getData";
import ListCards from "../Components/Common/ListCards";
import Header from "../Components/Common/Header";
import Description from "../Components/Common/Description";
import Charts from "../Components/Common/Chart";

function Coin() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    // Fetch detailed information about the selected coin
    const fetchData = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
      const data = await response.json();
      setCoinData(data);
    };

    fetchData();
  }, [coinId]);

  if (!coinData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
        <Header />
      {/* Render additional details about the coin */}
    <ListCards data={coinData} />
    <Charts data={coinData} />
     <Description data={coinData}/>
    </div>
  ); 
}

export default Coin;
