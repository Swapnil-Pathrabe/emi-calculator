import React from 'react';
import { numWithCommas } from '../utils/config';

const SliderInput = ({title, state, onChange, min, max, minLabel, maxLabel, underlineTitle}) => {
  return (
    <>
    <span className='title'>{title}</span>
     {state > 0 && <span className='title' style={{textDecoration: 'UnderLine'}}>
      {underlineTitle}
      </span>}
     <div>
     <input type="range" min={min} max={max} className='slider' value={state} onChange={onChange} />
     <div className='lables'>
         <label>{minLabel ?? numWithCommas(min)}</label>
         <b>{numWithCommas(state)}</b>
         <label>{maxLabel ?? numWithCommas(max)}</label>
     </div>
     </div>
    </>
  )
}

export default SliderInput