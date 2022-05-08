import React from "react";
import Tilt from 'react-tilt';
import './Button.css'
const AboutButton = ({onRouteChange}) => {
    return (
        <div onClick={() => onRouteChange('home')} className="center">
      <Tilt className="Tilt br3 shadow-4 button pointer" options={{reverse:true,  max : 35, }} style={{ height: 100, width: 300 }} >
        <div className="Tilt-inner pa4 f4">
         Click Here
        </div>
      </Tilt>      
        </div>
      
        );
}
export default AboutButton;