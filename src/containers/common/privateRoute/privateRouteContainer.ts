import { MapStateToProps, connect } from "react-redux";
import { IPrivateRouteContainerMapState } from "./privateRouteContainer.type";
import { IPrivateRouteProps } from "../../../component/common/privateRoute/privateRouteComponent.type";
import { IStoreState } from "../../../store/index.type";
import PrivateRouteComponent from "../../../component/common/privateRoute/privateRouteComponent";

const mapStateToProps: MapStateToProps<IPrivateRouteContainerMapState, IPrivateRouteProps, IStoreState> = (state, ownProps) => {
  return {
    isLogin: state.user.isLogin
  }
}

const PrivateRoute = connect(
  mapStateToProps,
  null
)(PrivateRouteComponent as React.ComponentClass<IPrivateRouteProps>)

export default PrivateRoute;