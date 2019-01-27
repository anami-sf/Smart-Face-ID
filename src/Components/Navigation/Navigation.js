import React from 'react';
import Logo from './Logo/Logo.js';

const Navigation = () => {
    return(
        <nav style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px', backgroundColor: 'rgb(49, 67,80)'}}>
            <Logo />
            <span className = 'f5 link white dim grow '> Sign Out </span>
        </nav>
    )
}

export default Navigation;

