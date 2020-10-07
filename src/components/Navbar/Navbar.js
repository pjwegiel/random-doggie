import React from 'react';
import logo from '../../assets/wetransfer-7e1d69/Untitled (1)/Union-1.png';

import { NavLink } from 'react-router-dom';

const navbar = () => (
  <nav
    className="navbar transparent navbar-fixed-top p-4"
    style={{
      backgroundColor: 'rgba(255,255,255,0.25)',
      zIndex: '2',
      position: 'absolute',
      width: '100vw',
      height: '12vh',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0',
      margin: '0',
    }}
  >
    <NavLink
      to="/info"
      style={{ color: 'white', fontSize: '4vh', height: '20px' }}
    >
      Info
    </NavLink>
    <NavLink
      to="/"
      className="navbar-brand"
      style={{
        float: 'none',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        margin: '0',
        padding: '0',
      }}
    >
      <img src={logo} alt="Logo" style={{ height: '10vh' }} />
    </NavLink>
    <div></div>
  </nav>
);

export default navbar;
