import React from 'react';


const FoodDescription = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='200px' heigh='auto'/>
        
      </div>
    </div>
  );
}

export default FoodDescription;