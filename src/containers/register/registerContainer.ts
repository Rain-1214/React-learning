import { MapDispatchToProps, connect } from "react-redux";
import { IRegisterContainerMapDispatch } from "./registerContainer.type";
import { IRegisterComponentProps } from "../../component/register/registerComponent.type";
import { loginSuccessAction } from "../../store/actions/loginActions/loginActions";
import registerComponent from "../../component/register/registerComponent";

const mapDispatchToProps: MapDispatchToProps<IRegisterContainerMapDispatch, IRegisterComponentProps> = (dispatch, ownProps) => {
  return {
    registerSuccess: (username: string, userRole: string) => {
      dispatch(loginSuccessAction(username, userRole))
    }
  }
}

const Register = connect(
  null,
  mapDispatchToProps
)(registerComponent as React.ComponentClass<IRegisterComponentProps>)

export default Register;