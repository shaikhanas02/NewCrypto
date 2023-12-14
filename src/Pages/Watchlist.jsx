import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import Tabs from "../Components/Tabs";
import ListCards from "../Components/Common/ListCards";
import GridCards from "../Components/Common/GridCards";

function Watchlist() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newcrypto.onrender.com/watchlist`);
        const info = await res.json();

        const additionalData = [];

        for(const item of info.users){
          const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/${item.id}`
          );
          const addInfo = await res.json();
          console.log(addInfo) ;
          additionalData.push(addInfo) ;
        };

        setData(additionalData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
   
    fetchData();
    console.log(data);
  }, []);

  const tabs = [
    {
      label: "Grid",
      content: data.map((data) => <GridCards key={data.id} data={data} />),
    },
    {
      label: "List",
      content: data.map((data) => <ListCards key={data.id} data={data} />),
    },
  ];
  return (
    <div>
      <Header />
      <Tabs tabs={tabs} className="bg-slate-400" />
    </div>
  );
}

export default Watchlist;
