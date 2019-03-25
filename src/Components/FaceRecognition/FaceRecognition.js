import React from 'react';
import './FaceRecognition.css';

/* const displayBorder = (img) => {
    if (img) {
        return (
            <img 
            id = 'inputImg'
            className = 'bw4 b--black ' 
            src = {img} 
            alt='' 
            width='500px' 
            height='auto'
            >
            </img>
            );
            
        }else{
            return null;
        }
    } */
    
    const FaceRecognition = ({imageUrl, box}) => {
        return(
            <div className = 'center ma2 ' >
                <div className = 'absolute ' >
                    {/* {displayBorder(imageUrl)} */}
                    <img id='inputImg' alt='' src={imageUrl} width='500px' heigh='auto'/>,
                    <div 
                        className = "bounding-box"
                        style = {{
                            position: 'absolute',
                            top: box.top_border,
                            bottom: box.bottom_border,
                            right: box.right_border,
                            left: box.left_border,          
                        }}
                    >
                    </div>
                </div>           
            </div>
            );
        }
        
        export default FaceRecognition;
  //