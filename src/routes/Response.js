import React from 'react';
import FoodDescription from '../components/FoodDescription/FoodDescription';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import ResponseButton from '../components/Buttons/ResponseButton';
import '../App.css'
const Response = ({box,imageUrl,data,detect,onRestart }) => {
    return(
    <div>  {detect=="face"?
         <FaceRecognition box={box} imageUrl={imageUrl} onRestart={onRestart}/>
        :
         <FoodDescription imageUrl={imageUrl} data={data} onRestart={onRestart}/>
      }
    </div>
    )
}

export default Response;