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
    if (this.state.squares[index] !== null || this.state.winnerPlayer !== null)
      return;

    const squares = [...this.state.squares];

    if (!calcWinner(squares)) {
      squares[index] = this.state.xIsNext ? 'X' : 'O'; // true or false
      this.setState(state => ({
        squares: squares,
        xIsNext: !state.xIsNext
      }));
    } else {
      this.setState({
        winnerPlayer: calcWinner(squares)
      });
    }
  };

  renderSquare = arr => {
    return arr.map((item, index) => {
      return (
        <Square
          key={index}
          onclickHandler={() => {
            this.onclickHandler(item);
          }}
          value={this.state.squares[item]}
        />
      );
    });
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
        <div className='board-row'>{this.renderSquare([0, 1, 2])}</div>
        <div className='board-row'>{this.renderSquare([3, 4, 5])} </div>
        <div className='board-row'>{this.renderSquare([6, 7, 8])}</div>
        <button className='replay' onClick={this.rePlay}>
          Replay
        </button>
      </div>
    );
  }
}
