import React from 'react';

function navbar(){
    const nav = <nav className="navbar navbar-fixed-top p-4" style={{backgroundColor: 'rgba(255,255,255,0)', zIndex: '2', position: 'absolute', width: '100%', display: 'flex'}}>
        <a href="." className="navbar-item" style={{color: 'gray'}}>Info</a>
        <a href="." className="navbar-brand" style={{color:'Black'}}>Random Doggie</a>
    </nav>;
    return nav;
}

export default navbar;