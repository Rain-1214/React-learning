import React from 'react'

export default class Pure extends React.PureComponent {

  render () {
    return (
      <div>
        <ul>
          <li>1</li>
          <li>{this.props.data}</li>
          <li>1</li>
        </ul>
      </div>
    )
  }

}
