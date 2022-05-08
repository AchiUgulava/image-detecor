import React from 'react';
import ResponseButton from '../Buttons/ResponseButton';
import './FaceRecognition.css';
const FaceRecognition = ({ imageUrl, box, onRestart}) => {
  return (
      <article className=" center  br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src={imageUrl}  className="br-5 dib ba b--black-05 " title="Photo"/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        <ResponseButton onRestart={onRestart}/>
      </div>
    </article>
  );
}

export default FaceRecognition;