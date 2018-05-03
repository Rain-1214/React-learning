import { MapDispatchToProps, connect, MapStateToProps } from "react-redux";
import { ILoginContainerMapDispatchType, ILoginContainerMapStateType } from "./loginContainer.type";
import { loginAction } from "../../store/actions/loginActions/loginActions";
import loginComponent from "../../component/login/loginComponent";
import { ILoginComponentProps, } from './../../component/login/loginComponent.type';
import { IStoreState } from "../../store/index.type";

const mapDispatchToProps: MapDispatchToProps<ILoginContainerMapDispatchType, ILoginComponentProps> = (dispatch, ownProps) => {
  return {
    loginDispatch: (username: string, password: string) => {
      dispatch(loginAction(username, password))
    }
  }
}

const mapStateToProps: MapStateToProps<ILoginContainerMapStateType, ILoginComponentProps, IStoreState> = (state, ownProps) => {
  return {
    isLogin: state.user.isLogin,
    loginErrorMessage: state.user.loginErrorMessage,
    loginTime: state.user.loginTime
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginComponent as React.ComponentClass<ILoginComponentProps>)

export default Login; 