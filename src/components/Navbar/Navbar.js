import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>

        <Link className='seeHome' to={'/'}>
          <h1 className='navbar-logo'>Shop</h1>
        </Link>
        
        <Link className='seeCarrito' to={'/cart'}>🛒</Link>
      </nav>
    </div>
  )
}

export default Navbar