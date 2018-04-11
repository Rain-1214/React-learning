import React from 'react';

export default class RenderProps extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render () {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove.bind(this)}>
        {this.props.render(this.state)}
      </div>
    )
  }
  
}