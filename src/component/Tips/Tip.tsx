import * as React from 'react';
import { RouteComponentProps } from 'react-router';

class Tip extends React.PureComponent<RouteComponentProps<{ message: string }>> {

  render () {
    return (
      <div>
        <p>{this.props.match.params.message || 'select a message'}</p>
      </div>
    );
  }
}

export default Tip;