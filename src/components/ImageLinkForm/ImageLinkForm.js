import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit}) => {
  return ( 
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' type='tex' onChange={e => onInputChange(e)}/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib bw1 br1 white '
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
  );
}

export default ImageLinkForm;