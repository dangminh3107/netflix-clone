import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { NavItems } from './NavItems'
import './Navbar.css'

function Navbar() {
  const [tabIndex, setTabIndex] = useState(1)
  const [show, handleShow] = useState(false);
  const navigate  = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      }
      else handleShow(false);
    })
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  }, [])
  
  return (
    <div className={`navbar ${show && 'navbar--black'}`}>
      <div className="navbar-contents">
        <img
          onClick={() => navigate("/")}
          className="navbar-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix logo"
        />
        <ul className="navbar-lists">
          {NavItems.map((navItem, index) => {
            return (
              <li 
                key={navItem.id}
                className={tabIndex === navItem.id ? `${navItem.className} active` : navItem.className}
                onClick={() => setTabIndex(navItem.id)}
              >
                {navItem.title}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="navbar-profile">
        <img
          className="navbar-avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
          alt="Netflix Avatar"
        />
        <div className="navbar-dropdown">
          <span onClick={() => navigate("/profile")}>Manage Profile</span>
          <span>Account</span>
          <span>Help Center</span>
          <span onClick={() => auth.signOut()}>Sign out of Netflix</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
