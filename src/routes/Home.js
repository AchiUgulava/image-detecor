import React from 'react';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import FoodDescription from '../components/FoodDescription/FoodDescription';
const Home = ({onButtonSubmit,onInputChange,box,imageUrl,onDetectChange,detect}) => {
  return (
    <div >
        {detect===''?
        <div>
        <p className='f3 mv0'> what do you want to detect?</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p onClick={() => onDetectChange('food')} className='f3 link dim black pa3 pointer'>Food</p>
          <p onClick={() => onDetectChange('face')} className='f3 mr3 link dim black pa3 pointer'>Faces</p>
        </div>
        </div>
        :(
        <div>
            <p className='f3 mv0'> {detect} it is,</p>
            <p onClick={() => onDetectChange('face')} className='f3 mr3 link dim black pa3 pointer'> copy an image link ending with .jpg</p>
        </div>
      
      )
        }

      
    <ImageLinkForm onButtonSubmit={onButtonSubmit} onInputChange={onInputChange}/>

    {/* <FoodDescription box={box} imageUrl={imageUrl}/> */}
    <FaceRecognition box={box} imageUrl={imageUrl} />
    </div>
  )
}

export default Home;