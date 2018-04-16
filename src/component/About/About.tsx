import * as React from 'react';
import { Prompt } from 'react-router-dom';

class About extends React.Component {

  state = {
    isBlocking: true
  };

  render () {
    return (
      <div>
        <h1>
          This is About Page!
        </h1>
        <Prompt when={this.state.isBlocking} 
                message={location => (`Are you sure you want to go to "${location.pathname}"`)} />
      </div>
    );
  }
}

export default About;