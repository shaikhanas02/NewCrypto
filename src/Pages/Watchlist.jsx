import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import Tabs from "../Components/Tabs";
import ListCards from "../Components/Common/ListCards";
import GridCards from "../Components/Common/GridCards";
import getData from "../Functions/getData";

function Watchlist() {
  const [data, setData] = useState({});

    useEffect(() => {
  

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/watchlist?id=${data.id}`);
        const info = await res.json();
        console.log(data); 
        // console.log(info.data.image.thumb)
        setData(info.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData() ;
  }, []);  
 
  console.log(data);
  const tabs = [
    {
      label: "Grid",
      content:  <GridCards key={data.id} data={data} /> ,
    },
    {
      label: "List",
      content:  <ListCards key={data.id} data={data} />,
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
