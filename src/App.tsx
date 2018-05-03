import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import createStoreFactory from './store/index';
import { Login, Register } from './router/user';
import HandleError from './containers/common/handleError/handleErrorContainer';

const store = createStoreFactory();

class App extends React.Component {
  public render(): any {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" component={Register} />
            <HandleError />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
