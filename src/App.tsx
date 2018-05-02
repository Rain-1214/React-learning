import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import createStoreFactory from './store/index';
import { Login } from './router/user';

const store = createStoreFactory();

class App extends React.Component {
  public render(): any {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" exact={true} component={Login} />
        </Router>
      </Provider>
    );
  }
}

export default App;
