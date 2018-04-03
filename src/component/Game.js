import React from 'react';
import Board from './Board';

export default class Game extends React.Component {

  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: Array(3).fill(Array(3).fill(null)),
          currentStep: {
            x: null,
            y: null
          }
        }
      ],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i) {
    let history = this.deepCopy(this.state.history);
    const squares = this.deepCopy(history[history.length - 1].squares)
    const x = i % squares.length;
    const y = Math.floor(i / squares.length);
    if (this.calculateWinner(squares) || squares[y][x]) {
      return;
    }
    squares[y][x] = this.state.xIsNext ? 'X' : 'O';
    const currentStep = { x, y }
    history = history.concat([{ squares, currentStep }]);
    const stepNumber = history.length - 1;
    this.setState({ history, stepNumber, xIsNext: !this.state.xIsNext });
  }

  loopPropertyArray = new Set()

  tag = {
    arrayTag: '[object Array]',
    objectTag: '[object Object]'
  }

  getValueTag (value) {
    if (value === null) {
      return value === undefined ? this.tag.undefinedTag : this.tag.nullTag
    }
    return Object.prototype.toString.call(value)
  }

  deepCopy (target) {
    const targetTag = this.getValueTag(target)
    if (this.loopPropertyArray.has(target) || (targetTag !== this.tag.objectTag && targetTag !== this.tag.arrayTag)) {
      return target
    }
    const result = targetTag === this.tag.arrayTag ? [] : {}
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        const currentTag = this.getValueTag(target[key])
        if (currentTag === this.tag.objectTag || currentTag === this.tag.arrayTag) {
          result[key] = this.deepCopy(target[key])
          this.loopPropertyArray.add(target[key])
        } else {
          result[key] = target[key]
        }
      }
    }
    this.loopPropertyArray = new Set()
    return result
  }

  calculateWinner(squares) {
    let centerLocation = Math.floor(squares.length / 2);
    let leadingDiagonal = squares[centerLocation][centerLocation];
    let secondaryDiagonal = leadingDiagonal;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i][i] !== leadingDiagonal && leadingDiagonal) {
        leadingDiagonal = null
      }
      if (squares[i].every(e => e === squares[i][0])) {
        return squares[i][0]
      }
      let temp = squares[0][i];
      for (let y = squares.length - 1; y >= 0; y--) {
        if (squares[i][y] !== secondaryDiagonal && secondaryDiagonal) {
          secondaryDiagonal = null
        }
        if (squares[y][i] !== temp) {
          temp = null
        }
      }
      if (temp) {
        return temp
      }
    }
    return leadingDiagonal ? leadingDiagonal : secondaryDiagonal
    // const lines = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6],
    // ];
    // for (let i = 0; i < lines.length; i++) {
    //   const [a, b, c] = lines[i];
    //   if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
    //     return squares[a]
    //   }
    // }
    // return null
  }

  jumpTo(i) {
    this.setState({
      stepNumber: i,
      xIsNext: i % 2 === 0
    })
  }

  render() {
    let status;
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);
    status = winner ? `Winner is ${winner}` : `Nest is ${this.state.xIsNext ? 'X' : 'O'}`;

    const move = history.map((step, move) => {
      const desc = move ? `move to ${move}` : 'Game start';
      return (
        <li key={move}>
          <a href="##" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      )
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board
            boardData={ current } 
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <div><button onClick={() => this.sortStep()}>Sora</button></div>
          <ol>{move}</ol>
        </div>
      </div>
    );
  }
}