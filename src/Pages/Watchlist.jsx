import React, { useState, useEffect } from "react";
import Header from "../Components/Common/Header";
import Tabs from "../Components/Tabs";
// import ListCards from "../Components/Common/ListCards";
import GridCards from "../Components/Common/GridCards";
import WatchlistCards from "../Components/Common/WatchlistCards";
import WatchgridCards from "../Components/Common/WatchgridCards";

function Watchlist({ loggedIn, setLoggedIn }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        // console.log(token);

        if (!token) {
          // Handle the case where the token is not available
          console.error("Token not found");
          return;
        }
        const res = await fetch("https://newcrypto.onrender.com/watchlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); 
        const info = await res.json();
        console.log(info); 
        const additionalData = [];

        for (const item of info.userCards) {
          const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/${item.id}`
          ); 
          const addInfo = await res.json();
          console.log(addInfo);
          additionalData.push(addInfo);
        }
        
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
      content: data.map((data) => <WatchgridCards key={data.id} data={data} isWatchList  />), 
    },
    {
      label: "List",
      content: data.map((data) => (
        <WatchlistCards key={data.id} data={data} isWatchList /> 
      )),
    },
  ];
  return (
    <div className="bg-black h-screen overflow-hidden	">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Tabs tabs={tabs} className="bg-slate-1000" />
    </div>
  );
}

export default Watchlist;
