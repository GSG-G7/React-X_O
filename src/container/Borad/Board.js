import React from 'react';
import Square from '../../Components/Square/Square';
import calcWinner from '../../utils/calcWinner';
import('./style.css');
export default class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
    winnerPlayer: null
  };

  onclickHandler = index => {
    if (this.state.squares[index] !== null) return; // scenario 1
    const squares = [...this.state.squares];
    if (!calcWinner(squares)) {
      squares[index] = this.state.xIsNext ? 'X' : 'O';
      this.setState((state, _props) => ({
        squares: squares,
        xIsNext: !state.xIsNext
      }));
    }
    this.setState({
      winnerPlayer: calcWinner(squares)
    });
  };

  renderSquare = i => {
    return (
      <Square
        onclickHandler={this.onclickHandler.bind(null, i)}
        value={this.state.squares[i]}
      />
    );
  };

  rePlay = () => {
    this.setState({
      squares: Array(9).fill(null),
      winnerPlayer: null
    });
  };

  render() {
    let status = this.state.winnerPlayer
      ? `Player ${this.state.winnerPlayer} is the winner`
      : 'Continue Playing';
    if (
      this.state.winnerPlayer === null &&
      !this.state.squares.includes(null)
    ) {
      status = 'No Winner';
    }

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
        <button className='replay' onClick={this.rePlay}>
          Replay
        </button>
      </div>
    );
  }
}
