import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ml2 mt2'>
      <Tilt className="Tilt br-100 shadow-4" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner pa3">
          <img  alt='logo' src={brain}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;