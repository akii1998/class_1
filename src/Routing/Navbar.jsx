import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <h1>Navbar title</h1>
    <NavLink to ="/home">Home</NavLink><br/>
    <NavLink to ="/about">About</NavLink><br/>
    <NavLink to ="/service">Service</NavLink><br/>
    <NavLink to ="/contact">Contact</NavLink><br/>
    <NavLink to ='/signup'>Signup</NavLink>
    </div>
  )
}

export default Navbar