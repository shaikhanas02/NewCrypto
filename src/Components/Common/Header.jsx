import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Import your CSS file

function Header() {
  return (
    <header className="flex items-center justify-between  p-4 bg-slate-800 text-white">
     <h1 className="text-2xl font-bold hover:text-red-300">CryptoTracker</h1>
      <nav>
        <ul className="flex flex-row">
          <li>
            <Link to="/" className="mr-6 text-xl font-bold hover:text-blue-500">
              Home
            </Link> 
          </li>
          <li>
            <Link to="/compare" className="mr-6 text-xl font-bold hover:text-blue-500">
               Compare
            </Link>
          </li>
          <li>
            <Link to="/watchlist" className="mr-6 text-xl font-bold hover:text-blue-500">
              Watchlist
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-xl font-bold hover:text-blue-500">
              Dashboard
            </Link>
          </li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
