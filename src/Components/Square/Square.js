import React from 'react';
import('./style.css');

export default props => {
  return (
    <button
      className='square'
      onClick={props.onclickHandler.bind(this, props.index)}
    >
      {props.value}
    </button>
  );
};
