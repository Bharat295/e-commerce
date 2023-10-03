
import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const WebcamPopup = ({ handleClose }) => {
    const webcamRef = useRef(null);
   
  return (
      <div className="webcam-popup">
              <div className="popup-content" >
                  <Webcam
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      className="webcam"
                      mirrored='false'
                  />
                  <button className='Cardbtn add' onClick={handleClose}>Close</button>
              </div> 
          
      
    </div>
  );
};

export default WebcamPopup;
