import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import createStoreFactory from './store/index';
import { Login, Register, ForgetPassword } from './router/user';
import HandleError from './containers/common/handleError/handleErrorContainer';
import './App.scss';

const store = createStoreFactory();

class App extends React.Component {
  public render(): any {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Redirect path="/" exact={true} to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgetPassword" component={ForgetPassword} />
            <HandleError />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
