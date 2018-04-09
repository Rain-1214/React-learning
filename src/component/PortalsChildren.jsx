import React from 'react';
import ReactDOM from 'react-dom';

export default class PortalsChildren extends React.Component {
  constructor () {
    super();
    this.el = document.createElement('div')
  }

  componentWillMount () {
    const div = document.getElementById('root');
    div.appendChild(this.el)
  }

  componentWillUnmount () {
    this.el.remove();
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }

}