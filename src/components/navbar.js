import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";

const Navbar = () => {
  return (
      <nav className="navbar-container">
        {/* <div className="navbar-logo">
             <p>LOGO</p>
        </div> */}
       
       <ul>
       <a href="/" className="logo"> ZAINT </a>
       <div className="links">
       <li>
          <a href="/">Projects </a>
        </li>

        <li>
        <a href="/"> Services </a>
        </li>

       <li>
       <a href="/"> Pages </a>
        </li> 

        <li>
          <button className="startProject">Start a project  <FontAwesomeIcon icon={faArrowRight} /></button>
        </li>
        

       </div>
      
       </ul>
      </nav>
  )
}


export default Navbar