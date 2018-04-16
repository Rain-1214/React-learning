import * as React from 'react';
import LoginData from '../../entity/LoginData';

class Login extends React.Component {

  login = () => {
    LoginData.login();
  }

  render () {
    return (
      <div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;