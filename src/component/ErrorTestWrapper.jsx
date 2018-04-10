import React from 'react';
import ErrorTest from './ErrorTest';
import ErrorBoundaries from './Error';

export default class ErrorTestWrapper extends React.Component {

  componentWillMount() {
    // console.log(this.strToInt("  123asdfasdf"))
  }

  strToInt(str) {
    const tempStr = str.replace(/^\s+|\s+$/g, "");
    if (tempStr.length === 0) {
      return 0;
    }
    const maxValue = Math.pow(2, 31) - 1;
    const result = tempStr.match(/(^(\+|-)[0-9]+)|(^[0-9]+)/);
    if (!result) {
      return 0;
    }
    if (result >= maxValue) {
      return maxValue
    }
    if (result <= -maxValue) {
      return -maxValue
    }
    return parseInt(result, 10);
  }

  render() {

    return (
      <div>
        <ErrorBoundaries>
          <ErrorTest />
        </ErrorBoundaries>
      </div>
    )
  }
}