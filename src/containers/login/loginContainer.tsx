import { MapDispatchToProps, connect } from "react-redux";
import { ILoginContainerMapDispatchType } from "./loginContainer.type";
import { ILoginComponentProps } from "../../component/login/login.type";
import { loginAction } from "../../store/actions/loginActions/loginActions";
import loginComponent from "../../component/login/loginComponent";

const mapDispatchToProps: MapDispatchToProps<ILoginContainerMapDispatchType, ILoginComponentProps> = (dispatch, ownProps) => {
  return {
    loginDispatch: (username: string, password: string) => {
      dispatch(loginAction(username, password))
    }
  }
}

const mapStateToProps = () => {
  return {

  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(loginComponent)

export default Login;