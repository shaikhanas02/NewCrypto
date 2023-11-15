import React, {useState} from 'react'
import Header from '../Components/Common/Header'
import Search from '../Components/Search'
import Tabs from '../Components/Tabs'
import Grid from '../Components/Grid'
import Pagination from '../Components/Pagination'

function Dashboard() {
    const[search, setSearch] = useState('') ;

  return (
    <div>
        <Header />
        <Search setSearch= 'setSearch' />
        <Tabs className="bg-slate-400" />
{/* <Pagination /> */}
    </div>
  )
}

export default Dashboard