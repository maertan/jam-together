import React from 'react';
import appLogo from "../assets/icon.jpg";
import './Navbar.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <img src={appLogo} alt="SingTogether Icon" id="logo" />
          </Link>
        </li>
        <li>
          <Link to="/" className="site-title">SingTogether</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;