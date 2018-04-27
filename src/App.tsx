import * as React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const S = (props: any) => {
  return (
    <div>
      123
    </div>
  )
}

class App extends React.Component {
  public render(): any {
    return (
      <Router>
        <Route path="/" exact={true} component={S} />
      </Router>
    );
  }
}

export default App;
