import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import loginComponent from './component/login/loginComponent';
import store from './store';

class App extends React.Component {
  public render(): any {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact={true} component={loginComponent} />
        </Router>
      </Provider>
    );
  }
}

export default App;
