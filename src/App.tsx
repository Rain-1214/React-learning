import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import createStoreFactory from './store/index';
import { Login, Register, ForgetPassword, Student } from './router/user';
import HandleError from './containers/common/handleError/handleErrorContainer';
import './App.scss';
// import PrivateRoute from './containers/common/privateRoute/privateRouteContainer';

const store = createStoreFactory();

class App extends React.Component {
  public render(): any {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Redirect path="/" exact={true} to="/login" />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgetPassword" component={ForgetPassword} />
              <Route path="/student" component={Student} />
              {/* <PrivateRoute path="/student" component={Student} /> */}
              <Redirect path="*" exact={true} to="/login" />
            </Switch>
            <HandleError />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
