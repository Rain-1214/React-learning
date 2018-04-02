import React from 'react';

export default class HasChildren extends React.Component {

  componentDidMount() {
    console.log(this.props.children)
  }


  render() {
    return (
      <div>
        <div className="left">
          left
          {this.props.left}
        </div>
        <div className="right">
          right
          {this.props.right}
        </div>
        <div className="insert">
          {this.props.children}
        </div>
      </div>
    )
  }
}

