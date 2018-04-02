import * as React from 'react'
import Clock from './Clock'
import Event from './Event'
import Form from './Form'
import Product from './Products'
import HasChildren from './HasChildren'
export default class App extends React.Component {

  render () {
    return (
      <div>
        <h1>Hello world</h1>
        <hr  />
        <Clock />
        <hr  />
        <Event />
        <hr  />
        <Form />
        <hr  />
        <Product />
        <hr  />
        <HasChildren left={'asdf'} right={'zxcv'}>123</HasChildren>
      </div>
    )
  }

}

