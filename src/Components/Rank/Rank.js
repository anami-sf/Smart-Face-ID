import React from 'react';

const Rank = ({name, entries}) => {
    return(
        <div className = 'pa2 '>
            <h2>{name} your current entry count is...</h2>
            <h1>{entries}</h1>
        </div>
    )
}

export default Rank; 