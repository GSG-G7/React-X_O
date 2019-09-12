import React from 'react';
import('./style.css');

const Square = props => {
  return (
    <button className='square' onClick={props.onclickHandler}>
      {props.value}
    </button>
  );
};

export default Square;
