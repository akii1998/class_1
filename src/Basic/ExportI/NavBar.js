import React from 'react'
import Search from './Search'
import './Nav.css'
export default function NavBar() {
  return (
    <div className='header'>
    <nav className='nav'>
        <a href ="/">Home</a>
        <a href ="/">About</a>
        <a href ="/">Contact</a>
        <a href ="/">Service</a>
    </nav>
        <Search/>
    </div>
  )
}
