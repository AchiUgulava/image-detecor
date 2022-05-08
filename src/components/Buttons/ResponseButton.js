import React from "react";
import Tilt from 'react-tilt';
import './Button.css'
const ResponseButton = ({onRestart}) => {
    return (
        <div onClick={() => onRestart()} className="center">
      <Tilt className="Tilt br3 shadow-4 button pointer" options={{reverse:true,  max : 35, }} style={{ height: 80, width: 200 }} >
        <div className="Tilt-inner pa4 f4">
         Restart
        </div>
      </Tilt>      
        </div>
      
        );
}
export default ResponseButton;