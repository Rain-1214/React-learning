import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render () {
    return (
      <div>
        <h1>This is Home Page!</h1>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/tips/ace">ace tips</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
