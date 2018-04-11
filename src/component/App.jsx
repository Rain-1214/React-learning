import * as React from 'react'
import Clock from './Clock'
import Event from './Event'
import Form from './Form'
import Product from './Products'
import HasChildren from './HasChildren'
import Refs from './Refs'
import Pure from './Pure'
import Fragments from './Fragments'
import Portals from './Portals'
import ErrorTestWrapper from './ErrorTestWrapper'
import HocTestWithSubscription from './HocTest'
import RenderProps from './RenderProps'
import RenderPropsTest from './RenderPropsTest'
export default class App extends React.Component {

  index = 0;

  constructor() {
    super();
    this.state = {
      pureData: '123',
      liShowFlag: [false, true]
    }
  }

  componentWillMount () {
    // console.log(HocTestWithSubscription)
  }

  setPureData () {
    this.setState({
      pureData: ++this.index,
    })
  }

  render () {
    const lis = [];
    if (this.state.liShowFlag[0]) {
      lis.push(<li key={2}>
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
        <hr  />
        <Refs />                
        <hr/>
        <button onClick={this.setPureData.bind(this)}>Click</button>
        <Pure data={this.state.pureData} />
        <hr/>
        <Fragments />
        <hr/>
        <Portals />
        <hr/>
        <ErrorTestWrapper />
      </li>)
    }
    if (this.state.liShowFlag[1]) {
      lis.push(
        <li key={1}>
          <HocTestWithSubscription />
          <hr/>
          <RenderProps render={(mouse) => (
            <RenderPropsTest mouse = {mouse} />
          )} />
        </li>
      )
    }
    return (
      <div>
        <ul>
          {lis}
        </ul>
      </div>
    )
  }

}

