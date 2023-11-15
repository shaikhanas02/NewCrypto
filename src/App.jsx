import React from 'react';
import Home from './Pages/Home';
import Compare from './Pages/Compare';
import Dashboard from './Pages/Dashboard';
import Watchlist from './Pages/Watchlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/compare' element={<Compare/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/watchlist' element={<Watchlist/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App ;
