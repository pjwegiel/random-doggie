import React from 'react';

import { NavLink } from 'react-router-dom';

const navbar = () => (
    <nav className="navbar transparent navbar-fixed-top p-4" 
    style={{backgroundColor: 'rgba(255,255,255,0)', zIndex: '2', position: 'absolute', width: '100vw', display: 'flex', justifyContent:'space-between'}}
    >
            <NavLink to="/info" style={{color:"black"}}>Info</NavLink>
            <NavLink to="/" className="navbar-brand"  
            style={{color:'Black', margin:'0', padding:'0'}}><img src="src/assets/Union-1.png" style={{height:'10vh'}}/></NavLink>
        <div></div>
    </nav>
);

export default navbar;