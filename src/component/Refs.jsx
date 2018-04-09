import React from 'react'
import Clock from './Clock'

export default class Refs extends React.Component {

  constructor () {
    super();
    this.textInputRef = React.createRef();
    this.clockRef = React.createRef();
  }

  componentWillMount () {
    setTimeout(() => {
      // console.log(this.textInputRef)
      // console.log(this.buttonRef)
      // console.log(this.clockRef.current)
    }, 0)
  }

  render () {
    return (
      <div>
        1212
        <input type="text" ref={this.textInputRef}/>
        123
        <button ref={(button) => this.buttonRef = button}>button</button>
        123
        <Clock ref={this.clockRef} />
      </div>
    )
  }

}
