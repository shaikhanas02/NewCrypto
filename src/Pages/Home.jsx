import React from 'react' ;
import Header from '../Components/Common/Header'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Header />
        <h1>Go to Dashboard</h1>
        <Link to='/dashboard'>Dashboard</Link>
    </div>
  )
}

export default Home ;