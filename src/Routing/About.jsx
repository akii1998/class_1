import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'


const About = () => {
  return (
    <div>
         <Navbar/>
        <h1>Hello! Here you are at About Page</h1>
       
        <Link to='add'>Add</Link><br/>
        <Link to='plus'>Plus</Link><br/>
        <Link to='minus'>Minus</Link><br/>
        {/* <Outlet/> */}
        {/* <Link to='/home' >Home</Link><br/>
        <Link to='/contact'>Contact</Link><br/>
        <Link to='/service'>Service</Link><br/> */}
    </div>
  )
}

export default About