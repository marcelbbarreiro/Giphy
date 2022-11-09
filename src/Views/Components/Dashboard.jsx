import React from 'react'
import NavBar from "./NavBar"
import Footer from "./Footer"
import {Outlet} from "react-router-dom"

function Dashboard() {
  return (
    <div className='bg-slate-50'>
        <NavBar />
        <Outlet />
        <Footer />
        
    </div>
  )
}

export default Dashboard