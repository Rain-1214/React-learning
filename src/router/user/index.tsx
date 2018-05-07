import * as Loadable from "react-loadable";
import * as React from "react";

export const Login = Loadable({
  loader: () => import('../../containers/login/loginContainer'),
  loading: () => (<div>loading...</div>)
});

export const Register = Loadable({
  loader: () => import('../../containers/register/registerContainer'),
  loading: () => (<div>loading...</div>)
})

export const ForgetPassword = Loadable({
  loader: () => import('../../component/forgetPassword/forgetPasswordComponent'),
  loading: () => (<div>loading...</div>)
})