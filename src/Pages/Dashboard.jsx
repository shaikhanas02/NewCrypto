import React, { useState } from "react";
import Header from "../Components/Common/Header";
import Search from "../Components/Search";
import Tabs from "../Components/Tabs";
import Grid from "../Components/Grid";
import Pagination from "../Components/Pagination";
import List from "../Components/List";

function Dashboard({loggedIn, setLoggedIn}) {
  const [search, setSearch] = useState("");
  const tabs = [
    { label: "Grid", content: <Grid search={search} /> },
    { label: "List", content: <List search={search} /> },
  ];
  return (
    <div 
      className="bg-black min-h-screen w-full
    " 
    >
      <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} /> 
      <Search search={search} setSearch={setSearch} />
      <Tabs tabs={tabs} className="bg-black w-full" />
      
    </div>
  );
}

export default Dashboard;
