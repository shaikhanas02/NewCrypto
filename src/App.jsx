import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Compare from "./Pages/Compare";
import Dashboard from "./Pages/Dashboard";
import Watchlist from "./Pages/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./Pages/Coin";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { CardProvider } from "./Context/CardContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); 

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, []) ; 

  console.log(loggedIn);

  return (
        <CardProvider>
    <BrowserRouter>
      <Routes>
        console.log(loggedIn) ;
        {loggedIn ? (
          <> 
            <Route
              path="/home"
              element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
            <Route path="/compare" element={<Compare setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}
            />
            <Route path="/dashboard" element={<Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} /> 
            <Route path="/watchlist" element={<Watchlist loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
            <Route path="/dashboard/:coinId" element={<Coin />} />
          </> 
         )  
        : (
          <> 
           <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} /> 
            <Route path="/register" element={<Register />} />
          </>
         ) 
        }
      </Routes>
    </BrowserRouter>
        </CardProvider>
  );
}

export default App;
