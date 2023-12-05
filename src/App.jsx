import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Compare from "./Pages/Compare";
import Dashboard from "./Pages/Dashboard";
import Watchlist from "./Pages/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./Pages/Coin";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("false")); 

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, []);
  console.log(loggedIn);

  return (
    <BrowserRouter>
      <Routes>
        {loggedIn ? (
          <>
            <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/dashboard/:coinId" element={<Coin />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
