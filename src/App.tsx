import * as React from 'react';
import * as Loadable from 'react-loadable';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import Home from './component/Home/Home';
// import About from './component/About/About';
// import Tips from './component/Tips/Tips';
import './App.css';

const Home = Loadable({
  loader: () => import('./component/Home/Home'),
  loading() {
    return <div>Loading...</div>;
  }
});
const About = Loadable({
  loader: () => import('./component/About/About'),
  loading() {
    return <div>Loading...</div>;
  }
});
const Tips = Loadable({
  loader: () => import('./component/Tips/Tips'),
  loading() {
    return <div>Loading...</div>;
  }
});

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
          <hr/>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tips" component={Tips} />
          <p>123</p>
        </div>
      </Router>
    );
  }
}

export default App;
