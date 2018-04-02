import React from 'react'

export default class Clock extends React.Component {
  timerId = 0

  constructor() {
    super();
    this.state = {
      date: new Date(),
    }
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render () {
    return (
      <div>
        <h2>current Data:{this.state.date.toLocaleString()}</h2>
      </div>
    )
  }

}
