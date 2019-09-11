import React from 'react';
import('./style.css');

export default class Square extends React.Component {
  render() {
    return (
      <button
        className='square'
        onClick={this.props.onclickHandler.bind(this, this.props.index)}
      >
        {this.props.value}
      </button>
    );
  }
}
