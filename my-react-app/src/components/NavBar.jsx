import React from 'react';
import appLogo from "../assets/icon.png";
import './Navbar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <img src={appLogo} alt="JamTogether Icon" id="logo" />
          </Link>
        </li>
        <li>
          <Link to="/" className="site-title"><h1>JamTogether</h1></Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;