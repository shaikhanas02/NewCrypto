import React,{useState, useEffect} from 'react' ;
import Header from '../Components/Common/Header'
import { Link } from 'react-router-dom';
import Login from './Login';

function Home({loggedIn, setLoggedIn}) {

 console.log(loggedIn) ;

  if(loggedIn){
 return ( 
   
   <div className='bg-black h-screen'>
        <Header  setLoggedIn={setLoggedIn} />
     <div className='bg-black-700 ml-10 mt-10'> 
        <h1 className='text-white text-3xl'>Track Crypto</h1>
        <h1 className='text-white text-2xl'>Real Time.</h1>
        <Link  className='bg-blue-700 p-1 rounded-md 'to ='/dashboard '>Dashboard</Link>
    </div> 
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