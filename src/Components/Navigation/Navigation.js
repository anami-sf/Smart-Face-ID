import React from 'react';
import Logo from './Logo/Logo.js';

const Navigation = ({onRouteChange, isSignedIn}) => {
    return(
        <nav style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px', backgroundColor: 'rgb(49, 67,80)'}}>
            <Logo />
            { isSignedIn ?
                <input 
                    className = 'f5 link grow pointer bg-light-purple white'
                    type = 'submit'
                    value = 'Sign Out'
                    onClick = {() => onRouteChange('signIn')}
                >
                </input>
            :                
                <div>
                <input 
                    className = 'f5 link grow pointer mr3 bg-light-purple white'
                    type = 'submit'
                    value = 'Sign In'
                    onClick = {() => onRouteChange('signIn')}
                >
                </input>
                <input 
                    className = 'f5 link grow pointer bg-light-purple white'
                    type = 'submit'
                    value = 'Register'
                    onClick = {() => onRouteChange('register')}
                >
                </input>
                </div>
            }
        </nav>
    )
}

export default Navigation;

