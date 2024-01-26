import { useState } from "react";
import React from "react";
import Header from "../Components/Common/Header";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useCardContext } from "../Context/CardContext";

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {watchlistData, setWatchlistData} = useCardContext() ;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", {
        username,
        password,
      });
      console.log(res);
      const { status, token, message } = res.data;

      if (status) {
        console.log("Login Successfully");
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("token", token);

        const res = await fetch("https://newcrypto.onrender.com/watchlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const info = await res.json();
        console.log(info);
        setWatchlistData(info) ;
        setLoggedIn(true);
        navigate("/home");
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error("Login error", error);
    } finally {
      setUsername("");
      setPassword("");
    }
  };

  function handleAccount(e){
    e.preventDefault() ;
    setUsername("A") ;
    setPassword("1") ;
  }

  return (
    <div className="border border-solid border-black p-8 max-w-md mx-auto mt-10">
      <h1 className="text-4xl mb-6">Login Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
         <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >Submit</button>
        <button onClick={handleAccount}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >Guest Login</button>
      </form>
      <p className="mt-4">
        If not registered yet? <Link  className="border bg-red-500 rounded-2xl px-2 py-1 " to="/register">Register</Link> Here
      </p>
    </div>
  );
}

export default Login;
