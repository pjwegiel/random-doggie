import React from 'react';
import logo from '../../assets/app-icon.png';
import './Navbar.css';

import { NavLink } from 'react-router-dom';

const navbar = () => (
  <nav className="navbar">
    <NavLink to="/info" className="navbar-info">
      Info
    </NavLink>
    <NavLink to="/" className="navbar-logo">
      <img src={logo} alt="Logo" className="navbar-logo-img" />
    </NavLink>
    <div></div>
  </nav>
);

export default navbar;
