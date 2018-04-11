import React from 'react'
import withSubscription from './hoc/withSubscription'

class HocTest extends React.Component {

  componentWillMount () {
    // console.log(this.props.data)
  }

  render () {
    return (
      <div>
        1233
      </div>
    )
  }

}

const HocTestWithSubscription = withSubscription(HocTest, (DataSource) => DataSource.getUser());

export default HocTestWithSubscription;