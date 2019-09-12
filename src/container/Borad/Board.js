import React from 'react';
import Square from '../../Components/Square/Square';
import calcWinner from '../../utils/calcWinner';
import('./style.css');
export default class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  onclickHandler = index => {
    if (this.state.squares[index] !== null) return;
    const squares = [...this.state.squares];
    squares[index] = this.state.xIsNext ? 'X' : 'O';
    this.setState((state, _props) => ({
      squares: squares,
      xIsNext: !state.xIsNext
    }));
  };

  renderSquare(i) {
    return (
      <Square
        onclickHandler={this.onclickHandler.bind(null, i)}
        value={this.state.squares[i]}
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
