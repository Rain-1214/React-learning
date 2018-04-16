import * as React from 'react';
import LoginData from './LoginData';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';

interface PrivateRouteProps {
  // tslint:disable-next-line:no-any
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string;
}

class PrivateRoute extends React.Component<PrivateRouteProps> {

  render () {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(props) => (
        LoginData.isLogin ? (
          console.log(1),
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
      )} />
    );

  }

}

export default PrivateRoute;