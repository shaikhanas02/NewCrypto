import { useState } from "react";
import React from "react";
import Header from "../Components/Common/Header";
import axios from "axios";
import { useNavigate } from "react-router";

function Login({setLoggedIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false) ; 
  const navigate = useNavigate() ;

  const handleSubmit = async (e) => {
    e.preventDefault() ;

    try {
      const res = await axios.post("https://newcrypto.onrender.com/login", {
        username,password
      }); 
      console.log(res.data) ;
      const { status, message } = res.data;
      
      setLoggedIn(true) ;
      
      if (status) {
        console.log("Login Successfully");
        localStorage.setItem('loggedIn', true) ;
        setLoggedIn(true) ;
        navigate("/");

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
  return (
    <div>
      {/* <Header /> */}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        />
      <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Login;
