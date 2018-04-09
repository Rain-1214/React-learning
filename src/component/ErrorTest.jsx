import React from 'react';

export default class ErrorTest extends React.Component {

  constructor () {
    super();
    this.state = {
      count: 0
    }
  }

  addCount () {
    this.setState({
      count: this.state.count + 1
    })
  }

  render () {
    if (this.state.count > 5) {
      throw new Error('Count bigger than five')
    }
    return (
      <div>
        <h1 onClick={this.addCount.bind(this)}>{this.state.count}</h1>
      </div>
    )
  }

}