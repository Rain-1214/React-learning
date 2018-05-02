import * as Loadable from "react-loadable";
import * as React from "react";

export const Login = Loadable({
  loader: () => import('../../containers/login/loginContainer'),
  loading: () => (<div>123</div>)
});