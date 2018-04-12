import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Tips from './component/Tips/Tips';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Hello World</h1>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/tips">tips</Link>
            </li>
          </ul>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tips" component={Tips} />
        </div>
      </Router>
    );
  }
}

export default App;
