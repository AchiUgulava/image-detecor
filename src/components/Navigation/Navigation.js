import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = ({ onRouteChange }) => {

      return (
        <div style={{display: 'flex',  justifyContent:"space-between"}}>
          <Logo />
           <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p onClick={() => onRouteChange('about')} className='f3 link dim black pa3 pointer'>About</p>
          <p onClick={() => onRouteChange('home')} className='f3 mr3 link dim black pa3 pointer'>Main</p>
        </nav>
        </div>
       
      );
    
}

export default Navigation;