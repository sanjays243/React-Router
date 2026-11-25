import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className='nav'>
        <div className='logo' onClick={()=>navigate("/")} style={{cursor:"pointer"}}>
            <h1>Logo</h1>
            
        </div>
        <div className='menu'>
            <Link to="/">Home</Link>

            <NavLink to="/about" className={({isActive})=>isActive? "active":""}>About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Navbar