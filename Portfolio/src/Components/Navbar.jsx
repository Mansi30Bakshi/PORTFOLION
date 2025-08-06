import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [open,setOpen] = useState(false);

  return (
   <>
   <nav className="navbar">
      <div className="logo">Mansi Bakshi</div>

   <div className={`nav-links ${open ? 'active' : ''}`}> 
   <Link to='/' onClick = {() => setOpen(false)}>Home</Link>
   <Link to="/about" onClick={() => setOpen(false)}>About</Link>
   <Link to="/education" onClick={() => setOpen(false)}>Education</Link>
   <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
   <Link to="/experience" onClick={() => setOpen(false)}>Experience</Link>
   <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
   <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
   
   </div>
   <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={`bar ${open ? 'rotate1' : ''}`}></div>
        <div className={`bar ${open ? 'hide' : ''}`}></div>
        <div className={`bar ${open ? 'rotate2' : ''}`}></div>
   </div>
   </nav>
   </>
  )
}

export default Navbar