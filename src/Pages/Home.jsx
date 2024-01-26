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
     <div className='bg-black-700 ml-10 mt-10 outline-red-400 animated-container'> 
        <h1 className='text-white  text-8xl font-bold animated-item1	'>Track Crypto</h1>
        <h1 className='text-blue-700 text-4xl m-2 font-semibold animated-item2'>Real Time.</h1>
        <p className='text-gray-400 ml-2 animated-item2'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <button className='mt-5 ml-2 animated-item3'>
          <Link className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300   rounded-lg text-md px-4 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' to ='/dashboard '>Dashboard</Link>
          </button>
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