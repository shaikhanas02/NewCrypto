import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";

function Header({ setLoggedIn }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px )" });
  const Navigate = useNavigate() ;
  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="flex items-center justify-between  p-4 bg-black text-white">
      <Link to="/" className="text-2xl font-bold hover:text-blue-700">
        CryptoTracker
      </Link>
      {isMobile ? (
        <div>
          <div onClick={toggleSideBar}>
            {" "}
            <AiOutlineMenu size={32} />
          </div>
          {showSidebar && (
            <div className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white">
              <nav>
                <ul className="flex flex-col">
                  <li>
                    <NavLink
                      to="/home"
                      className="mr-6 text-xl font-bold hover:text-blue-500"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/compare"
                      className="mr-6 text-xl font-bold hover:text-blue-500"
                    >
                      Compare
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/watchlist"
                      className="mr-6 text-xl font-bold hover:text-blue-500"
                    >
                      Watchlist
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="text-xl font-bold hover:text-blue-500"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setLoggedIn(false); 
                        localStorage.removeItem("loggedIn");
                        console.log("hui"); 
                        Navigate('/')
                      }}
                    >
                      <FaSignOutAlt />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      ) : (
        <nav>
          <ul className="flex flex-row">
            <li>
              <NavLink
                to="/home"
                className="mr-6 text-xl font-bold hover:text-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/compare"
                className="mr-6 text-xl font-bold hover:text-blue-500"
              >
                Compare
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/watchlist"
                className="mr-6 text-xl font-bold hover:text-blue-500"
              >
                Watchlist
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="text-xl font-bold hover:text-blue-500"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setLoggedIn(false);
                  localStorage.removeItem("loggedIn");
                  localStorage.removeItem("token");
                  Navigate('/')
                  console.log("hui");
                }}
                className="ml-2"
              >
                <FaSignOutAlt />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
