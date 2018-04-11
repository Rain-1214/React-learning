import React from 'react';

export default class RenderPropsTest extends React.Component {

  render () {
    return (
      <div style={{ height: "500px", width: "500px", backgroundColor: "rgba(255,0,0,0.3)" }}>
        123, {this.props.mouse.x}, {this.props.mouse.y}
      </div>
    )
  }

}
