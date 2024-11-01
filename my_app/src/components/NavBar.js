import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"


const links=[
  {
    path:'/',text:"Home",id:1
  },
  {
    path:'/about',text:"About",id:2
  },
  {
    path:'/newssettler',text:"NewsSettler",id:3
  }
]

const NavBar = () => {
  return (
    <div className='nav-container' >
      <div className='main-heading-container'> 
       <p className='main-heading'>CockTail Website</p>
       </div>
       <div className='nav-links'>
     {links.map((link,)=>{
      return(
        <NavLink to={link.path}  key={link.id}  className="navbar" style={({isActive})=>({
          textDecoration :isActive ?'underline':'none',
          color:isActive?'green':'#10B981'
        })}>
          {link.text} 
        </NavLink>
      )
     })}
     </div>
    </div>
  )
}

export default NavBar
