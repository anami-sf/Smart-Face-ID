import React from 'react';

const ImageLinkForm = () => {
    return(
        <div className = 'pa4 '>
            <p>{'Smart Face ID will detect faces in your pictures.'}<br/>
                {'Enter a link to your picture below.'}
            </p>
            <div className = 'center pa4 bg-blue w-30 '>
                <input className = 'buttons' type = 'text' ></input>
                <button style = {{color: 'white', backgroundColor: 'rgb(49, 67,80)'}}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm; 