import React,{useState, useEffect} from 'react' ;
import Header from '../Components/Common/Header'
import { Link } from 'react-router-dom';
import Login from './Login';

function Home({loggedIn, setLoggedIn}) {

 console.log(loggedIn) ;

  if(loggedIn){
 return (
      <div>
        <Header  setLoggedIn={setLoggedIn} />
        <h1>Go to Dashboard</h1>
        <Link to='/dashboard'>Dashboard</Link>
    </div>
  )
}
else{
  return (
    <Login />
  )
}
}

export default Home ;