import React from 'react';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import FoodDescription from '../components/FoodDescription/FoodDescription';
const Home = ({onButtonSubmit,onInputChange,onDetectChange,detect,onRouteChange }) => {
  return (
    <div >
        {detect===''?
        <div>
        <p className='f3 mt5'> what do you want to detect?</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p onClick={() => onDetectChange('food')} className='f3 link dim black pa3 pointer'>Food</p>
          <p onClick={() => onDetectChange('face')} className='f3 mr3 link dim black pa3 pointer'>Faces</p>
        </div>
        </div>
        :(
          <div>
        <div>
            <p className='f3 mt5'> {detect} it is,</p>
            <p className='f3 mr3 link black pa3 '> copy an image link ending with .jpg</p>
        </div>
        <ImageLinkForm onButtonSubmit={onButtonSubmit} onInputChange={onInputChange} onRouteChange={onRouteChange}/>
        </div>
      )
        }
    </div>
  )
}

export default Home;