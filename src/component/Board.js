import React from 'react';
import { Square } from './Square';

export default class Board extends React.Component {

  renderSquare(i) {
    // console.log(Math.floor(i / this.props.squares.length), i % this.props.squares.length, this.props.squares)
    return (<Square 
      value={this.props.squares[Math.floor(i / this.props.squares.length)][i % this.props.squares.length]}
      onClick={() => this.props.onClick(i)}/>);
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
