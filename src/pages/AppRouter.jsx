import React from 'react'
import Login from "./Login"
import Home from "./Home"
import About from "./About"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Routes, Route } from "react-router-dom"
import NotFound from './NotFound'
import Contact from './Contact'


function AppRouter() {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>

    </div>
  )
}

export default AppRouter