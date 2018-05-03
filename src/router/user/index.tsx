import * as Loadable from "react-loadable";
import * as React from "react";

export const Login = Loadable({
  loader: () => import('../../containers/login/loginContainer'),
  loading: () => (<div>123</div>)
});

export const Register = Loadable({
  loader: () => import('../../component/register/registerComponent'),
  loading: () => (<div>123</div>)
})