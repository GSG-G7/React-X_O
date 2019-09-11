import React from 'react';
import Square from '../Square/Square';
export default class Board extends React.Component {
  state = {
    squars: Array(9).fill(null)
  };

  onclickHandler = index => {
    const squars = [...this.state.squars];

    alert(index);
    // this.setState({ value: 'X' });
  };

  renderSquare(i) {
    // console.log(i);
    return (
      <Square
        onclickHandler={this.onclickHandler}
        value={this.state.squars[i]}
        index={i}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
