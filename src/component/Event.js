import React from 'react';

export default class Event extends React.Component {

  handleClick (e) {
    console.log(e)
    console.log(`this is:`, this)
  }

  handleClick2 = () => {
    console.log(`this is:`, this)
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Event Bind this</button>
        <button onClick={this.handleClick}>Event</button>
        <button onClick={this.handleClick2}>Event3</button>
      </div>
    )
  }
}
