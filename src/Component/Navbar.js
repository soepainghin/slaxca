import React from 'react'
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <div>
            <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 ">
      <a href="/"className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">Ajay Kumar</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><NavLink exact to="/" className="nav-link" >Home</NavLink></li>
        <li className="nav-item"><NavLink exact to="/service" className="nav-link">Service</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
        <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>
    </header>
  </div>
        </div>
    )
}

export default Navbar
