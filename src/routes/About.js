import React from 'react';
import AboutButton from '../components/Buttons/AboutButton';
import '../App.css'

const About = ({onRouteChange}) => {
  return (
    <div >
        <p className='f3 mt4'>
        {'This is a static website built using React JS, tachyons CSS and clarifai API . Intended for demonstration purposes.'}
      </p>
      <p className='f3 mt0'>
        {'Hope you enjoy;)'}
      </p>
      <div className="center mt4">
        <AboutButton onRouteChange={onRouteChange}/>
      </div>
      

    </div>
  )
}

export default About;