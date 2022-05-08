import React from 'react';
import './index.css';
import ResponseButton from '../Buttons/ResponseButton';
const FoodDescription = ({imageUrl,data,onRestart}) => {
  return (
    <article className=" center  br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      <img src={imageUrl}  className="br-5 dib ba b--black-05 " title="Photo"/>
        <div className='text'>
      <h1 className="f3 mb2 mt3">{data.name}</h1>
      <h2 className="f5 mb2 mt3"> {data.value}</h2>
      </div>  
      <ResponseButton onRestart={onRestart}/>
    </div>
  </article>
  );
}

export default FoodDescription;