import React from 'react'
import Clock from './Clock'
import Event from './Event'
import Form from './Form'

export default class App extends React.Component {

  render () {
    return (
      <div>
        <h1>Hello world</h1>
        <Clock />
        <hr />
        <Event />
        <hr />
        <Form />
      </div>
    )
  }

}

