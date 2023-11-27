import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import Tabs from "../Components/Tabs";
// import Grid from "../Components/Grid";
import ListCards from "../Components/Common/ListCards";
import GridCards from "../Components/Common/GridCards";
function Watchlist() {
  const [data, setData] = useState([]);

  // Fetch data from local storage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedCards")) || [];
    console.log(savedData);
    setData(savedData);
  }, []);

  // console.log(data);
  const tabs = [
    {
      label: "Grid",
      content: data.map((item)=>  <GridCards key={item.id} data={item} /> ),
    },
    {
      label: "List",
      content: data.map((item) => <ListCards key={item.id} data={item} />),
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
