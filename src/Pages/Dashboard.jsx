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
        <Search search={search} setSearch= {setSearch} />
        <Tabs  search={search}className="bg-slate-400" />
    </div>
  )
}

export default Dashboard