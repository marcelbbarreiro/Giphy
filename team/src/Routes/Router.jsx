import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'
import App from "../App";
import Home from "../Views/Pages/Home"
import Dashboard from "../Views/Components/Dashboard"
import Contact from "../Views/Pages/Contact"




function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />}>
                <Route index element={<App />} />
                <Route path='home' element={<Home />} />
                <Route path='contact' element={<Contact />} />

            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}








export default Router