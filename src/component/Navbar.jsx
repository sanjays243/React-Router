import React from 'react'
import {Link, useNavigate} from "react-router-dom"
const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='nav'>
        <div className='logo' onClick={()=>navigate("/")} style={{cursor:"pointer"}}>
            <h1>Logo</h1>
            
        </div>
        <div className='menu'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Navbar