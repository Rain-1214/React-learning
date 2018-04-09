import React from 'react';

export default class ErrorBoundaries extends React.Component{

  constructor () {
    super();
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch (error, info) {
    this.setState({
      error,
      errorInfo: info
    })
  }

  render () {
    
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children;
  }

}