import React from 'react';
import ErrorTest from './ErrorTest';
import ErrorBoundaries from './Error';

export default class ErrorTestWrapper extends React.Component {

  render () {
    
    return (
      <div>
        <ErrorBoundaries>
          <ErrorTest />
        </ErrorBoundaries>
      </div>
    )
  }
}