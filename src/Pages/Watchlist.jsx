import React, {useState, useEffect} from "react";
import Header from "../Components/Common/Header";
import Tabs from "../Components/Tabs" ;
// import Grid from "../Components/Grid";
import Cards from "../Components/Common/Cards";
function Watchlist() {
  const [data, setData] = useState([]);

  // Fetch data from local storage when the component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedCards")) || [];
    console.log(savedData) ;
    setData(savedData);
  }, []);

console.log(data) ;
  const tabs = [
    {
      label: "Grid",
      content: <p>Grid</p>
    },
    {
      label: "List",
      content: ( data.map((item)=>(
        <Cards key={item.id} data={item}/>) ,
        )) 
        
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
