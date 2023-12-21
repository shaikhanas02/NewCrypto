import React, { useEffect, useState } from "react";
import ListCards from "../Components/Common/ListCards";
import Header from "../Components/Common/Header";
import SelectCoins from "../Functions/SelectCoins";
import Charts from "../Components/Common/Chart";
import CompareCharts from "../Components/Common/CompareCharts";

function Compare({loggedIn, setLoggedIn}) {
  const [id1, setId1] = useState("bitcoin");
  const [id2, setId2] = useState("ethereum");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  const arr = ['solano','bitcoin','ethereum','tether','binancecoin','ripple','usd-coin','staked-ether','cardano', 'dogecoin', 'tron','the open-network','chainlink','avalanche-2', 'matic-network', 'polkadot', 'wrapped-bitcoin' , 'dai','litecoin','shiba-inu','bitcoin-cash','uniswap','leotoken','okb','stellar','true-usd','monero','kaspa','ethereum-classic', 'cosmos' ,'crypto-com-chain','lido-dao','filecoin','hedera-hashgraph'] ; 
   
  const arr1 = arr.filter((item)=> item != id2 ) ;
  const arr2 = arr.filter((item)=> item != id1 ) ;



  useEffect(() => {
    const fetchData1 = async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id1}`);
      const data1 = await res.json();
      setData1(data1);
      console.log(data1);
        };
    fetchData1();
  }, [id1]);

  useEffect(() => {
    const fetchData2 = async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id2}`);
      const data2 = await res.json();
      setData2(data2);
    };
    fetchData2();
  }, [id2]);

  return ( 
    <div>
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      <SelectCoins setId={setId1} id={id1} arr={arr1}/>
      <SelectCoins setId={setId2} id={id2} arr={arr2}/>
      {data1 && <ListCards data={data1} /> }
      {data2 && <ListCards data={data2} /> }
      {data1 && data2 && <CompareCharts coin1={data1} coin2={data2} /> } 
    </div>
  );
}

export default Compare;
