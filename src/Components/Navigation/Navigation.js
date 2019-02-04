import React from 'react';
import Logo from './Logo/Logo.js';

const Navigation = ({onRouteChange}) => {
    return(
        <nav style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px', backgroundColor: 'rgb(49, 67,80)'}}>
            <Logo />
            <input 
            className = 'f5 link white dim grow '
            type = 'submit'
            value = 'Sign Out'
            onClick = {onRouteChange}
            >
            </input>
        </nav>
    )
}

export default Navigation;

