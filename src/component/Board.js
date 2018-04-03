import React from 'react';
import { Square } from './Square';

export default class Board extends React.Component {

  renderSquare(i) {
    // console.log(Math.floor(i / this.props.squares.length), i % this.props.squares.length, this.props.squares)
    const x = i % this.props.boardData.squares.length;
    const y = Math.floor(i / this.props.boardData.squares.length)
    const isStrong = x === this.props.boardData.currentStep.x && y === this.props.boardData.currentStep.y;
    return (<Square 
      key={i}
      isStrong = {isStrong}
      value={this.props.boardData.squares[y][x]}
      onClick={() => this.props.onClick(i)}/>);
  }

  render() {
    const length = this.props.boardData.squares.length;
    const rows = [];
    for (let i = 0; i < length; i++) {
      let row = [];
      for (let y = i * 3; y < i * 3 + length; y++) {
        row.push(this.renderSquare(y));
      }
      rows.push(<div className="board-row" key={i}>{row}</div>);
    }
    
    return (
      <div>
        {rows}
      </div>
    );
  }
}
