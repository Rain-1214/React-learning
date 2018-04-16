import * as React from 'react';

class PrivateComponent extends React.Component {

  render () {
    console.log('private component', this.props);
    return (
      <div>
        <h1>Private Component</h1>
      </div>
    );
  }
}

export default PrivateComponent;