import React from 'react';

const ImageLinkForm = ({onInput, onDetect}) => {

    return(
        <div>
            <p className = 'pb3 '>{'Smart Face ID will detect faces in your pictures.'}<br/>
                {'Enter a link to your picture below.'}
            </p>
            <div className = 'center pa4 bg-blue w-50 '>
                <div>
                    <input
                        onInput = {onInput}
                        className = 'buttons' type = 'text' 
                    >     
                    </input>
                    <button
                        onClick =  {onDetect}
                        style = {{color: 'white', backgroundColor: 'rgb(49, 67,80)'}}
                    >
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}
//#2a14f2

export default ImageLinkForm; 