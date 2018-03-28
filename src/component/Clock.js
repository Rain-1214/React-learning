import React from 'react'

export default class Clock extends React.Component {
  timerId = null

  constructor() {
    this.state = {
      data: new Data(),
    }
  }

  tick () {
    this.setState({
      data: new Data()
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
        <h2>current Data:{this.state.data}</h2>
      </div>
    )
  }

}
